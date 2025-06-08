        
    var map = L.map('map', { minZoom: -2, maxZoom: 2 }).setView([0, 0], 0);

    var imageUrl = 'PMF.png';  
    var imageBounds = [[-500, -500], [500, 500]]; 

    L.imageOverlay(imageUrl, imageBounds).addTo(map);
    map.fitBounds(imageBounds); 
    var currPath = null;
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
    'sala 217': [47.52, -37.14], 
    'start': [-10, -370]
    
};
        

        // // Dodavanje markera
        // Object.keys(locations).forEach(location => {
        //     L.marker(locations[location]).addTo(map)
        //       .bindPopup(`<b>${location}</b>`);
        // });

        // // Pretraga i skok na lokaciju
        // document.getElementById('searchBar').addEventListener('input', function() {
        //     var searchQuery = this.value.toLowerCase();
        //     if (locations[searchQuery]) {
        //         map.setView(locations[searchQuery], 1);
        //         console.log(locations[searchQuery])
        //     }
        // });


// // Po želji: zumiraj na liniju
// map.fitBounds(line.getBounds());

function funToaletMuski() {
if(currPath != null) map.removeLayer(currPath);
const startToaletMuski = {
  h1: [-30.62, -369.13],  
  h2: [-30.62, -70], 
};

const pathToToaletMuski = L.polyline([
  locations['start'],
  startToaletMuski.h1,
  startToaletMuski.h2,
  locations['toalet muski']
], {
  color: '#9b7fc9',
  weight: 4
}).addTo(map);
currPath = pathToToaletMuski;
}

function funToaletZenski(){
if(currPath != null) map.removeLayer(currPath);
const startToaletZenski = {
  h1: [59.01, -268.61],  
  h2: [59.01, -70], 
};

const pathToToaletZenski = L.polyline([
  locations['start'],
  startToaletZenski.h1,
  startToaletZenski.h2,
  locations['toalet zenski']
], {
  color: '#9b7fc9 ',
  weight: 4
}).addTo(map);
currPath = pathToToaletZenski;
}

function funCitaonica(){
if(currPath != null) map.removeLayer(currPath);
const pathToCitaonica = L.polyline([
  locations['start'],
  locations['citaonica']
], {
  color: '#9b7fc9 ',
  weight: 4
}).addTo(map);
currPath = pathToCitaonica;
}

function fun12(){
if(currPath != null) map.removeLayer(currPath);
const start12 = {
  h1: [-26.97, -370], 
  h2: [-28.22, -270], 
};

const pathTo12 = L.polyline([
  locations['start'],
  start12.h1,
  start12.h2,
  locations['sala 12']
], {
  color: '#9b7fc9',
  weight: 4
}).addTo(map);
currPath = pathTo12;
}

function fun13(){
if(currPath != null) map.removeLayer(currPath);
const start13 = {
  h1: [-26.97, -370],  
  h2: [-28.22, -240], 
};

const pathTo13 = L.polyline([
  locations['start'],
  start13.h1,
  start13.h2,
  locations['sala 13']
], {
  color: '#9b7fc9',
  weight: 4
}).addTo(map);
currPath = pathTo13;

}

function fun14(){
if(currPath != null) map.removeLayer(currPath);
const start14 = {
  h1: [-26.97, -370],  
  h2: [-28.22, -207]
};

const pathTo14 = L.polyline([
  locations['start'],
  start14.h1,
  start14.h2,
  locations['sala 14']
], {
  color: '#9b7fc9 ',
  weight: 4
}).addTo(map);

currPath = pathTo14;
}

function fun229(){
if(currPath != null) map.removeLayer(currPath);
const start229 = {
  h1: [-26.97, -370], 
  h2: [-28.22, -162]
};

const pathTo229 = L.polyline([
  locations['start'],
  start229.h1,
  start229.h2,
  locations['sala 229']
], {
  color: '#9b7fc9 ',
  weight: 4
}).addTo(map);

currPath = pathTo229;
}

