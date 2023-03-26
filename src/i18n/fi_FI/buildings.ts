import type { InternalBuilding } from 'typings/Building';

type Extension = InternalBuilding['extensions'][0];

const multiplyExtension = (
    extension: Extension | ((index: number) => Extension),
    amount: number
): Extension[] =>
    typeof extension === 'function'
        ? new Array(amount).fill(0).map((_, index) => extension(index))
        : new Array(amount).fill(extension);

export default {
    0: {
        caption: 'Paloasema',
        color: '#FF0000',
        credits: 100_000,
        coins: 30,
        levelPrices: {
            credits: [10_000, 50_000, ...Array(22).fill(100_000)],
            coins: [10, 15, ...Array(22).fill(20)],
        },
        extensions: [
            {
                caption: 'Ambulanssilaajennus',
                credits: 100_000,
                coins: 20,
                duration: '7 päivää',
                isVehicleExtension: true,
                unlocksVehicleTypes: [5, 19, 20, 21, 22, 23],
            },
            null,
            null,
            {
                caption: 'Huoltolaajennus',
                credits: 150_000,
                coins: 15,
                duration: '5 päivää',
                isVehicleExtension: true,
                unlocksVehicleTypes: [26, 27, 28, 29, 30],
            },
        ],
        levelcost: ['1. 10.000', '2. 50.000', '3.-24. 100.000'],
        maxBuildings: '6000 yhdessä pienten paloasemien kanssa',
        maxLevel: 24,
        special:
            'Paloasemien hinta 25. paloaseman jälkeen lasketaan: 100000+(200000 * log2(asemien määrä-22))',
        startPersonnel: 10,
        startParkingLots: 1,
        startVehicles: [
            'Sammutusauto',
            'Kevyt sammutusauto',
            '(Pelastusauton (lisää hintaa 14 000) ja Säiliösammutusauton (lisää hintaa 15 900) voidaan ostaa arvosta "Kapteeni" alkaen )',
        ],
        schoolingTypes: ['Paloasema'],
        icon: 'fire',
    },
    1: {
        caption: 'Pelastajaoppilaitos',
        color: '#d9ae6f',
        credits: 500_000,
        coins: 50,
        levelPrices: {
            credits: [],
            coins: [],
        },
        extensions: multiplyExtension(
            index => ({
                caption: 'Lisäluokkahuone',
                credits: 400_000,
                coins: 40,
                duration: '7 days',
                newClassrooms: 1,
                requiredExtensions: index ? [index - 1] : [],
                cannotDisable: true,
            }),
            3
        ),
        levelcost: [],
        maxBuildings: 'Ei rajoitusta',
        maxLevel: 0,
        special: '',
        startClassrooms: 1,
        icon: 'graduation-cap',
    },
    2: {
        caption: 'Ambulanssiasema',
        color: '#ffff00',
        credits: 200_000,
        coins: 35,
        levelPrices: {
            credits: [10_000, 50_000, ...Array(12).fill(100_000)],
            coins: [10, 15, ...Array(12).fill(20)],
        },
        extensions: [],
        levelcost: ['1. 10.000', '2. 50.000', '3.-14. 100.000'],
        maxBuildings: 'Ei rajoitusta',
        maxLevel: 14,
        special: '',
        startPersonnel: 3,
        startParkingLots: 1,
        startVehicles: ['Hoitotason Ambulanssi'],
        schoolingTypes: ['Pelastustoimi'],
        icon: 'truck-medical',
    },
    3: {
        caption: 'Ammattikorkeakoulu',
        color: '#d9ae6f',
        credits: 500_000,
        coins: 50,
        levelPrices: {
            credits: [],
            coins: [],
        },
        extensions: multiplyExtension(
            index => ({
                caption: 'Lisäluokkahuone',
                credits: 400_000,
                coins: 40,
                duration: '7 days',
                newClassrooms: 1,
                requiredExtensions: index ? [index - 1] : [],
                cannotDisable: true,
            }),
            3
        ),
        levelcost: [],
        maxBuildings: 'Ei rajoitusta',
        maxLevel: 0,
        special: '',
        startClassrooms: 1,
        icon: 'graduation-cap',
    },
    4: {
        caption: 'Sairaala',
        color: '#ff0000',
        credits: 200_000,
        coins: 35,
        levelPrices: {
            credits: [],
            coins: [],
        },
        extensions: [
            {
                caption: 'Yleislääkäri',
                credits: 10_000,
                coins: 10,
                duration: '7 Days',
                cannotDisable: true,
            },
            {
                caption: 'Yleiskirurgi',
                credits: 10_000,
                coins: 10,
                duration: '7 Days',
                cannotDisable: true,
            },
            {
                caption: 'Gynekologia',
                credits: 70_000,
                coins: 15,
                duration: '7 Days',
                requiredExtensions: [1],
                cannotDisable: true,
            },
            {
                caption: 'Urologia',
                credits: 70_000,
                coins: 15,
                duration: '7 Days',
                requiredExtensions: [1],
                cannotDisable: true,
            },
            {
                caption: 'Traumatologia',
                credits: 70_000,
                coins: 15,
                duration: '7 Days',
                requiredExtensions: [1],
                cannotDisable: true,
            },
            {
                caption: 'Neurologia',
                credits: 70_000,
                coins: 15,
                duration: '7 Days',
                requiredExtensions: [0],
                cannotDisable: true,
            },
            {
                caption: 'Aivokirurgia',
                credits: 70_000,
                coins: 15,
                duration: '7 Days',
                requiredExtensions: [1],
                cannotDisable: true,
            },
            {
                caption: 'Kardiologia',
                credits: 70_000,
                coins: 15,
                duration: '7 Days',
                requiredExtensions: [0],
                cannotDisable: true,
            },
            {
                caption: 'Sydänleikkaus',
                credits: 70_000,
                coins: 15,
                duration: '7 Days',
                requiredExtensions: [1],
                cannotDisable: true,
            },
        ],
        levelcost: [],
        maxBuildings: 'Ei rajoitusta',
        maxLevel: 0,
        special: '',
        startBeds: 10,
        icon: 'hospital',
    },
    5: {
        caption: 'Lääkintähelikopteriasema',
        color: '#ffff00',
        credits: 1_000_000,
        coins: 50,
        levelPrices: {
            credits: [1_000_000],
            coins: [50],
        },
        extensions: [],
        levelcost: ['1000000'],
        maxBuildings: 'Ei rajoitusta',
        maxLevel: 2,
        special: '',
        startPersonnel: 1,
        startVehicles: [],
        startParkingLots: 1,
        schoolingTypes: ['Pelastustoimi'],
        maxBuildingsFunction: (buildingsAmountTotal: number): number =>
            buildingsAmountTotal < 125
                ? 4
                : Math.floor(buildingsAmountTotal / 25),
        icon: 'helicopter',
    },
    6: {
        caption: 'Poliisiasema',
        color: '#06377b',
        credits: 100_000,
        coins: 35,
        levelPrices: {
            credits: [10_000, 50_000, ...Array(12).fill(100_000)],
            coins: [10, 15, ...Array(12).fill(20)],
        },
        extensions: [
            {
                caption: 'Vankilan selli',
                credits: 25_000,
                coins: 5,
                duration: '7 Days',
                newCells: 1,
                cannotDisable: true,
            },
            ...multiplyExtension(
                {
                    caption: 'Lisäselli',
                    credits: 25_000,
                    coins: 5,
                    duration: '7 päivää',
                    newCells: 1,
                    cannotDisable: true,
                },
                9
            ),
            {
                caption: 'Liikenneryhmä',
                credits: 100_000,
                coins: 15,
                duration: '5 päivää',
                isVehicleExtension: true,
                unlocksVehicleTypes: [33, 34],
            },
            {
                caption: 'Rikostutkintayksikkö',
                credits: 100_000,
                coins: 15,
                duration: '5 päivää',
                isVehicleExtension: true,
                unlocksVehicleTypes: [36],
            },
        ],
        levelcost: ['1. 10.000', '2. 50.000', '3.-14. 100.000'],
        maxBuildings: 'Ei rajoitusta',
        maxLevel: 14,
        special:
            'Poliisiasemien hinta 25. poliisiaseman jälkeen lasketaan: 100000+(200000 * log2(asemien määrä-22))',
        startPersonnel: 2,
        startParkingLots: 1,
        startVehicles: ['Partioauto'],
        schoolingTypes: ['Poliisi'],
        icon: 'shield-halved',
    },
    7: {
        caption: 'Hätäkeskus',
        color: '#ff0000',
        credits: 0,
        coins: 0,
        levelPrices: {
            credits: [],
            coins: [],
        },
        extensions: [],
        levelcost: [],
        maxBuildings: '1 per 25 rakennusta',
        maxLevel: 0,
        special: '',
        isDispatchCenter: true,
        maxBuildingsFunction: (buildingsAmountTotal: number): number =>
            Math.floor(buildingsAmountTotal / 25) + 1,
        icon: 'tower-broadcast',
    },
    8: {
        caption: 'Poliisiammattikorkeakoulu',
        color: '#d9ae6f',
        credits: 500_000,
        coins: 50,
        levelPrices: {
            credits: [],
            coins: [],
        },
        extensions: multiplyExtension(
            index => ({
                caption: 'Lisäluokkahuone',
                credits: 400_000,
                coins: 40,
                duration: '7 days',
                newClassrooms: 1,
                requiredExtensions: index ? [index - 1] : [],
                cannotDisable: true,
            }),
            3
        ),
        levelcost: [],
        maxBuildings: 'Ei rajoitusta',
        maxLevel: 0,
        special: '',
        startClassrooms: 1,
        icon: 'graduation-cap',
    },
    13: {
        caption: 'Poliisihelikopteritukikohta',
        color: '#06377b',
        credits: 1_000_000,
        coins: 50,
        levelPrices: {
            credits: [1_000_000],
            coins: [50],
        },
        extensions: [],
        levelcost: ['1000000'],
        maxBuildings: 'Ei rajoitusta',
        maxLevel: 2,
        special: '',
        startPersonnel: 1,
        startVehicles: [],
        startParkingLots: 1,
        schoolingTypes: ['Poliisi'],
        maxBuildingsFunction: (buildingsAmountTotal: number): number =>
            buildingsAmountTotal < 125
                ? 4
                : Math.floor(buildingsAmountTotal / 25),
        icon: 'helicopter',
    },
    14: {
        caption: 'Kokoontumispaikka',
        color: '#FFFFFF',
        credits: 0,
        coins: 0,
        levelPrices: {
            credits: [],
            coins: [],
        },
        extensions: [],
        levelcost: [],
        maxBuildings: '1',
        maxLevel: 0,
        special: '',
        isStagingArea: true,
        icon: 'warehouse',
    },
    18: {
        caption: 'Paloasema (pieni)',
        color: '#FF0000',
        credits: 50_000,
        coins: 25,
        levelPrices: {
            credits: [10_000, 50_000, ...Array(2).fill(100_000)],
            coins: [10, 15, ...Array(2).fill(20)],
        },
        extensions: [
            {
                caption: 'Ambulanssilaajennus',
                credits: 100_000,
                coins: 20,
                duration: '7 päivää',
                isVehicleExtension: true,
                unlocksVehicleTypes: [5, 19, 20, 21, 22, 23],
            },
            null,
            null,
            {
                caption: 'Huoltolaajennus',
                credits: 150_000,
                coins: 15,
                duration: '5 päivää',
                isVehicleExtension: true,
                unlocksVehicleTypes: [26, 27, 28, 29, 30],
            },
        ],
        levelcost: ['1. 10.000', '2. 50.000', '3.-5. 100.000'],
        maxBuildings: '6000 yhdessä paloasemien kanssa',
        maxLevel: 5,
        special:
            'Voi rakentaa vain yhden laajennuksen. Paloasemien hinta 25. paloaseman jälkeen lasketaan: 100000+(200000 * log2(asemien määrä-22))',
        startPersonnel: 10,
        startParkingLots: 1,
        startVehicles: [
            'Sammutusauto',
            'Kevyt sammutusauto',
            '(Pelastusauton (lisää hintaa 14 000) ja Säiliösammutusauton (lisää hintaa 15 900) voidaan ostaa arvosta',
        ],
        schoolingTypes: ['Paloasema'],
        icon: 'fire',
    },
    19: {
        caption: 'Poliisiasema (pieni asema)',
        color: '#06377b',
        credits: 50_000,
        coins: 25,
        levelPrices: {
            credits: [10_000, 50_000, ...Array(2).fill(100_000)],
            coins: [10, 15, ...Array(2).fill(20)],
        },
        extensions: [
            {
                caption: 'Vankilan selli',
                credits: 25_000,
                coins: 5,
                duration: '7 Days',
                newCells: 1,
                cannotDisable: true,
            },
            {
                caption: 'Lisäselli',
                credits: 25_000,
                coins: 5,
                duration: '7 päivää',
                newCells: 1,
                cannotDisable: true,
            },
            {
                caption: 'Liikenneryhmä',
                credits: 100_000,
                coins: 15,
                duration: '5 päivää',
                isVehicleExtension: true,
                unlocksVehicleTypes: [33, 34],
            },
        ],
        levelcost: ['1. 10.000', '2. 50.000', '3.-5. 100.000'],
        maxBuildings: 'Ei rajoitusta',
        maxLevel: 5,
        special:
            'Poliisiasemien hinta 25. poliisiaseman jälkeen lasketaan: 100000+(200000 * log2(asemien määrä-22))',
        startPersonnel: 2,
        startParkingLots: 1,
        startVehicles: ['Partioauto'],
        schoolingTypes: ['Poliisi'],
        icon: 'shield-halved',
    },
    20: {
        caption: 'Ambulanssiasema (pieni asema)',
        color: '#ffff00',
        credits: 100_000,
        coins: 25,
        levelPrices: {
            credits: [10_000, 50_000, ...Array(2).fill(100_000)],
            coins: [10, 15, ...Array(2).fill(20)],
        },
        extensions: [],
        levelcost: ['1. 10.000', '2. 50.000', '3.-5. 100.000'],
        maxBuildings: 'Ei rajoitusta',
        maxLevel: 5,
        special: '',
        startPersonnel: 3,
        startParkingLots: 1,
        startVehicles: ['Hoitotason ambulanssi'],
        schoolingTypes: ['Pelastustoimi'],
        icon: 'truck-medical',
    },
    23: {
        caption: 'Rajavartioasema',
        color: '#06377b',
        credits: 500_000,
        coins: 25,
        levelPrices: {
            credits: [10_000, 50_000, ...Array(2).fill(100_000)],
            coins: [10, 15, ...Array(2).fill(20)],
        },
        extensions: [],
        levelcost: ['1. 10.000', '2. 50.000', '3.-5. 100.000'],
        maxBuildings: 'Ei rajoitusta',
        maxLevel: 20,
        special: '',
        startPersonnel: 5,
        startParkingLots: 1,
        startVehicles: [],
        schoolingTypes: ['Poliisi'],
        icon: 'ship',
    },
    24: {
        caption: 'Rannikkovartioston lentoasema',
        color: '#06377b',
        credits: 1_000_000,
        coins: 50,
        levelPrices: {
            credits: [...Array(2).fill(1_000_000)],
            coins: [...Array(2).fill(50)],
        },
        extensions: [],
        levelcost: ['1. 1.000.000', '2. 1.000.000'],
        maxBuildings: 'Ei rajoitusta',
        maxLevel: 2,
        special: '',
        startPersonnel: 3,
        startParkingLots: 0,
        startVehicles: [],
        schoolingTypes: ['Poliisi'],
        icon: 'helicopter',
    },
} satisfies Record<number, InternalBuilding>;
