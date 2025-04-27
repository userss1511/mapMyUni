        
        // 1. Inicijalizacija mape sa granicama - povećanje slike
        var map = L.map('map', { minZoom: -2, maxZoom: 2 }).setView([0, 0], 0);

        // 2. Postavljanje slike mape
        var imageUrl = 'PMF.png';  // Zameni sa tačnom putanjom do slike
        var imageBounds = [[-500, -500], [500, 500]]; // Uvećane granice

        L.imageOverlay(imageUrl, imageBounds).addTo(map);
        map.fitBounds(imageBounds); // Prilagođava mapu veličini slike
        var locations = {
    'toalet muski': [-5, -70], 
    'toalet zenski': [30, -70], 
    'biblioteka': [-70, -280], 
    'energetski blok': [52.5, -206], 
    'citaonica': [35, -258], 
    'studentska sluzba': [-60, -140],
    'dekanat': [-80, -165],  
    'arhiva': [-60, -205], 
    'sala 127': [78, -228], 
    'sala 121': [78, -167], 
    'sala 120': [78, -54],
    'sala 119': [78, 68], 
    'sala 118': [78, 169], 
    'sala 117': [78, 259], 
    'sala 116': [78, 335], 
    'sala 233': [78, 415], 
    'sala 230': [83, 415], 
    'sala 234': [70, 415], 
    'sala 204-ET': [27, 328], 
    'sala 207': [18, 214], 
    'sala 220': [52, 210], 
    'sala 218': [52, 170], 
    'sala 228': [52, 266], 
    'sala 128': [52, 83], 
    'sala 132': [52, 40], 
    'sala 133': [10, 25], 
    'sala 135': [0, 72], 
    'sala 136': [9, 108], 
    'sala 137': [-10, 122], 
    'sala 227': [10, -23], 
    'sala 229': [0, -162], 
    'sala 236': [40, -162], 
    'sala 14': [6, -207],
    'sala 13': [-2, -240], 
    'sala 12': [-2, -270], 
    'sala 113': [-63, 308],
    'sala 112': [-63, 240],
    'sala 109': [-63, 179], 
    'sala 107-A': [-63, 108],
    'sala 210': [-63, 35], 
    'sala 211': [-50, -15], 
    'sala 212': [-50, -44], 
    'sala 213': [-70, -24], 
    'sala 214': [-70, -66], 
    'sala 215': [-70, -95], 
    'sala 216': [-48, -84], 
    'start': [-10, -370]
    
};
        

        // 4. Dodavanje markera
        Object.keys(locations).forEach(location => {
            L.marker(locations[location]).addTo(map)
              .bindPopup(`<b>${location}</b>`);
        });

        // 5. Pretraga i skok na lokaciju
        document.getElementById('searchBar').addEventListener('input', function() {
            var searchQuery = this.value.toLowerCase();
            if (locations[searchQuery]) {
                map.setView(locations[searchQuery], 1);
            }
        });

//da napravim poveznice od jednog do drugog bloka

// const pointStart = [-10, -370]; // energetski blok
// const pointToaletMuski = [-5, -70]; // neka učionica

// // Iscrtaj liniju
// const line = L.polyline([pointStart, pointToaletMuski], {
//   color: 'red',
//   weight: 4
// }).addTo(map);

// // Po želji: zumiraj na liniju
// map.fitBounds(line.getBounds());

const startToaletMuski = {
  h1: [-30.62, -369.13],  // skretanje desno iz starta
  h2: [-30.62, -70],  // prolaz ispred 229 ka toaletima
};

// const pathToToaletMuski = L.polyline([
//   locations['start'],
//   startToaletMuski.h1,
//   startToaletMuski.h2,
//   locations['toalet muski']
// ], {
//   color: 'red',
//   weight: 4
// }).addTo(map);

const startToaletZenski = {
  h1: [59.01, -268.61],  // skretanje desno iz starta
  h2: [59.01, -70],  // prolaz ispred 229 ka toaletima
};