function funEnergetskiBlok(){
if(currPath != null) map.removeLayer(currPath);
const startEnergetskiBlok = {
  h1: [61, -255],  
  h2: [61, -205.29]
};

const pathToEnergetskiBlok = L.polyline([
  locations['start'],
  startEnergetskiBlok.h1,
  startEnergetskiBlok.h2,
  locations['energetski blok']
], {
  color: '#9b7fc9',
  weight: 4
}).addTo(map);

currPath = pathToEnergetskiBlok;
}

function fun236(){
if(currPath != null) map.removeLayer(currPath);
const start236 = {
  h1: [61, -255], 
  h2: [61, -162]
};

const pathTo236 = L.polyline([
  locations['start'],
  start236.h1,
  start236.h2,
  locations['sala 236']
], {
  color: '#9b7fc9',
  weight: 4
}).addTo(map);

currPath = pathTo236;
}

function fun127(){
if(currPath != null) map.removeLayer(currPath);
const pathTo127 = L.polyline([
  locations['start'],
  locations['sala 127']
], {
  color: '#9b7fc9',
  weight: 4
}).addTo(map);

currPath = pathTo127;
}

function fun121(){
if(currPath != null) map.removeLayer(currPath);
const start121 = {
  h1: [60, -268.93],  
  h2: [60, -167]
};

const pathTo121 = L.polyline([
  locations['start'],
  start121.h1,
  start121.h2,
  locations['sala 121']
], {
  color: '#9b7fc9',
  weight: 4
}).addTo(map);

currPath = pathTo121;
}

function funBiblioteka(){
if(currPath != null) map.removeLayer(currPath);
const startBiblioteka = {
  h1: [-34.53, -370],  
  h2: [-34.53, -280]
};

const pathToBiblioteka = L.polyline([
  locations['start'],
  startBiblioteka.h1,
  startBiblioteka.h2,
  locations['biblioteka']
], {
  color: '#9b7fc9',
  weight: 4
}).addTo(map);
currPath = pathToBiblioteka;
}

function funStudentskaSluzba(){
if(currPath != null) map.removeLayer(currPath);
const startStudentskaSluzba = {
  h1: [-34.53, -370],
  h2: [-34.19, -140]  
};

const pathToStudentskaSluzba = L.polyline([
  locations['start'],
  startStudentskaSluzba.h1,
  startStudentskaSluzba.h2,
  locations['studentska sluzba']
], {
  color: '#9b7fc9',
  weight: 4
}).addTo(map);

currPath = pathToStudentskaSluzba;
}

function funDekanat(){
if(currPath != null) map.removeLayer(currPath);
const startDekanat = {
  h1: [-30.94, -370],  
  h2: [-30.94, -175.68],
  h3: [-77.67, -175.03] 
};

const pathToDekanat = L.polyline([
  locations['start'],
  startDekanat.h1,
  startDekanat.h2, 
  startDekanat.h3,
  locations['dekanat']
], {
  color: '#9b7fc9',
  weight: 4
}).addTo(map);

currPath = pathToDekanat;
}

function funArhiva(){
if(currPath != null) map.removeLayer(currPath);
const startArhiva = {
  h1: [-30.94, -370],  
  h2: [-30.94, -205]
};

const pathToArhiva = L.polyline([
  locations['start'],
  startArhiva.h1,
  startArhiva.h2, 
  locations['arhiva']
], {
  color: '#9b7fc9',
  weight: 4
}).addTo(map);

currPath = pathToArhiva;
}

function fun120(){
if(currPath != null) map.removeLayer(currPath);
const start120 = {
  h1: [60.61, -257.26],  
  h2: [60.96, -54]
};

const pathTo120 = L.polyline([
  locations['start'],
  start120.h1,
  start120.h2, 
  locations['sala 120']
], {
  color: '#9b7fc9',
  weight: 4
}).addTo(map);

currPath = pathTo120;
}

