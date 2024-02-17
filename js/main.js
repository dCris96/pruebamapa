let map = L.map('map',{
    zoomControl: false,
    maxZoom: 17,
    minZoom: 12
}).setView([-8.200975, -77.870286], 13);

//Estilo de graficos del mapa y atribución de creador
let mapView = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
	// attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
}).addTo(map);

//CREACION DE LOS ICONOS
// let lago = L.icon({
//     iconUrl: 'img/icons/lago.png',
//     iconSize: [60, 95],
//     iconAnchor: [22, 94],
//     popupAnchor: [-3, -76],
//     shadowUrl: 'img/icons/lago.png',
//     shadowSize: [60, 95],
//     shadowAnchor: [22, 94]
// });

// TRAER SITIOS DESDE ARCHIVO JSON
fetch('lugares.json')
    .then((response) => response.json())
    .then((data) => {
        for(let i = 0; i <= data.length; i++){

            let sitio = L.marker([data[i].corX,data[i].corY])

            sitio.addTo(map).bindPopup(`<h1>${data[i].titulo}</h1><p>${data[i].descripcion}</p><div class="img__popup"><img src="${data[i].imageUrl}"></div>`,{
                maxHeight: 300
            })
        
        }
    });

