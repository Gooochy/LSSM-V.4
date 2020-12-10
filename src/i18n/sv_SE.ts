//import { Building } from 'typings/Building';

// Commented as dir ./sv_SE does not exist currently
// const furtherFiles = require.context('./sv_SE/', true, /.*(\/index)?\.js(on)?/);
const modules = {
    appstore: {
        save: 'Spara',
        reset: 'Återställ',
        noMapkit:
            'Denna modul fungerar inte med "Mapkit" på grund av Mapkit-begränsningar!',
        dev:
            'Den här modulen är fortfarande under utveckling. Att aktivera det kan orsaka fel! ',
        closeWarning: {
            title: 'Osparade ändringar',
            text:
                'Du har gjort ändringar i AppStore som ännu inte har sparats. Återställ eller spara dem för att stänga AppStore.',
            close: 'Stäng meddelandet',
        },
    },
    settings: {
        name: 'Inställningar',
        save: 'Spara',
        discard: 'Avbryt ändringar',
        reset: 'Återställ',
        export: 'Exportera',
        import: 'Importera',
        resetWarning: {
            title: 'Återställ inställningar',
            text:
                'Vill du återställa standardinställningarna? Det kan inte bli ogjort! ',
            close: 'Avbryt',
            total: 'Alla inställningar',
            module: 'Endast för den här modulen',
        },
        resetWarningSetting: {
            title: 'Återställ inställningar',
            text:
                'Vill du verkligen återställa den här inställningen <b>{setting}</b> för modulen <b>{module}</b> till dess standardvärde?',
            close: 'Avbryt',
            reset: 'Återställ',
        },
        closeWarning: {
            title: 'Osparade ändringar',
            text:
                'Du har gjort ändringar i inställningarna som ännu inte har sparats. Återställ dem, avbryt dem eller spara dem för att stänga inställningarna.',
            close: 'Stäng meddelandet',
        },
        changeList: {
            true: 'På',
            false: 'Av',
        },
    },
} as { [moduleId: string]: { [key: string]: unknown } };

const t = {} as { [key: string]: unknown };

// Commented as dir ./it_IT does not exist currently
// furtherFiles
//     .keys()
//     .forEach(
//         key => (t[key.split('/')[1].replace(/\..*$/, '')] = furtherFiles(key))
//     );