// const pathToToaletZenski = L.polyline([
//   locations['start'],
//   startToaletZenski.h1,
//   startToaletZenski.h2,
//   locations['toalet zenski']
// ], {
//   color: 'red',
//   weight: 4
// }).addTo(map);
var x = 0

// const pathToCitaonica = L.polyline([
//   locations['start'],
//   locations['citaonica']
// ], {
//   color: 'red',
//   weight: 4
// }).addTo(map);


const start12 = {
  h1: [-26.97, -370],  // skretanje desno iz starta
  h2: [-28.22, -270],  // prolaz ispred 229 ka toaletima
};

// const pathTo12 = L.polyline([
//   locations['start'],
//   start12.h1,
//   start12.h2,
//   locations['sala 12']
// ], {
//   color: 'red',
//   weight: 4
// }).addTo(map);

const start13 = {
  h1: [-26.97, -370],  // skretanje desno iz starta
  h2: [-28.22, -240],  // prolaz ispred 229 ka toaletima
};

// const pathTo13 = L.polyline([
//   locations['start'],
//   start13.h1,
//   start13.h2,
//   locations['sala 13']
// ], {
//   color: 'red',
//   weight: 4
// }).addTo(map);

const start14 = {
  h1: [-26.97, -370],  // skretanje desno iz starta
  h2: [-28.22, -207],  // prolaz ispred 229 ka toaletima
};

// const pathTo14 = L.polyline([
//   locations['start'],
//   start14.h1,
//   start14.h2,
//   locations['sala 14']
// ], {
//   color: 'red',
//   weight: 4
// }).addTo(map);


const start229 = {
  h1: [-26.97, -370],  // skretanje desno iz starta
  h2: [-28.22, -162],  // prolaz ispred 229 ka toaletima
};

// const pathTo229 = L.polyline([
//   locations['start'],
//   start229.h1,
//   start229.h2,
//   locations['sala 229']
// ], {
//   color: 'red',
//   weight: 4
// }).addTo(map);

const startEnergetskiBlok = {
  h1: [61, -255],  // skretanje desno iz starta
  h2: [61, -205.29],  // prolaz ispred 229 ka toaletima
};

// const pathToEnergetskiBlok = L.polyline([
//   locations['start'],
//   startEnergetskiBlok.h1,
//   startEnergetskiBlok.h2,
//   locations['energetski blok']
// ], {
//   color: 'red',
//   weight: 4
// }).addTo(map);


const start236 = {
  h1: [61, -255],  // skretanje desno iz starta
  h2: [61, -162],  // prolaz ispred 229 ka toaletima
};

// const pathTo236 = L.polyline([
//   locations['start'],
//   start236.h1,
//   start236.h2,
//   locations['sala 236']
// ], {
//   color: 'red',
//   weight: 4
// }).addTo(map);


const start127 = {
};

// const pathTo127 = L.polyline([
//   locations['start'],
//   locations['sala 127']
// ], {
//   color: 'red',
//   weight: 4
// }).addTo(map);

const start121 = {
  h1: [60, -268.93],  // skretanje desno iz starta
  h2: [60, -167],  // prolaz ispred 229 ka toaletima
};

// const pathTo121 = L.polyline([
//   locations['start'],
//   start121.h1,
//   start121.h2,
//   locations['sala 121']
// ], {
//   color: 'red',
//   weight: 4
// }).addTo(map);

const startBiblioteka = {
  h1: [-34.53, -370],  // skretanje desno iz starta
  h2: [-34.53, -280],  // prolaz ispred 229 ka toaletima
};

// const pathToBiblioteka = L.polyline([
//   locations['start'],
//   startBiblioteka.h1,
//   startBiblioteka.h2,
//   locations['biblioteka']
// ], {
//   color: 'red',
//   weight: 4
// }).addTo(map);


const startCitaonica = {
};

