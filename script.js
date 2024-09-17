var map = L.map('map').setView([10.244536, -61.455111], 13);
var marker = L.marker([10.244536, -61.455111]).addTo(map);
//var circle = L.circle([10.26, -61.45], {
    //color: 'white',
    //fillColor: '#ffff',
    //fillOpacity: 0.3,
    //radius: 3000
//}).addTo(map);

var popup = L.popup()
    .setLatLng([10.26, -61.45])
    .setContent("I am a standalone popup.")
    .openOn(map);

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("" + e.latlng)
        .openOn(map);
}
    
map.on('click', onMapClick);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

marker.bindPopup("<b>Charity Baptist Church</b><br>94 S.S. Erin Road, Philipine, San Fernando").openPopup();
//circle.bindPopup("I am a circle.");
polygon.bindPopup("I am a polygon.");

