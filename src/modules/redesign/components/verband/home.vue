<template>
    <div class="content">
        <div
            class="pull-left alliance-home-sidebar"
            v-if="
                home.image ||
                    home.meta.self ||
                    home.edit_text ||
                    home.edit_name ||
                    home.edit_logo ||
                    home.apply
            "
        >
            <div
                class="btn-group pull-right edit-btns"
                v-if="home.edit_text || home.edit_logo || home.edit_name"
            >
                <!-- Ah yes, there is really missing an `r` in `verband`. But adding the `r` results in a sweet and cool 404 :) -->
                <a
                    v-if="home.edit_text"
                    class="btn btn-default btn-xs"
                    lightbox-open
                    href="/veband/text/edit?close-after-submit"
                    :title="lightbox.$sm('edit_text')"
                >
                    <font-awesome-icon :icon="faEdit"></font-awesome-icon>
                </a>
                <a
                    v-if="home.edit_name"
                    class="btn btn-default btn-xs"
                    lightbox-open
                    :href="`/alliances/${home.meta.id}/edit?close-after-submit`"
                    :title="lightbox.$sm('edit_name')"
                >
                    {{ lightbox.$sm('edit_name') }}
                </a>
                <a
                    v-if="home.edit_logo"
                    class="btn btn-default btn-xs"
                    lightbox-open
                    href="/verband/avatar?close-after-submit"
                    :title="lightbox.$sm('edit_logo')"
                >
                    <font-awesome-icon :icon="faImage"></font-awesome-icon>
                </a>
            </div>
            <div class="clearfix"></div>
            <img :src="home.image" alt="" v-if="home.image" />
            <button
                v-if="home.meta.self"
                class="btn btn-danger pull-right"
                @click="leave"
                :title="lightbox.$sm('leave.title')"
            >
                {{ lightbox.$sm('leave.title') }}
            </button>
            <div
                class="alert alert-danger"
                v-if="home.no_apply_box.length"
                v-html="home.no_apply_box"
            ></div>
            <button
                v-if="home.appliable"
                :disabled="home.no_apply_box.length"
                class="btn btn-success pull-right"
                @click="apply"
                :title="lightbox.$sm('apply')"
            >
                {{ lightbox.$sm('apply') }}
            </button>
            <button
                v-if="home.applied"
                class="btn btn-danger pull-right"
                @click="unapply"
                :title="lightbox.$sm('unapply')"
            >
                {{ lightbox.$sm('unapply') }}
            </button>
            <div class="clearfix"></div>
            <div class="alert alert-success" v-if="home.applied">
                {{ lightbox.$sm('applied') }}
            </div>
        </div>
        <div class="alliance-home-text" v-html="home.text"></div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';

import { faEdit } from '@fortawesome/free-solid-svg-icons/faEdit';
import { faImage } from '@fortawesome/free-solid-svg-icons/faImage';

import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { RedesignSubComponent } from 'typings/modules/Redesign';
import { VerbandHomeWindow } from '../../parsers/verband/home';

type Component = RedesignSubComponent<
    'home',
    'verband/home',
    VerbandHomeWindow,
    {
        faEdit: IconDefinition;
        faImage: IconDefinition;
    },
    {
        leave(): void;
        apply(): void;
        unapply(): void;
    }
>;

export default Vue.extend<
    Component['Data'],
    Component['Methods'],
    Component['Computed'],
    Component['Props']