// const pathToCitaonica = L.polyline([
//   locations['start'],
//   locations['citaonica']
// ], {
//   color: 'red',
//   weight: 4
// }).addTo(map);


const startStudentskaSluzba = {
  h1: [-34.53, -370],  // skretanje desno iz starta
  h2: [-34.19, -140]  // prolaz ispred 229 ka toaletima
};

// const pathToStudentskaSluzba = L.polyline([
//   locations['start'],
//   startStudentskaSluzba.h1,
//   startStudentskaSluzba.h2,
//   locations['studentska sluzba']
// ], {
//   color: 'red',
//   weight: 4
// }).addTo(map);


const startDekanat = {
  h1: [-30.94, -370],  
  h2: [-30.94, -175.68],
  h3: [-77.67, -175.03] 
};

// const pathToDekanat = L.polyline([
//   locations['start'],
//   startDekanat.h1,
//   startDekanat.h2, 
//   startDekanat.h3,
//   locations['dekanat']
// ], {
//   color: 'red',
//   weight: 4
// }).addTo(map);


const startArhiva = {
  h1: [-30.94, -370],  
  h2: [-30.94, -205]
};

// const pathToArhiva = L.polyline([
//   locations['start'],
//   startArhiva.h1,
//   startArhiva.h2, 
//   locations['arhiva']
// ], {
//   color: 'red',
//   weight: 4
// }).addTo(map);


const start120 = {
  h1: [60.61, -257.26],  
  h2: [60.96, -54]
};

// const pathTo120 = L.polyline([
//   locations['start'],
//   start120.h1,
//   start120.h2, 
//   locations['sala 120']
// ], {
//   color: 'red',
//   weight: 4
// }).addTo(map);


const start119 = {
  h1: [60.61, -257.26],  
  h2: [60.96, 68]
};

// const pathTo119 = L.polyline([
//   locations['start'],
//   start119.h1,
//   start119.h2, 
//   locations['sala 119']
// ], {
//   color: 'red',
//   weight: 4
// }).addTo(map);


const start118 = {
  h1: [60.61, -257.26],  
  h2: [60.96, 169]
};

// const pathTo118 = L.polyline([
//   locations['start'],
//   start118.h1,
//   start118.h2, 
//   locations['sala 118']
// ], {
//   color: 'red',
//   weight: 4
// }).addTo(map);

const start117 = {
  h1: [60.61, -257.26],  
  h2: [60.96, 259]
};

// const pathTo117 = L.polyline([
//   locations['start'],
//   start117.h1,
//   start117.h2, 
//   locations['sala 117']
// ], {
//   color: 'red',
//   weight: 4
// }).addTo(map);

const start116 = {
  h1: [60.61, -257.26],  
  h2: [60.96, 335]
};

// const pathTo116 = L.polyline([
//   locations['start'],
//   start116.h1,
//   start116.h2, 
//   locations['sala 116']
// ], {
//   color: 'red',
//   weight: 4
// }).addTo(map);

const start233 = {
  h1: [63, -255.00],
  h2: [63, 435],
  h3: [78, 435]
};

// const pathTo233 = L.polyline([
//   locations['start'],
//   start233.h1,
//   start233.h2, 
//   start233.h3, 
//   locations['sala 233']
// ], {
//   color: 'red',
//   weight: 4
// }).addTo(map);

const start230 = {
  h1: [63, -255.00],
  h2: [63, 435],
  h3: [83, 435]
};

// const pathTo230 = L.polyline([
//   locations['start'],
//   start230.h1,
//   start230.h2, 
//   start230.h3, 
//   locations['sala 230']
// ], {
//   color: 'red',
//   weight: 4
// }).addTo(map);

const start234 = {
  h1: [63, -255.00],
  h2: [63, 435],
  h3: [70, 435]
};

// const pathTo234 = L.polyline([
//   locations['start'],
//   start234.h1,
//   start234.h2, 
//   start234.h3, 
//   locations['sala 234']
// ], {
//   color: 'red',
//   weight: 4
// }).addTo(map);

