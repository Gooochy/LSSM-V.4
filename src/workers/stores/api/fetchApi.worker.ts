import TypedWorker, { type WorkerSelf } from '@workers/TypedWorker';

import type { Building } from 'typings/Building';
import type { SchoolingAPI } from 'typings/api/Schoolings';
import type { Vehicle } from 'typings/Vehicle';
import type { APIKey, APIs } from '@stores/newApi';

type ApiFetchResults = APIs & {
    vehicles: Vehicle[];
    buildings: Building[];
    alliance_buildings: Building[];
    schoolings: SchoolingAPI;
    alliance_schoolings: SchoolingAPI;
};

interface Storage {
    lastUpdates: Map<APIKey, number>;
    apiStorage: Partial<APIs>;
}

type Scripts = ['checkRequestInit'];

class FetchApiWorker extends TypedWorker<
    Storage,
    [api: APIKey, init: RequestInit],
    Promise<APIs[APIKey]>,
    Scripts
> {
    constructor() {
        super(
            'api/fetch.worker',
            async <Api extends APIKey>(
                self: WorkerSelf<Storage, Scripts>,
                api: Api,
                init: RequestInit
            ): Promise<APIs[Api]> => {
                // this is not the 5 Minutes used in API store to avoid issues with different transaction times etc.
                const API_UPDATE_AFTER = [
                    'schoolings',
                    'alliance_schoolings',
                ].includes(api)
                    ? 30 * 1000 // 30 seconds for schoolings
                    : 4.5 * 60 * 1000; // 4 Minutes and 30 seconds

                // init the last updates map if it doesn't exist
                self.lastUpdates ??= new Map<APIKey, number>();
                self.apiStorage ??= {};

                // if the API has been fetched in the last 4.5 minutes, return the stored result
                const stored = self.apiStorage[api];
                if (
                    stored &&
                    (self.lastUpdates.get(api) ?? 0) >
                        Date.now() - API_UPDATE_AFTER
                )
                    return Promise.resolve(stored);

                self.checkRequestInit(init);

                // TODO: Add support for paged API (/api/v2) for supported APIs (vehicles)

                return (
                    fetch(new URL(`/api/${api}`, location.origin), init)
                        .then(res => res.json())
                        // TODO: wait for Typescript extends oneof, then remove the casts
                        .then((res: ApiFetchResults[Api]) => {
                            // we want to store vehicles and buildings by ID for easier access
                            // TODO: Remove Array.isArray check when Typescript extends oneof is available
                            if (
                                Array.isArray(res) &&
                                (api === 'vehicles' ||
                                    api === 'buildings' ||
                                    api === 'alliance_buildings')
                            ) {
                                // @ts-expect-error unfortunately, typescript doesn't understand that we're filtering here (we need the extends oneof!)
                                const byId: APIs[Api] = {};
                                for (const item of res) byId[item.id] = item;
                                return byId;
                            } else if (
                                'result' in res &&
                                (api === 'schoolings' ||
                                    api === 'alliance_schoolings')
                            ) {
                                return res.result as APIs[Api];
                            }

                            return res;
                        })
                        .then(result => {
                            self.apiStorage[api] = result;
                            self.lastUpdates.set(api, Date.now());
                            return result;
                        })
                );
            },
            ['checkRequestInit']
        );
    }

    // we're overriding the run method so that we can have a better and more explicit return type
    run<Api extends APIKey>(
        api: Api,
        init: RequestInit
    ): Promise<Exclude<APIs[Api], null>> {
        // we unfortunately have to cast here explicitly
        return super.run(api, init) as Promise<Exclude<APIs[Api], null>>;
    }
}

export default new FetchApiWorker();
