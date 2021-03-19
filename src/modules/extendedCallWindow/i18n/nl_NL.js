module.exports = {
    arrCounter: {
        resetTexts: {
            counter: 'Inzetvoorstelteller',
            highlight: 'Inzetvoorstelomranding',
            selection: 'Voertuigselectie',
            counter_highlight: 'Inzetvoorstelteller / -omranding',
            counter_selection: 'Inzetvoorstelteller en voertuigselectie',
            highlight_selection: 'Inzetvoorstelomranding en voertuigselectie',
            counter_highlight_selection:
                'Inzetvoorstelteller / -omranding en voertuigselectie',
        },
        reset: '{text} terugzetten',
    },
    arrHover: {
        reset: 'De voertuigselectie zal vooraf worden gereset!',
        headers: {
            set: 'Aantal',
            attribute: 'Naam',
            free: 'Vrij',
            max: 'Max',
        },
        titles: {
            set:
                'Zo vaak wordt dit voertuigtype geselecteerd, als je op deze inzetvoorstel drukt',
            attribute: 'Het voertuigtype dat geselecteerd wordt',
            free: 'Zo vaak is dit voertuigtype beschikbaar',
            max:
                'Zo vaak kan je dit inzetvoorstel selecteren, totdat dit voertuigtype niet meer beschikbaar is',
        },
        arrSpecs: {
            fire: 'Tankautospuit',
            elw: 'Officier van Dienst Brandweer',
            elw2: 'Hoofdofficier van Dienst - Brandweer',
            elw3: 'Commandovoertuig of haakarmbak',
            dlk: 'Redvoertuig',
            wasser_amount: 'Water (in Liters)',
            arff: 'Crashtender',
            elw_airport: 'Airport Fire Officer / On Scene Commander',
            rtw: 'Ambulance',
            kdow_orgl: 'Officier van Dienst Geneeskunde',
            nef: 'MMT-Auto of Lifeliner',
            rth_only: 'Lifeliner',
            nef_only: 'MMT-Auto',
            ktw: 'Zorgambulance',
            fly_car: 'Rapid Responder',
            ambulance_or_rapid_responder: 'Ambulance of Rapid Responder',
            kdow_orgl_any: 'OVD-G of OVDG-RR',
            fly_car_any: 'OVDG-RR of Rapid Responder',
            rw_only: 'Hulpverleningsvoertuig',
            rw: 'HV of TS-HV',
            gwl2wasser:
                'Slangenwagen / Watertankwagen of Watertransportsysteem-haakarmbak',
            gwl2wasser_only: 'Alleen Slangenwagen / Watertankwagen',
            abl2wasser_only: 'Watertransportsysteem-haakarmbak',
            gw_taucher: 'Waterongevallenvoertuig',
            boot: 'WOA (Water ongeval aanhanger)',
            gwa: 'Adembeschermingsvoertuig of haakarmbak',
            ab_atemschutz_only: 'Adembeschermingshaakarmbak',
            gwmesstechnik: 'Dienstbus Verkenningseenheid Brandweer',
            gwgefahrgut: 'Adviseur Gevaarlijke Stoffen',
            mtw: 'Dienstauto / Dienstbus brandweer',
            fustw: 'Politie Noodhulp',
            police_motorcycle: 'Dienstmotor Noodhulp',
            fustw_or_police_motorcycle:
                'Politie Noodhulp of Dienstmotor Noodhulp',
            polizeihubschrauber: 'Politiehelikopter',
            hondengeleider: 'Hondengeleider',
            ovd_p: 'Officier van Dienst - Politie',
            lebefkw: 'ME Commandovoertuig',
            grukw: 'ME Groepsvoertuig',
            spokesman: 'Voorlichters',
            at_c: 'AT-Commandant',
            at_o: 'AT-Operator',
            at_m: 'AT-Materiaalwagen',
            police_car_3: 'NH-O',
            bike_police: 'DB-Bike',
            gefkw: 'DB-AV',
        },
    },
    enhancedMissingVehicles: {
        vehicle: 'Voertuigtype',
        missing: 'Missende voertuigen',
        driving: 'Aanrijdend',
        total: 'Nog nodig',
        tip: {
            dragging: 'Verplaats venster',
            textMode: 'Tekstmodus aan/uit',
            minified: 'Inklappen',
            overlay: 'Overlay',
            reload: 'Herladen',
            pushRight: 'Toon deze box boven de voertuigenlijst',
            pushLeft: 'Toon deze box op de originele plek',
        },
        selected: 'Geselecteerd',
        vehiclesByRequirement: {
            [/^Tankautospuit(en)?$/]: [
                0,
                1,
                6,
                7,
                8,
                9,
                12,
                14,
                15,
                17,
                50,
                62,
            ],
            [/^Redvoertuig(en)?$/]: [2, 18],
            [/^Officier(en)? van Dienst - Brandweer$/]: [3, 19],
            [/^Hulpverleningsvoertuig(en)?$/]: [4, 51, 62],
            [/^Adembeschermingsvoertuig of haakarmbak$/]: [5, 27],
            [/^Slangenwagen$/]: [10, 29, 34, 45, 61],
            [/^watertankwagen of gelijkwaardige haakarmbak$/]: [], //hopefully dont show
            [/^Hoofd Officier(en)? van Dienst$/]: [19],
            [/^Commandowagen(s)?$/]: [31, 32],
            [/^Verkenningseenh(eden|eid)$/]: [11],
            [/^Adviseur(s)? Gevaarlijke Stoffen$/]: [24],
            [/^Waterongevallenvoertuig(en)? \/ Oppervlaktereddingsteam(s)?$/]: [
                33,
                49,
                50,
            ],
            [/^Waterongevallenaanhanger(s)?$/]: [36],
            [/^Crashtender(s)?$/]: [41, 42, 43],
            [/^AFO\/OSC('s)?$/]: [44],
            [/^Voorlichter(s)?$/]: [56],
            [/^Noodhulpeenhe(id|den)$/]: [22, 25, 46, 47, 48, 59, 60],
            [/^Officier(en)? van Dienst - Politie$/]: [35],
            [/^Politiehelikopter$/]: [28],
            [/^Hondengeleider(s)?$/]: [47, 48],
            [/^ME Commandovoertuig(en)?$/]: [39],
            [/^ME Flexbus(sen)?$/]: [40],
            [/^AT Commandant(en)?$/]: [53],
            [/^AT Materiaalwagen(s)?$/]: [55],
            [/^AT Operator(s)?$/]: [54],
            [/^Ambulance(s)?$/]: [16, 52, 57, 63],
            [/^Biketeam(s)?$/]: [60],
            [/^Aanhoudingseenhe(id|den)$/]: [64],
            [/^Dienstbus(sen)? Arrestantenvervoer$/]: [58],
            [/^Er ontbre(ekt|ken):$/]: [],
            [/^Arrestanten zullen vervoerd worden$/]: [],
        },
    },
    tailoredTabs: {
        allTab: 'Alles',
        occupiedTab: 'Dooralarmeren',
        vehicleMissing: {
            title:
                'Eén voertuig is op geen enkel tabblad aanwezig | Meerdere voertuigen zijn op geen enkel tabblad aanwezig',
            text:
                'De volgende voertuigtypes zijn alleen aanwezig op het tabblad `Alles`:',
            hide: 'Verberg Melding',
            close: 'Sluit Meldingen tot wijziging',
        },
    },
    hideVehicleList: {
        show: 'Toon voertuigenlijst',
        hide: 'Verberg voertuigenlijst',
    },
};