function fun119(){
if(currPath != null) map.removeLayer(currPath);
const start119 = {
  h1: [60.61, -257.26],  
  h2: [60.96, 68]
};

const pathTo119 = L.polyline([
  locations['start'],
  start119.h1,
  start119.h2, 
  locations['sala 119']
], {
  color: '#9b7fc9',
  weight: 4
}).addTo(map);

currPath = pathTo119;
}

function fun118(){
if(currPath != null) map.removeLayer(currPath);
const start118 = {
  h1: [60.61, -257.26],  
  h2: [60.96, 169]
};

const pathTo118 = L.polyline([
  locations['start'],
  start118.h1,
  start118.h2, 
  locations['sala 118']
], {
  color: '#9b7fc9',
  weight: 4
}).addTo(map);

currPath = pathTo118;
}

function fun117(){
if(currPath != null) map.removeLayer(currPath);
const start117 = {
  h1: [60.61, -257.26],  
  h2: [60.96, 259]
};

const pathTo117 = L.polyline([
  locations['start'],
  start117.h1,
  start117.h2, 
  locations['sala 117']
], {
  color: '#9b7fc9',
  weight: 4
}).addTo(map);

currPath = pathTo117;
}

function fun116(){
if(currPath != null) map.removeLayer(currPath);
const start116 = {
  h1: [60.61, -257.26],  
  h2: [60.96, 335]
};

const pathTo116 = L.polyline([
  locations['start'],
  start116.h1,
  start116.h2, 
  locations['sala 116']
], {
  color: '#9b7fc9',
  weight: 4
}).addTo(map);

currPath = pathTo116;
}

function fun233(){
if(currPath != null) map.removeLayer(currPath);
const start233 = {
  h1: [63, -255.00],
  h2: [63, 435],
  h3: [78, 435]
};

const pathTo233 = L.polyline([
  locations['start'],
  start233.h1,
  start233.h2, 
  start233.h3, 
  locations['sala 233']
], {
  color: '#9b7fc9',
  weight: 4
}).addTo(map);

currPath = pathTo233;
}

function fun230(){
if(currPath != null) map.removeLayer(currPath);
const start230 = {
  h1: [63, -255.00],
  h2: [63, 435],
  h3: [83, 435]
};

const pathTo230 = L.polyline([
  locations['start'],
  start230.h1,
  start230.h2, 
  start230.h3, 
  locations['sala 230']
], {
  color: '#9b7fc9',
  weight: 4
}).addTo(map);

currPath = pathTo230;
}

function fun234(){
if(currPath != null) map.removeLayer(currPath);
const start234 = {
  h1: [63, -255.00],
  h2: [63, 435],
  h3: [70, 435]
};

const pathTo234 = L.polyline([
  locations['start'],
  start234.h1,
  start234.h2, 
  start234.h3, 
  locations['sala 234']
], {
  color: '#9b7fc9',
  weight: 4
}).addTo(map);

currPath = pathTo234;
}

function fun204ET(){
if(currPath != null) map.removeLayer(currPath);
const start204ET = {
  h1: [63, -255.00],
  h2: [63, 328]
};

const pathTo204ET = L.polyline([
  locations['start'],
  start204ET.h1,
  start204ET.h2, 
  locations['sala 204-ET']
], {
  color: '#9b7fc9',
  weight: 4
}).addTo(map);

currPath = pathTo204ET;
}

function fun207(){
if(currPath != null) map.removeLayer(currPath);
const start207 = {
  h1: [-35, -314],
  h2: [-35, 214]
};

const pathTo207= L.polyline([
  locations['start'],
  start207.h1,
  start207.h2, 
  locations['sala 207']
], {
  color: '#9b7fc9',
  weight: 4
}).addTo(map);

currPath = pathTo207;
}