const start204ET = {
  h1: [63, -255.00],
  h2: [63, 328]
};

// const pathTo204ET = L.polyline([
//   locations['start'],
//   start204ET.h1,
//   start204ET.h2, 
//   locations['sala 204-ET']
// ], {
//   color: 'red',
//   weight: 4
// }).addTo(map);


const start207 = {
  h1: [-35, -314],
  h2: [-35, 214]
};

// const pathTo207= L.polyline([
//   locations['start'],
//   start207.h1,
//   start207.h2, 
//   locations['sala 207']
// ], {
//   color: 'red',
//   weight: 4
// }).addTo(map);


const start220 = {
  h1: [63, -255.00],
  h2: [63, 210]
};

// const pathTo220 = L.polyline([
//   locations['start'],
//   start220.h1,
//   start220.h2, 
//   locations['sala 220']
// ], {
//   color: 'red',
//   weight: 4
// }).addTo(map);


const start218 = {
  h1: [63, -255.00],
  h2: [63, 170]
};

// const pathTo218 = L.polyline([
//   locations['start'],
//   start218.h1,
//   start218.h2, 
//   locations['sala 218']
// ], {
//   color: 'red',
//   weight: 4
// }).addTo(map);


const start228 = {
  h1: [63, -255.00],
  h2: [63,  266]
};

// const pathTo228 = L.polyline([
//   locations['start'],
//   start228.h1,
//   start228.h2, 
//   locations['sala 228']
// ], {
//   color: 'red',
//   weight: 4
// }).addTo(map);


const start128 = {
  h1: [63, -255.00],
  h2: [63,  83]
};

// const pathTo128 = L.polyline([
//   locations['start'],
//   start128.h1,
//   start128.h2, 
//   locations['sala 128']
// ], {
//   color: 'red',
//   weight: 4
// }).addTo(map);

const start132 = {
  h1: [63, -255.00],
  h2: [63,  40]
};

// const pathTo132 = L.polyline([
//   locations['start'],
//   start132.h1,
//   start132.h2, 
//   locations['sala 132']
// ], {
//   color: 'red',
//   weight: 4
// }).addTo(map);


const start133 = {
  h1: [-33, -322],
  h2: [-33,  25]
};

// const pathTo133 = L.polyline([
//   locations['start'],
//   start133.h1,
//   start133.h2, 
//   locations['sala 133']
// ], {
//   color: 'red',
//   weight: 4
// }).addTo(map);

const start135 = {
  h1: [-33, -322],
  h2: [-33,  72]
};

// const pathTo135 = L.polyline([
//   locations['start'],
//   start135.h1,
//   start135.h2, 
//   locations['sala 135']
// ], {
//   color: 'red',
//   weight: 4
// }).addTo(map);

const start136 = {
  h1: [-33, -322],
  h2: [-33,  108]
};

// const pathTo136 = L.polyline([
//   locations['start'],
//   start136.h1,
//   start136.h2, 
//   locations['sala 136']
// ], {
//   color: 'red',
//   weight: 4
// }).addTo(map);

const start137 = {
  h1: [-33, -322],
  h2: [-33,  122]
};

// const pathTo137 = L.polyline([
//   locations['start'],
//   start137.h1,
//   start137.h2, 
//   locations['sala 137']
// ], {
//   color: 'red',
//   weight: 4
// }).addTo(map);


const start227 = {
  h1: [-33, -322],
  h2: [-33, -23]
};

// const pathTo227 = L.polyline([
//   locations['start'],
//   start227.h1,
//   start227.h2, 
//   locations['sala 227']
// ], {
//   color: 'red',
//   weight: 4
// }).addTo(map);


const start113 = {
  h1: [-33, -322],
  h2: [-33, 308]
};

