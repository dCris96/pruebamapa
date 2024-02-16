let map = L.map('map',{
    zoomControl: false,
    maxZoom: 17,
    minZoom: 12
}).setView([-8.200975, -77.870286], 13);

//Estilo de graficos del mapa y atribución de creador
let mapView = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
	attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
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


let sitios = [
    {
        nombre: "Pelagatos",
        corX: -8.178685,
        corY: -77.794262,
        descripcion: "",
        imageUrl: "./pelagatos.jpg"
    },
    {
        nombre: "Aguas termales de Cochaconchucos",
        corX: -8.251073,
        corY: -77.881222,
        descripcion: "",
        imageUrl: "./pelagatos.jpg"
    }
]

for(let i = 0; i <= sitios.length; i++){

    let sitio = L.marker([sitios[i].corX, sitios[i].corY],{
    // icon: lago
    }).addTo(map).bindPopup(`<h1>${sitios[i].nombre}</h1><p>${sitios[i].descripcion}</p><img src="${sitios[i].imageUrl}" style="width:100%">`)

}