function fun220(){
if(currPath != null) map.removeLayer(currPath);
const start220 = {
  h1: [63, -255.00],
  h2: [63, 210]
};

const pathTo220 = L.polyline([
  locations['start'],
  start220.h1,
  start220.h2, 
  locations['sala 220']
], {
  color: '#9b7fc9',
  weight: 4
}).addTo(map);

currPath = pathTo220;
}

function fun218(){
if(currPath != null) map.removeLayer(currPath);
const start218 = {
  h1: [63, -255.00],
  h2: [63, 170]
};

const pathTo218 = L.polyline([
  locations['start'],
  start218.h1,
  start218.h2, 
  locations['sala 218']
], {
  color: '#9b7fc9',
  weight: 4
}).addTo(map);
currPath = pathTo218;
}

function fun228(){
if(currPath != null) map.removeLayer(currPath);
const start228 = {
  h1: [63, -255.00],
  h2: [63,  266]
};

const pathTo228 = L.polyline([
  locations['start'],
  start228.h1,
  start228.h2, 
  locations['sala 228']
], {
  color: '#9b7fc9',
  weight: 4
}).addTo(map);

currPath = pathTo228;
}

function fun128(){
if(currPath != null) map.removeLayer(currPath);
const start128 = {
  h1: [63, -255.00],
  h2: [63,  83]
};

const pathTo128 = L.polyline([
  locations['start'],
  start128.h1,
  start128.h2, 
  locations['sala 128']
], {
  color: '#9b7fc9',
  weight: 4
}).addTo(map);

currPath = pathTo128;
}

function fun132(){
if(currPath != null) map.removeLayer(currPath);
const start132 = {
  h1: [63, -255.00],
  h2: [63,  40]
};

const pathTo132 = L.polyline([
  locations['start'],
  start132.h1,
  start132.h2, 
  locations['sala 132']
], {
  color: '#9b7fc9',
  weight: 4
}).addTo(map);

currPath = pathTo132;
}

function fun133(){
if(currPath != null) map.removeLayer(currPath);
const start133 = {
  h1: [-33, -322],
  h2: [-33,  25]
};

const pathTo133 = L.polyline([
  locations['start'],
  start133.h1,
  start133.h2, 
  locations['sala 133']
], {
  color: '#9b7fc9',
  weight: 4
}).addTo(map);
currPath = pathTo133;
}

function fun135(){
if(currPath != null) map.removeLayer(currPath);
const start135 = {
  h1: [-33, -322],
  h2: [-33,  72]
};

const pathTo135 = L.polyline([
  locations['start'],
  start135.h1,
  start135.h2, 
  locations['sala 135']
], {
  color: '#9b7fc9',
  weight: 4
}).addTo(map);

currPath = pathTo135;
}

function fun136(){
if(currPath != null) map.removeLayer(currPath);
const start136 = {
  h1: [-33, -322],
  h2: [-33,  108]
};

const pathTo136 = L.polyline([
  locations['start'],
  start136.h1,
  start136.h2, 
  locations['sala 136']
], {
  color: '#9b7fc9',
  weight: 4
}).addTo(map);

currPath = pathTo136;
}

function fun137(){
if(currPath != null) map.removeLayer(currPath);
const start137 = {
  h1: [-33, -322],
  h2: [-33,  122]
};

const pathTo137 = L.polyline([
  locations['start'],
  start137.h1,
  start137.h2, 
  locations['sala 137']
], {
  color: '#9b7fc9',
  weight: 4
}).addTo(map);

currPath = pathTo137;
}

function fun227(){
if(currPath != null) map.removeLayer(currPath);
const start227 = {
  h1: [-33, -322],
  h2: [-33, -23]
};

const pathTo227 = L.polyline([
  locations['start'],
  start227.h1,
  start227.h2, 
  locations['sala 227']
], {
  color: '#9b7fc9',
  weight: 4
}).addTo(map);

currPath = pathTo227;
}