// const pathTo113 = L.polyline([
//   locations['start'],
//   start113.h1,
//   start113.h2, 
//   locations['sala 113']
// ], {
//   color: 'red',
//   weight: 4
// }).addTo(map);


const start112 = {
  h1: [-33, -322],
  h2: [-33, 240]
};

// const pathTo112 = L.polyline([
//   locations['start'],
//   start112.h1,
//   start112.h2, 
//   locations['sala 112']
// ], {
//   color: 'red',
//   weight: 4
// }).addTo(map);


const start109 = {
  h1: [-33, -322],
  h2: [-33, 179]
};

// const pathTo109 = L.polyline([
//   locations['start'],
//   start109.h1,
//   start109.h2, 
//   locations['sala 109']
// ], {
//   color: 'red',
//   weight: 4
// }).addTo(map);



const start107A = {
  h1: [-33, -322],
  h2: [-33, 108]
};

// const pathTo107A = L.polyline([
//   locations['start'],
//   start107A.h1,
//   start107A.h2, 
//   locations['sala 107-A']
// ], {
//   color: 'red',
//   weight: 4
// }).addTo(map);

const start210 = {
  h1: [-33, -322],
  h2: [-33, 35]
};

// const pathTo210 = L.polyline([
//   locations['start'],
//   start210.h1,
//   start210.h2, 
//   locations['sala 210']
// ], {
//   color: 'red',
//   weight: 4
// }).addTo(map);


const start211 = {
  h1: [-33, -322],
  h2: [-33, -15]
};

// const pathTo211 = L.polyline([
//   locations['start'],
//   start211.h1,
//   start211.h2, 
//   locations['sala 211']
// ], {
//   color: 'red',
//   weight: 4
// }).addTo(map);


const start212 = {
  h1: [-33, -322],
  h2: [-33, -44]
};

// const pathTo212 = L.polyline([
//   locations['start'],
//   start212.h1,
//   start212.h2, 
//   locations['sala 212']
// ], {
//   color: 'red',
//   weight: 4
// }).addTo(map);


const start213 = {
  h1: [-33, -322],
  h2: [-33.66, -58.28],
  h3: [-63.19, -57.22],
  h4: [-63.19, -45.27],
  h5: [-64.14, -44.93]
};

// const pathTo213 = L.polyline([
//   locations['start'],
//   start213.h1,
//   start213.h2, 
//   start213.h3,
//   start213.h4,
//   start213.h5,
//   locations['sala 213']
// ], {
//   color: 'red',
//   weight: 4
// }).addTo(map);

const start214 = {
  h1: [-33, -322],
  h2: [-33.66, -58.28],
  h3: [-62.88, -57.98],
  h4: [-62.90, -53.73],
  h5: [-64.44, -53.71]
};

// const pathTo214 = L.polyline([
//   locations['start'],
//   start214.h1,
//   start214.h2, 
//   start214.h3,
//   start214.h4,
//   start214.h5,
//   locations['sala 214']
// ], {
//   color: 'red',
//   weight: 4
// }).addTo(map);

const start215 = {
  h1: [-33, -322],
  h2: [-33.66, -58.28],
  h3: [-62.88, -57.98],
  h4: [-63.05, -94.10]
};

// const pathTo215 = L.polyline([
//   locations['start'],
//   start215.h1,
//   start215.h2, 
//   start215.h3,
//   start215.h4,
//   locations['sala 215']
// ], {
//   color: 'red',
//   weight: 4
// }).addTo(map);

const start216 = {
  h1: [-33, -322],
  h2: [-33.66, -84]
};

// const pathTo216 = L.polyline([
//   locations['start'],
//   start216.h1,
//   start216.h2, 
//   locations['sala 216']
// ], {
//   color: 'red',
//   weight: 4
// }).addTo(map);

map.on('click', function(e) {
  var coord = e.latlng;
  var lat = coord.lat.toFixed(2);
  var lng = coord.lng.toFixed(2);
  console.log("Kliknuto na: [" + lat + ", " + lng + "]");
});