>({
    name: 'verband-home',
    data() {
        return {
            faEdit,
            faImage,
            applied: false,
        };
    },
    methods: {
        leave() {
            // eslint-disable-next-line @typescript-eslint/no-this-alias
            const LSSM = this;
            this.$modal.show('dialog', {
                title: this.lightbox.$sm('leave.title'),
                text: this.lightbox.$sm('leave.text', {
                    caption: this.home.meta.name,
                }),
                buttons: [
                    {
                        title: this.lightbox.$sm('leave.cancel'),
                        default: true,
                        handler() {
                            LSSM.$modal.hide('dialog');
                        },
                    },
                    {
                        title: this.lightbox.$sm('leave.confirm'),
                        async handler() {
                            const url = new URL(
                                `/verband/verlassen`,
                                window.location.origin
                            );
                            url.searchParams.append('_method', 'post');
                            url.searchParams.append(
                                'authenticity_token',
                                LSSM.home.authenticity_token
                            );
                            LSSM.$store
                                .dispatch('api/request', {
                                    url: `/verband/verlassen`,
                                    init: {
                                        credentials: 'include',
                                        headers: {
                                            'Content-Type':
                                                'application/x-www-form-urlencoded',
                                        },
                                        referrer: new URL(
                                            `/verband`,
                                            window.location.origin
                                        ),
                                        body: url.searchParams.toString(),
                                        method: 'POST',
                                        mode: 'cors',
                                    },
                                    feature: `redesign-alliance-leave`,
                                })
                                .then(() => {
                                    LSSM.$modal.hide('dialog');
                                    LSSM.$set(
                                        LSSM.lightbox,
                                        'src',
                                        `/alliances`
                                    );
                                });
                        },
                    },
                ],
            });
        },
        apply() {
            this.$store
                .dispatch('api/request', {
                    url: `/verband/bewerben/${this.home.meta.id}`,
                    feature: `redesign-alliance-leave`,
                })
                .then(() => {
                    this.$set(this.lightbox.data, 'applied', true);
                    this.$set(this.lightbox.data, 'appliable', false);
                });
        },
        unapply() {
            this.$store
                .dispatch('api/request', {
                    url: `/verband/bewerben/${this.home.meta.id}/zurueckziehen`,
                    feature: `redesign-alliance-leave`,
                })
                .then(() => {
                    this.$set(this.lightbox.data, 'applied', false);
                    this.$set(this.lightbox.data, 'appliable', true);
                });
        },
    },
    props: {
        home: {
            type: Object,
            required: true,
        },
        url: {
            type: String,
            required: true,
        },
        lightbox: {
            type: Object,
            required: true,
        },
        $m: {
            type: Function,
            required: true,
        },
        $mc: {
            type: Function,
            required: true,
        },
        getSetting: {
            type: Function,
            required: true,
        },
        setSetting: {
            type: Function,
            required: true,
        },
    },
    watch: {
        home() {
            this.lightbox.finishLoading('verband/home-updated-data');
        },
    },
    mounted() {
        // eslint-disable-next-line @typescript-eslint/no-this-alias
        const Alliance = this;
        this.$store.dispatch('event/addListener', {
            name: 'redesign-edit-alliance-text-submitted',
            listener({ detail: { content } }: CustomEvent) {
                if (Alliance.home.meta.self)
                    Alliance.$set(Alliance.lightbox.data, 'text', content);
            },
        });
        this.$store.dispatch('event/addListener', {
            name: 'redesign-edit-alliance-avatar-submitted',
            listener({ detail: { img } }: CustomEvent) {
                if (Alliance.home.meta.self)
                    Alliance.$set(Alliance.lightbox.data, 'image', img);
            },
        });
        this.$store.dispatch('event/addListener', {
            name: 'redesign-edit-alliance-name-submitted',
            listener({ detail: { content } }: CustomEvent) {
                if (Alliance.home.meta.self)
                    Alliance.$set(Alliance.lightbox.data.meta, 'name', content);
            },
        });
        this.lightbox.finishLoading('verband/home-mounted');
    },
});
</script>

<style scoped lang="sass">
.content
    display: flex

    .alliance-home-sidebar
        margin-right: 1rem
        max-width: 300px

        .edit-btns
            margin-bottom: 1rem

        img
            min-width: 90%
            display: block
            margin: auto

    .alliance-home-text
        width: 100%
</style>