function fun113(){
if(currPath != null) map.removeLayer(currPath);
const start113 = {
  h1: [-33, -322],
  h2: [-33, 308]
};

const pathTo113 = L.polyline([
  locations['start'],
  start113.h1,
  start113.h2, 
  locations['sala 113']
], {
  color: '#9b7fc9',
  weight: 4
}).addTo(map);

currPath = pathTo113;
}

function fun112(){
if(currPath != null) map.removeLayer(currPath);
const start112 = {
  h1: [-33, -322],
  h2: [-33, 240]
};

const pathTo112 = L.polyline([
  locations['start'],
  start112.h1,
  start112.h2, 
  locations['sala 112']
], {
  color: '#9b7fc9',
  weight: 4
}).addTo(map);

currPath = pathTo112;
}

function fun109(){
if(currPath != null) map.removeLayer(currPath);
const start109 = {
  h1: [-33, -322],
  h2: [-33, 179]
};

const pathTo109 = L.polyline([
  locations['start'],
  start109.h1,
  start109.h2, 
  locations['sala 109']
], {
  color: '#9b7fc9',
  weight: 4
}).addTo(map);

currPath = pathTo109;
}

function fun107A(){
if(currPath != null) map.removeLayer(currPath);
const start107A = {
  h1: [-33, -322],
  h2: [-33, 108]
};

const pathTo107A = L.polyline([
  locations['start'],
  start107A.h1,
  start107A.h2, 
  locations['sala 107-A']
], {
  color: '#9b7fc9',
  weight: 4
}).addTo(map);

currPath = pathTo107A;
}

function fun210(){
if(currPath != null) map.removeLayer(currPath);
const start210 = {
  h1: [-33, -322],
  h2: [-33, 35]
};

const pathTo210 = L.polyline([
  locations['start'],
  start210.h1,
  start210.h2, 
  locations['sala 210']
], {
  color: '#9b7fc9',
  weight: 4
}).addTo(map);

currPath = pathTo210;
}

function fun211(){
if(currPath != null) map.removeLayer(currPath);
const start211 = {
  h1: [-33, -322],
  h2: [-33, -15]
};

const pathTo211 = L.polyline([
  locations['start'],
  start211.h1,
  start211.h2, 
  locations['sala 211']
], {
  color: '#9b7fc9',
  weight: 4
}).addTo(map);

currPath = pathTo211;
}

function fun212(){
if(currPath != null) map.removeLayer(currPath);
const start212 = {
  h1: [-33, -322],
  h2: [-33, -44]
};

const pathTo212 = L.polyline([
  locations['start'],
  start212.h1,
  start212.h2, 
  locations['sala 212']
], {
  color: '#9b7fc9',
  weight: 4
}).addTo(map);

currPath = pathTo212;
}

function fun213(){
if(currPath != null) map.removeLayer(currPath);
const start213 = {
  h1: [-33, -322],
  h2: [-33.66, -58.28],
  h3: [-63.19, -57.22],
  h4: [-63.19, -45.27],
  h5: [-64.14, -44.93]
};

const pathTo213 = L.polyline([
  locations['start'],
  start213.h1,
  start213.h2, 
  start213.h3,
  start213.h4,
  start213.h5,
  locations['sala 213']
], {
  color: '#9b7fc9',
  weight: 4
}).addTo(map);

currPath = pathTo213;
}

function fun214(){
if(currPath != null) map.removeLayer(currPath);
const start214 = {
  h1: [-33, -322],
  h2: [-33.66, -58.28],
  h3: [-62.88, -57.98],
  h4: [-62.90, -53.73],
  h5: [-64.44, -53.71]
};

const pathTo214 = L.polyline([
  locations['start'],
  start214.h1,
  start214.h2, 
  start214.h3,
  start214.h4,
  start214.h5,
  locations['sala 214']
], {
  color: '#9b7fc9',
  weight: 4
}).addTo(map);

currPath = pathTo214;
}