export default {
    modules,
    ...t,
    error: {
        title: 'LSS Manager: Fel',
        msg: 'Om detta fel inträffar ofta, rapportera det till LSSM-teamet!',
    },
    warnings: {
        version: {
            title: 'Fel version av LSS Manager',
            text:
                'Kära användare, tyvärr har du inte den senaste versionen av LSS Manager. Den senaste versionen är {version} och du har {aktuell}. Ladda om spelet genom att rensa cacheminnet (Ctrl + F5 eller kommando + R på Apple), detta bör lösa problemet. Om problemet kvarstår, vänligen rapportera det till teamet! Om du använder fel version kan vi inte garantera att LSS-Manager fungerar till fullo. ',
            close: 'Stäng detta meddelande och ladda om spelet (rekommenderas)',
            abort: 'Stäng detta meddelande utan att ladda om spelet',
        },
    },
    globalSettings: {
        name: 'Allmänna inställningar',
        labelInMenu: {
            title: 'Titel istället för en ikon i menyn',
            description:
                'Visar en enkel titel i navigeringsfältet istället för LSSM-logotypen',
        },
        allowTelemetry: {
            description:
                'Kontrollerar om LSS-Manager får skicka data, vilket hjälper oss att utveckla detta extensions.',
            title: 'Tillåt telemetri',
        },
        iconBg: {
            description: 'Ändra bakgrunden till LSSM-ikon!',
            title: 'LSSM-ikon bakgrund',
        },
        iconBgAsNavBg: {
            description:
                'Färga hela navigeringsfältet med bakgrundsfärgen på LSSM-ikonen!',
            title: 'Färga navigeringsfältet',
        },
    },
    vehicles: {
        0: {
            caption: 'BAS 1 - Släckbil',
            color: '#cc0000',
            coins: 25,
            credits: 5_000,
            minPersonnel: 1,
            maxPersonnel: 6,
        },
        1: {
            caption: 'BAS 2 - Släckbil',
            color: '#bb0000',
            coins: 25,
            credits: 5_000,
            minPersonnel: 1,
            maxPersonnel: 3,
        },
        2: {
            caption: 'Stegbil',
            color: '#d92626',
            coins: 30,
            credits: 10_000,
            minPersonnel: 1,
            maxPersonnel: 3,
            special: 'Krävs när du har byggt 3 brandstationer',
        },
        3: {
            caption: 'Brandbefäl',
            color: '#d02525',
            coins: 25,
            credits: 10_000,
            minPersonnel: 1,
            maxPersonnel: 3,
            special: 'Krävs när du har byggt 6 brandstationer',
        },
        4: {
            caption: 'Lastväxlare',
            color: '#ad1f1f',
            coins: 25,
            credits: 12_180,
            minPersonnel: 1,
            maxPersonnel: 4,
            special: 'Krävs när du har byggt 4 brandstationer',
        },
        5: {
            caption: 'Ambulans',
            color: '#9c1c1c',
            coins: 25,
            credits: 5_000,
            minPersonnel: 1,
            maxPersonnel: 2,
        },
        6: {
            caption: 'Tankbil',
            color: '#aa0000',
            coins: 25,
            credits: 17_300,
            minPersonnel: 1,
            maxPersonnel: 3,
            special: 'Krävs när du har byggt 7 brandstationer',
        },
        7: {
            caption: 'Kemskyddsenhet',
            color: '#770000',
            coins: 25,
            credits: 19_200,
            minPersonnel: 1,
            maxPersonnel: 6,
            special: 'Krävs när du har byggt 11 brandstationer',
            schooling: 'Brandstation - Farligt gods',
            shownSchooling: 'Farligt gods',
        },
        8: {
            caption: 'Radiobil',
            color: '#000f89',
            coins: 25,
            credits: 5_000,
            minPersonnel: 2,
            maxPersonnel: 2,
        },
        9: {
            caption: 'Ambulanshelikopter',
            color: '#e61919',
            coins: 30,
            credits: 300_000,
            minPersonnel: 3,
            maxPersonnel: 5,
        },
        10: {
            caption: 'Luftfordon',
            color: '#d90e0e',
            coins: 25,
            credits: 11_680,
            minPersonnel: 1,
            maxPersonnel: 3,
            special: 'Krävs när du har byggt 5 brandstationer',
        },
        11: {
            caption: 'Räddningsledning',
            color: '#791515',
            coins: 25,
            credits: 25_500,
            minPersonnel: 1,
            maxPersonnel: 6,
            schooling: 'Brandstation - Mobil ledning',
            shownSchooling: 'Mobilt ledningsvehicle',
            special: 'Nödvändigt när du har byggt 13 Brandstationbaser',
        },
        12: {
            caption: 'Räddningsbil',
            color: '#b80000',
            coins: 25,
            credits: 19_000,
            minPersonnel: 2,
            maxPersonnel: 6,
        },
        13: {
            caption: 'Polishelikopter',
            color: '#000f89',
            coins: 30,
            credits: 300_000,
            minPersonnel: 2,
            maxPersonnel: 4,
            schooling: 'Polis - Polishelikopterpilotutbildning',
            shownSchooling: 'Polishelikopterpilotutbildning',
        },
        14: {
            caption: 'Bepansrat insatsfordon',
            color: '#000f89',
            coins: 25,
            credits: 10_000,
            minPersonnel: 8,
            maxPersonnel: 8,
            schooling: 'Polis - Insatspolisutbildning',
            shownSchooling: 'Insatspolisutbildning',
        },
        15: {
            caption: 'Hundenhet',
            color: '#000f89',
            coins: 25,
            credits: 7_000,
            minPersonnel: 1,
            maxPersonnel: 2,
            schooling: 'Polis - Hundförarutbildning',
            shownSchooling: 'Hundförarutbildning',
            special: 'Krävs från 6 polisstationer',
        },
        16: {
            caption: 'Polismotorcykel',
            color: '#000f89',
            coins: 18,
            credits: 2_500,
            minPersonnel: 1,
            maxPersonnel: 1,
            schooling: 'Polis - MC-Polisutbildning',
            shownschooling: 'Polismotorcykel',
        },
        17: {
            caption: 'Insatsfordon',
            color: '#000f89',
            coins: 12,
            credits: 6_000,
            minPersonnel: 3,
            maxPersonnel: 5,
            schooling: 'Polis - Insatspolisutbildning',
            shownSchooling: 'Insatspolisutbildning',
            special: 'Krävs när du har byggt 8 polisstationer',
        },
        18: {
            caption: 'Dykbil',
            color: '#2229aa',
            coins: 25,
            credits: 19_000,
            minPersonnel: 1,
            maxPersonnel: 6,
            schooling: 'Brandstation - Dykarutbildning',
            shownSchooling: 'Dykarutbildning',
        },
        19: {
            caption: 'Tryckkammarbil',
            color: '#2229aa',
            coins: 25,
            credits: 19_000,
            minPersonnel: 1,
            maxPersonnel: 6,
            schooling: 'Brandstation - Livräddning',
            shownSchooling: 'Livräddning',
        },
        20: {
            caption: 'Liten räddningsbåt',
            color: '#2230aa',
            coins: 12,
            credits: 6_000,
            minPersonnel: 0,
            maxPersonnel: 0,
            special:
                'Tillbehörsbåt som kan bogseras med verktygenheten. Kräver att Liten räddningsbåt-utbildad personal ska fungera. <br> Båttrailern kan inte tilldelas personal, <br> antingen tilldela din utbildade personal till dragvehicleet eller tilldela dem till en separat enhet på väg.',
        },
        21: {
            caption: 'Terrängbil',
            color: '#d71919',
            coins: 19,
            credits: 19_000,
            minPersonnel: 3,
            maxPersonnel: 5,
            special: '',
        },
        22: {
            caption: 'Bandvagn',
            color: '#d71919',
            coins: 8,
            credits: 8_000,
            minPersonnel: 1,
            maxPersonnel: 3,
            special: '',
        },
        23: {
            caption: 'ATV',
            color: '#d71919',
            coins: 5,
            credits: 5_000,
            minPersonnel: 1,
            maxPersonnel: 2,
            special: '',
        },
        24: {
            caption: 'Polishäst',
            color: '#000f89',
            coins: 25,
            credits: 10_000,
            minPersonnel: 0,
            maxPersonnel: 0,
            schooling: 'Polis - Rytteriutbildning',
            shownSchooling: 'Rytteriutbildning',
            special: 'Nödvändigt dragvehicle (Radiobil)',
        },
    },
    buildings: {
        0: {
            caption: 'Brandstation',
            color: '#bb0000',
            coins: 30,
            credits: 100_000,
            extensions: [
                {
                    caption: 'Ambulansutbyggnad',
                    credits: 50_000,
                    coins: 20,
                    duration: '7 dagar',
                },
                {
                    caption: 'Skogsexpansionen',
                    credits: 50_000,
                    coins: 13,
                    duration: '7 dagar',
                },
                {
                    caption: 'Sjöräddning',
                    credits: 100_000,
                    coins: 20,
                    duration: '7 dagar',
                },
            ],
            levelcost: ['1. 10.000 ', '2. 50.000', '3.-16. 100.000'],
            maxBuildings: '4.400',
            maxLevel: 16,
            special:
                'Priset på dina positioner ökar när du äger 25. Så hastigheten på progressionen är konstant när du har en stor inkomstström på dessa spelnivåer. Den nuvarande formeln för att beräkna priset på positioner är följande: <kod> 100.000+ (200.000 * LOGG <sub> 2 </sub> (Antal befintliga brandstationer - 22)) </code>.',
            startPersonnel: 10,
            startVehicles: ['BAS 1 - Släckbil', 'BAS 2 - Släckbil'],
            maxBuildingsFunction: (): number => 4_400,
        },
        1: {
            caption: 'Brandskola',
            color: '#992222',
            coins: 50,
            credits: 500_000,
            extensions: new Array(3).fill({
                caption: 'Fler klassrum',
                credits: 400_000,
                coins: 40,
                duration: '7 dagar',
            }),
            levelcost: [],
            maxBuildings: 'Ingen gräns',
            maxLevel: 0,
            special:
                "CFO och administratörer kan förbättra byggnaden genom Alliance Bank. <br> Utbildningsledare och administratörer kan initiera utbildningar.",
            startPersonnel: 0,
            startVehicles: [],
        },
        2: {
            caption: 'Ambulansstation',
            color: '#ffa500',
            coins: 35,
            credits: 200_000,
            extensions: [],
            levelcost: ['1. 10.000', '2. 50.000 ', '3.-14. 100.000'],
            maxBuildings: 'Ingen gräns',
            maxLevel: 14,
            special: '',
            startPersonnel: 3,
            startVehicles: ['Ambulans'],
        },
        4: {
            caption: 'Sjukhus',
            color: '#bbe944',
            coins: 25,
            credits: 200_000,
            extensions: [
                {
                    caption: 'Allmänt internt',
                    credits: 10_000,
                    coins: 10,
                    duration: '7 dagar',
                },
                {
                    caption: 'Allmän kirurg',
                    credits: 10_000,
                    coins: 10,
                    duration: '7 dagar',
                },
                {
                    caption: 'Gynekologi',
                    credits: 70_000,
                    coins: 15,
                    duration: '7 dagar',
                },
                {
                    caption: 'Urologi',
                    credits: 70_000,
                    coins: 15,
                    duration: '7 dagar',
                },
                {
                    caption: 'Traumatologi',
                    credits: 70_000,
                    coins: 15,
                    duration: '7 dagar',
                },
                {
                    caption: 'Neurology',
                    credits: 70_000,
                    coins: 15,
                    duration: '7 dagar',
                },
                {
                    caption: 'Neurokirurgi',
                    credits: 70_000,
                    coins: 15,
                    duration: '7 dagar',
                },
                {
                    caption: 'Kardiologi',
                    credits: 70_000,
                    coins: 15,
                    duration: '7 dagar',
                },
                {
                    caption: 'Hjärtkirurgi',
                    credits: 70_000,
                    coins: 15,
                    duration: '7 dagar',
                },
            ],
            levelcost: ['1.-20. 19.000 Credits / 11 coins'],
            maxBuildings: 'Ingen gräns',
            maxLevel: 20,
            special:
                'Ekonomichefen och administratörerna kan bygga och utöka sjukhusgranserna vid alliansbanken',
            startPersonnel: 0,
            startVehicles: [],
        },
        5: {
            caption: 'Ambulanshelikopterstation',
            color: '#e7ad2f',
            coins: 50,
            credits: 1_000_000,
            extensions: [],
            levelcost: [],
            maxBuildings: 'se Specialfunktioner',
            maxLevel: 0,
            special: 'Max antal stationer: antal buildings dividerat med 25.',
            startPersonnel: 0,
            startVehicles: [],
            maxBuildingsFunction: (buildingsAmountTotal: number): number =>
                buildingsAmountTotal < 125
                    ? 4
                    : Math.floor(buildingsAmountTotal / 25),
        },
        6: {
            caption: 'Polisstation',
            color: '#007700',
            coins: 35,
            credits: 100_000,
            extensions: [
                {
                    caption: 'Fängelsecell',
                    credits: 25_000,
                    coins: 5,
                    duration: '7 dagar',
                },
                ...new Array(9).fill({
                    caption: 'Fler celler',
                    credits: 25_000,
                    coins: 5,
                    duration: '7 dagar',
                }),
            ],
            levelcost: ['1. 10.000', '2. 50 000', '3.-14. 100.000'],
            maxBuildings: '1.700 Polisstation',
            maxLevel: 14,
            startPersonnel: 2,
            startVehicles: ['Radiobil'],
            maxBuildingsFunction: (): number => 1_700,
        },
        7: {
            caption: 'Larmcentral',
            color: '#24c3ae',
            coins: 0,
            credits: 0,
            extensions: [],
            levelcost: [],
            maxBuildings: 'En CTA för varje 25 buildings',
            maxLevel: 0,
            special: 'CTA är det administrativa centrumet.',
            startPersonnel: 0,
            startVehicles: [],
            maxBuildingsFunction: (buildingsAmountTotal: number): number =>
                Math.floor(buildingsAmountTotal / 25) + 1,
        },
        8: {
            caption: 'Polishögskola',
            color: '#225522',
            coins: 50,
            credits: 500_000,
            extensions: new Array(3).fill({
                caption: 'Fler klassrum',
                credits: 400_000,
                coins: 40,
                duration: '7 dagar',
            }),
            levelcost: [],
            maxBuildings: 'Ingen gräns',
            maxLevel: 0,
            special:
                'Finansministrar och administratörer kan (utöka) föreningspolisskolor med hjälp av poäng från föreningens finans. Kursmästare och administratörer kan starta kurser på föreningens polisskolor.',
            startPersonnel: 0,
            startVehicles: [],
        },
        13: {
            caption: 'Polisflyg',
            color: '#148423',
            coins: 50,
            credits: 1_000_000,
            extensions: [],
            levelcost: ['1. 1.000.000 Credits / 50 coins'],
            maxBuildings: 'se Specialfunktioner',
            maxLevel: 1,
            special:
                'Upp till 7 landningsplatser kan byggas per station (expansionssteg). Upp till den 125: e byggnaden (av alla typer) totalt max. Fyra landningsplatser kommer att byggas. Sedan ökar antalet med 1 var 25: e byggnad (börjar vid 125: e).',
            startPersonnel: 0,
            startVehicles: [],
            maxBuildingsFunction: (buildingsAmountTotal: number): number =>
                buildingsAmountTotal < 125
                    ? 4
                    : Math.floor(buildingsAmountTotal / 25),
        },
        14: {
            caption: 'Uppsamlingsområde',
            coins: 0,
            credits: 0,
            extensions: [],
            levelcost: [],
            maxBuildings: 1,
            maxLevel: 0,
            special:
                'Du kan bygga mittzonen gratis. Detta fungerar som en plattform och låter dig parkera och tillfälligt distribuera dina enheter. Det försvinner efter 24 timmar. Välj den eller de enheter du vill distribuera här. ',
            startPersonnel: 0,
            startVehicles: [],
            maxBuildingsFunction: (): number => 1,
        },
        16: {
            caption: 'Fängelse',
            coins: 'x',
            credits: 100_000,
            extensions: [
                {
                    caption: 'Fängelsecell',
                    credits: 25_000,
                    coins: 5,
                    duration: '7 dagar',
                },
                ...new Array(9).fill({
                    caption: 'Fler celler',
                    credits: 25_000,
                    coins: 5,
                    duration: '7 dagar',
                }),
            ],
            levelcost: [],
            maxBuildings: 'Ingen gräns',
            maxLevel: 0,
            special:
                'Denna byggnad kan endast byggas av CFO eller administratörer med Alliance Bank-krediter. Celler är tillgängliga för alla alliansmedlemmar.',
            startPersonnel: 0,
            startVehicles: [],
        },
        18: {
            caption: 'Brandstation (liten)',
            color: '#aa1111',
            coins: 25,
            credits: 50_000,
            extensions: [],
            levelcost: [
                '1. 10.000 ',
                '2. 50.000 ',
                '3.-5. 100_000',
                'Det här är en liten kasern. Om du vill bygga utbuildings eller öka antalet vehiclesplatser måste du uppgradera den för att göra den till en vanlig kasern. Denna process tar 24 timmar.',
            ],
            maxBuildings: '4400 brandstationer',
            maxLevel: 5,
            special:
                'Priset på dina positioner ökar när du äger 25. Så hastigheten på progressionen är konstant när du har en stor inkomstström på dessa spelnivåer. Den nuvarande formeln för att beräkna priset på positioner är följande: <kod> 100.000+ (200.000 * LOGG <sub> 2 </sub> (Antal befintliga brandstationer - 22)) </code>.',
            startPersonnel: 10,
            startVehicles: ['BAS 1 - Släckbil', 'BAS 2 - Släckbil'],
            maxBuildingsFunction: (): number => 4_400,
        },
        19: {
            caption: 'Polisstation (liten)',
            color: '#116611',
            coins: 25,
            credits: 50_000,
            extensions: [
                {
                    caption: 'Fängelsecell',
                    credits: 25_000,
                    coins: 5,
                    duration: '7 dagar',
                },
                ...new Array(1).fill({
                    caption: 'Fler celler',
                    credits: 25_000,
                    coins: 5,
                    duration: '7 dagar',
                }),
            ],
            levelcost: [
                '1. 10.000',
                '2. 50.000',
                '3.-4. 100.000',
                'Det här är en liten polisstation. Om du vill utöka det eller bygga fler extensions måste du bygga om det till en vanlig polisstation. Denna process tar 24 timmar. ',
            ],
            maxBuildings: '1.700 polisstation',
            maxLevel: 4,
            special:
                'Priset på dina positioner ökar när du äger 25. Så hastigheten på progressionen är konstant när du har en stor inkomstström på dessa spelnivåer. Den nuvarande formeln för att beräkna priset på positioner är följande: <kod> 100.000+ (200.000 * LOGG <sub> 2 </sub> (Antal befintliga brandstationer - 22)) </code>.',
            startPersonnel: 2,
            startVehicles: ['Radiobil'],
            maxBuildingsFunction: (): number => 1_700,
        },
        20: {
            caption: 'Ambulansstation (liten)',
            color: '#eeb611',
            coins: 25,
            credits: 100_000,
            extensions: [],
            levelcost: [
                '1. 10.000',
                '2. 50.000',
                '3.-5. 100.000',
                'Det här är en liten ambulansstation. Om du vill utöka det eller bygga fler extensions måste du bygga om det till en vanlig Paramedic Post. Denna process tar 24 timmar. ',
            ],
            maxBuildings: 'Ingen gräns',
            maxLevel: 5,
            special: '',
            startPersonnel: 3,
            startVehicles: ['Ambulans'],
        },
    },
    buildingCategories: {
        'Brandmän': {
            buildings: [0, 1, 18],
            color: '#ff2d2d',
        },
        'Ambulanser': {
            buildings: [2, 4, 5, 20],
            color: '#ffa500',
        },
        'Polis': {
            buildings: [6, 8, 13, 19],
            color: '#00ac00',
        },
        'Övrig': {
            buildings: [7, 14],
            color: '#02a18c',
        },
    },
    vehicleCategories: {
        'Brandmän': {
            vehicles: {
                'Brandbilar': [0, 1, 12],
                'Stegbilar': [2],
                'Specialfordon': [4, 6, 7, 10, 11, 19],
                'Brandbefäl': [3],
                'Båtar': [18, 20],
                'Skogsbrandbilar': [21, 22, 23],
            },
            color: '#ff2d2d',
        },
        'Ambulanser': {
            vehicles: {
                "Ambulanser": [5],
                "Ambulanshelikopter": [9],
            },
            color: '#ffa500',
        },
        'Polis': {
            vehicles: {
                "Radiobil": [8],
                "Polismotorcykel": [16],
                "Hundenhet": [15],
                "Polishelikopter": [13],
                "Bepansrat Insatsfordon": [14],
                "Insatsfordon": [17],
                "Polishäst": [24],
            },
            color: '#000f89',
        },
    },
    small_buildings: {
        0: 18,
        2: 20,
        6: 19,
    },
    vehicleBuildings: [0, 2, 5, 6, 13, 14, 18, 19, 20],
    cellBuildings: [6, 19],
    cellExtensions: [
        '6_0',
        '6_1',
        '6_2',
        '6_3',
        '6_4',
        '6_5',
        '6_6',
        '6_7',
        '6_8',
        '6_9',
        '19_0',
        '19_1',
    ],
    bedBuildings: [4],
    schoolBuildings: [1, 8],
    dispatchCenterBuildings: [7],
    schoolings: {
        Brandstation: [
            {
                caption: 'Farligt gods',
                duration: '3 dagar',
            },
            {
                caption: 'Mobil ledning',
                duration: '5 dagar',
            },
            {
                caption: 'Flygbrandsträning',
                duration: '3 dagar',
            },
            {
                caption: 'Livräddning',
                duration: '3 dagar',
            },
            {
                caption: 'Havsnavigering',
                duration: '5 dagar',
            },
            {
                caption: 'Dykarutbildning',
                duration: '5 dagar',
            },
        ],
        Polis: [
            {
                caption: 'Polishelikopterpilotutbildning ',
                duration: '7 dagar',
            },
            {
                caption: 'Insatspolisutbildning',
                duration: '5 dagar',
            },
            {
                caption: 'Hundförarutbildning',
                duration: '5 dagar',
            },
            {
                caption: 'MC-Polisutbildning',
                duration: '3 dagar',
            },
            {
                caption: 'Rytteriutbildning',
                duration: '3 dagar',
            },
        ],
    },
    amount: 'Antal',
    search: 'Sök',
    alliance: 'Allians',
    premiumNotice: 'Den här funktionen utökar en premiumfunktion i spelet och är därför endast tillgänglig för spelare med ett Larmcentralen-spelet premiumkonto!',
    credits: 'Krediter',
    close: 'Stäng',
    fullscreen: {
        expand: 'Aktivera helskärmsläge',
        compress: 'inaktivera helskärmsläge',
    },
    hideTitle: 'Visa titel | Göm titel ',
    vehicle: 'Fordon | Fordon | Fordon',
    building: 'Byggnader',
    station: 'Skydd | Vakt | Vakter',
    distance: 'Avstånd | Avstånd ',
    vehicleType: 'Fordons typ',
    fmsReal2Show: {
        1: 1,
        2: 2,
        3: 3,
        4: 4,
        5: 5,
        6: 6,
        7: 7,
        9: 9,
    },
    buildingIcons: [
        'fire',
        'graduation-cap',
        'ambulans',
        '',
        'sjukhus',
        'helikopter',
        'sköld-alt',
        'rss',
        'graduation-cap',
        '',
        '',
        '',
        '',
        'helikopter',
        'rss',
        '',
        'sköld-alt',
        '',
        'fire',
        'sköld-alt',
        'ambulans',
    ],
    pois: [
        'Arena',
        'Avfart',
        'Badhus',
        'Bank',
        'Bar',
        'Bensinmack',
        'Bilverkstad',
        'Bondgård',
        'Bro',
        'Busshålplats',
        'Centrum',
        'Fabrik',
        'Flod',
        'Flygplatsterminal',
        'Fraktgodshamn',
        'Fryshus',
        'Hotell',
        'Höghus',
        'Julmarknad',
        'Järnvägskorsning',
        'Kontorsbyggnad',
        'Kraftverk',
        'Kryssningshamn',
        'Köpcentrum',
        'Lagerbyggnad',
        'Lekpark',
        'Liten kemikalietank',
        'Liten startbana',
        'Lägenhetskomplex',
        'Mataffär',
        'Museum',
        'Nattklubb',
        'Nöjesfält',
        'Park',
        'Parkeringshus',
        'Silo',
        'Sjukhus',
        'Sjö',
        'Skog',
        'Skola',
        'Skrotupplag',
        'Småbåtshamn',
        'Snabbmatsresturang',
        'Soptipp',
        'Spårvagnshållplats',
        'Stor kemikalietank',
        'Stor startbana',
        'Stormarknad',
        'Teater',
        'Torg',
        'Tunnel',
        'Tunnelbanestation',
        'Tågstation (regional- och fjärrtåg)',
        'Tågstation (regional)',
        'Varuhus',
        'Varustation',
        'Återvinningscentral',
    ],
    only_alliance_missions: [57, 74],
    transfer_missions: [],
};
