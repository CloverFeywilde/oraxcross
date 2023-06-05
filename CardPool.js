/* 
    File created by Nox

    Basic Templates

    Reflection:
            'abc001' : {
        'title' : 'Title Here',
        'text' : 'Text Placeholder',
        'type' : 'Reflection',
        'art' : 'artlink',
        'attributes' : {
            'rank' : 'S, A, B, C',
            'element' : 'Blanc, Noir, Terra',
        },
    },

    Facet:
        'aya001' : {
        'title' : 'Title Here',
        'text' : 'Text Placeholder',
        'type' : 'Facet',
        'art' : 'artlink',
        'attributes' : {
            'rank' : '1, 2, 3, 4',
            'element' : 'Blanc, Noir, Terra',
        },
    },

    Hex: 
        'aya001' : {
        'title' : 'Title Here',
        'text' : 'Text Placeholder',
        'type' : 'Hex',
        'art' : 'artlink',
        'attributes' : {
            'element' : 'Blanc, Noir, Terra',
        },
    },

    Charm:
        'aya001' : {
        'title' : 'Title Here',
        'text' : 'Text Placeholder',
        'type' : 'Charm',
        'art' : 'artlink',
        'attributes' : {
            'element' : 'Blanc, Noir, Terra Acqua',
        },
    },
*/
const cardPool = {
    'aya001' : {
        'title' : 'Ayami Prime',
        'text' : 'Text Placeholder',
        'type' : 'Reflection',
        'art' : 'artlink',
        'attributes' : {
            'rank' : 'S',
            'element' : 'Acqua',
        },
    },
    'aya002' : {
    'title' : 'Kanna Minami',
    'text' : 'Text Placeholder',
    'type' : 'Facet',
    'art' : 'artlink',
    'attributes' : {
            'rank' : '4',
            'element' : 'Blanc',
        },
    },
    'aya003' : {
    'title' : 'Siren Call',
    'text' : 'Text Placeholder',
    'type' : 'Hex',
    'art' : 'artlink',
    'attributes' : {
            'element' : 'Acqua',
        },
    },
    'aya004' : {
    'title' : 'Ika-Chan',
    'text' : 'Text Placeholder',
    'type' : 'Charm',
    'art' : 'artlink',
    'attributes' : {
            'element' : 'Acqua',
        },
    },
    'rei001' : {
        'title' : 'Miriko, Child of Gaia',
        'text' : 'Text Placeholder',
        'type' : 'Reflection',
        'art' : 'artlink',
        'attributes' : {
            'rank' : 'S',
            'element' : 'Blanc',
        },
    },
    'rei002' : {
        'title' : 'Rei, Resistance Leader',
        'text' : 'Text Placeholder',
        'type' : 'Facet',
        'art' : 'artlink',
        'attributes' : {
            'rank' : '4',
            'element' : 'Noir',
        },
    },
    'rei003' : {
        'title' : 'New Identity',
        'text' : 'Text Placeholder',
        'type' : 'Hex',
        'art' : 'artlink',
        'attributes' : {
            'element' : 'Noir',
        },
    },
    'rei004' : {
        'title' : 'Reflections of the Past',
        'text' : 'Text Placeholder',
        'type' : 'Charm',
        'art' : 'artlink',
        'attributes' : {
            'element' : 'Blanc',
        },
    },
};



let players = ['emiyo', 'michi', 'suzume'];
let injuries = ['cut', 'bruise', 'scrape'];

players.forEach(function (player, index) {
    let numberOfInjuries = Math.floor(Math.random() * 3 + 1);
    let selectedInjuries = [];

    let message = player + ':';
    for (var i = 0; i < numberOfInjuries; i++) {
        let selectedInjuries = [];
        let thisInjury;
        
        //keep picking injuries until we find one that hasn't been selected yet
        do {
          //grabs randomly from the injuries array and adds it to temp variable
          thisInjury = injuries[Math.floor(Math.random() * injuries.length)];
          selectedInjuries.push(thisInjury);
        } while (!selectedInjuries.includes(thisInjury));
        message = message + ' ' + thisInjury;
    }
    console.log(message); 
});



function injuryGenerator() {
    let players = ['emiyo', 'michi', 'suzume'];
    let injuries = ['cut', 'bruise', 'scrape', 'break'];
    let locations = ['arm', 'leg', 'torso', 'finger'];

    players.forEach(function (player, index) {
        let numberOfInjuries = Math.floor(Math.random() * 3);
        let selectedInjuries = [];
        let selectedLocations = [];
        let firstRun = true;

        let message = player + ':';
        for (var i = 0; i < numberOfInjuries; i++) {
            let thisInjury;
            let thisLocation;
            let registered = false;
            
            //keep picking injuries until we find one that hasn't been selected yet
            do {
            //grabs randomly from the injuries array and adds it to temp variable
            thisInjury = injuries[Math.floor(Math.random() * injuries.length)];
            thisLocation = locations[Math.floor(Math.random() * locations.length)];

            if (!selectedInjuries.includes(thisInjury) && !selectedLocations.includes(thisLocation)) {
                selectedInjuries.push(thisInjury);
                selectedLocations.push(thisLocation);
                registered = true;
            }
            } while (!registered);
            message = message + (firstRun ? ' ' : ', ') + thisInjury + ' on ' + thisLocation;
            firstRun = false;
        }
        console.log(message); 
    });
};

injuryGenerator();