function fun215(){
if(currPath != null) map.removeLayer(currPath);
const start215 = {
  h1: [-33, -322],
  h2: [-33.66, -58.28],
  h3: [-62.88, -57.98],
  h4: [-63.05, -94.10]
};

const pathTo215 = L.polyline([
  locations['start'],
  start215.h1,
  start215.h2, 
  start215.h3,
  start215.h4,
  locations['sala 215']
], {
  color: '#9b7fc9',
  weight: 4
}).addTo(map);

currPath = pathTo215;
}

function fun216(){
if(currPath != null) map.removeLayer(currPath);
const start216 = {
  h1: [-33, -322],
  h2: [-33.66, -84]
};

const pathTo216 = L.polyline([
  locations['start'],
  start216.h1,
  start216.h2, 
  locations['sala 216']
], {
  color: '#9b7fc9',
  weight: 4
}).addTo(map);

currPath = pathTo216;
}

function fun217(){
if(currPath != null) map.removeLayer(currPath);
const start217 = {
  h1: [61, -262.22],
  h2: [61, -37.14]
};

const pathTo217 = L.polyline([
  locations['start'],
  start217.h1,
  start217.h2, 
  locations['sala 217']
], {
  color: '#9b7fc9',
  weight: 4
}).addTo(map);

currPath = pathTo217;
}
// map.on('click', function(e) {
//   var coord = e.latlng;
//   var lat = coord.lat.toFixed(2);
//   var lng = coord.lng.toFixed(2);
//   console.log("Kliknuto na: [" + lat + ", " + lng + "]");
// });

        // Pretraga i skok na lokaciju
        document.getElementById('searchBar').addEventListener('input', function() {
            var searchQuery = this.value.toLowerCase();
            // if (locations[searchQuery]) {
            //     map.setView(locations[searchQuery], 1);}
            if (searchQuery == 'toalet muski') funToaletMuski();                  
            else  if (searchQuery == 'toalet zenski') funToaletZenski();                  
            else  if (searchQuery == 'biblioteka') funBiblioteka();
            else  if (searchQuery == 'energetski blok') funEnergetskiBlok();
            else  if (searchQuery == 'citaonica') funCitaonica();
            else  if (searchQuery == 'studentska sluzba') funStudentskaSluzba();
            else  if (searchQuery == 'dekanat') funDekanat();
            else  if (searchQuery == 'arhiva') funArhiva();
            else  if (searchQuery == 'sala 127' || searchQuery.toLowerCase() === 'vladimir bozovic' || searchQuery.toLowerCase() === 'srdjan kadic') fun127();
            else  if (searchQuery == 'sala 121' || searchQuery.toLowerCase() === 'gordana lastovicka medin' || searchQuery.toLowerCase() === 'krsto ivanovic') fun121();
            else  if (searchQuery == 'sala 120' || searchQuery.toLowerCase() === 'ajlan zajmovic') fun120();
            else  if (searchQuery == 'sala 119' || searchQuery.toLowerCase() === 'milenko mosurovic' || searchQuery.toLowerCase() === 'kosta pavlovic') fun119();
            else  if (searchQuery == 'sala 118' || searchQuery.toLowerCase() === 'svjetlana terzic') fun118();
            else  if (searchQuery == 'sala 117' || searchQuery.toLowerCase() === 'ivana picuric' || searchQuery.toLowerCase() === 'mira vuceljic') fun117();
            else  if (searchQuery == 'sala 116' || searchQuery.toLowerCase() === 'bozidar popovic' || searchQuery.toLowerCase() === 'andjela mijanovic') fun116();
            else  if (searchQuery == 'sala 233' || searchQuery.toLowerCase() === 'darko mitrovic' || searchQuery.toLowerCase() === 'vanja vukoslavcevic') fun233();
            else  if (searchQuery == 'sala 230' || searchQuery.toLowerCase() === 'marijan markovic' || searchQuery.toLowerCase() === 'stevan djurdjevic') fun230();
            else  if (searchQuery == 'sala 234' || searchQuery.toLowerCase() === 'savo tomovic') fun234();
            else  if (searchQuery == "sala 204") fun204ET();
            else  if (searchQuery == 'sala 207') fun207();
            else  if (searchQuery == 'sala 220' ) fun220();
            else  if (searchQuery == 'sala 220' || searchQuery.toLowerCase() === 'jela susic') fun220();
            else  if (searchQuery == 'sala 218' || searchQuery.toLowerCase() === 'slavoljub mijovic' || searchQuery.toLowerCase() === 'dusan subotic') fun218();
            else  if (searchQuery == 'sala 228' || searchQuery.toLowerCase() === 'marija kaludjerovic' || searchQuery.toLowerCase() === 'marija dosljak') fun228();
            else  if (searchQuery == 'sala 128' || searchQuery.toLowerCase() === 'aleksandar popovic' || searchQuery.toLowerCase() === 'aleksandar plamenac') fun128();
            else  if (searchQuery == 'sala 132' || searchQuery.toLowerCase() === 'vlatko kastratovic') fun132();
            else  if (searchQuery == 'sala 133' || searchQuery.toLowerCase() === 'igor ivanovic') fun133();
            else  if (searchQuery == 'sala 135' || searchQuery.toLowerCase() === 'nikola konatar' || searchQuery.toLowerCase() === 'dusica slovic') fun135();
            else  if (searchQuery == 'sala 136' || searchQuery.toLowerCase() === 'sanja rasovic jancic') fun136();
            else  if (searchQuery == 'sala 137' || searchQuery.toLowerCase() === 'velibor dosljak' || searchQuery.toLowerCase() === 'velimir corovic') fun137();
            else  if (searchQuery == 'sala 227') fun227();
            else  if (searchQuery == 'sala 229' || searchQuery.toLowerCase() === 'nevenka antovic' || searchQuery.toLowerCase() === 'nikola pizurica') fun229();
            else  if (searchQuery == 'sala 236' || searchQuery.toLowerCase() === 'oleg obradovic') fun236();
            else  if (searchQuery == 'sala 14') fun14();
            else  if (searchQuery == 'sala 13') fun13();
            else  if (searchQuery == 'sala 12') fun12();
            else  if (searchQuery == 'sala 113' || searchQuery.toLowerCase() === 'nevena mijajlovic') fun113();
            else  if (searchQuery == 'sala 112' || searchQuery.toLowerCase() === 'natasa raicevic' || searchQuery.toLowerCase() === 'gordana jovanovic') fun112();
            else  if (searchQuery == 'sala 109') fun109();
            else  if (searchQuery == 'sala 107') fun107A();
            else  if (searchQuery == 'sala 210') fun210();
            else  if (searchQuery == 'sala 211' || searchQuery.toLowerCase() === 'miljan bigovic' || searchQuery.toLowerCase() === 'mara scepanovic') fun211();
            else  if (searchQuery == 'sala 212' || searchQuery.toLowerCase() === 'goran popivoda' || searchQuery.toLowerCase() === 'zana kovijanic vukicevic') fun212();
            else  if (searchQuery == 'sala 213' || searchQuery.toLowerCase() === 'jovan mirkovic') fun213();
            else  if (searchQuery == 'sala 214' || searchQuery.toLowerCase() === 'vladimir jacimovic') fun214();
            else  if (searchQuery == 'sala 215' || searchQuery.toLowerCase() === 'ugljesa urosevic' || searchQuery.toLowerCase() === 'igor jovancevic') fun215();
            else  if (searchQuery == 'sala 216' || searchQuery.toLowerCase() === 'david kaljaj' || searchQuery.toLowerCase() === 'anton djokaj') fun216();
            else  if (searchQuery == 'sala 217' || searchQuery.toLowerCase() === 'djordjije vujadinovic' || searchQuery.toLowerCase() === 'vladimir ivanovic') fun217();
            else console.log("greska prilikom unosa");   
            
        });