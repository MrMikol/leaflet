var map = L.map('map').fitWorld();//setView([10.244536, -61.455111], 13);
var marker = L.marker([10.244536, -61.455111]).addTo(map);
//var circle = L.circle([10.26, -61.45], {
    //color: 'white',
    //fillColor: '#ffff',
    //fillOpacity: 0.3,
    //radius: 3000
//}).addTo(map);

var samuel = L.marker([10.249559, -61.452196],
    {alt: 'Samuel'}).addTo(map) 
    .bindPopup('Samuel');

    10.251926, -61.448664

var byno = L.marker([10.251926, -61.448664],
    {alt: 'Byno'}).addTo(map)
    .bindPopup('Byno');    

var cypress = L.marker([10.25532, -61.448612],
    {alt: 'Cypress'}).addTo(map)
    .bindPopup('Cypress');    

var nicolie = L.marker([10.254874, -61.447998],
    {alt: 'Nicolie'}).addTo(map)
    .bindPopup('Nicolie');    
    
var katherine = L.marker([10.256656, -61.446625],
    {alt: 'Katherine'}).addTo(map)
    .bindPopup('Katherine');

var Jason = L.marker([10.249917, -61.454663],
    {alt: 'Jason'}).addTo(map) 
    .bindPopup('Jason');

var catlady = L.marker([10.253201, -61.45225],
    {alt: 'CatLady'}).addTo(map)
    .bindPopup('CatLAdy');    

var gunboys = L.marker([10.255283, -61.447411],
    {alt: 'gunboys'}).addTo(map)
    .bindPopup('gunboys');    

var gunboys = L.marker([10.255434, -61.447438],
    {alt: 'gunboys'}).addTo(map)
    .bindPopup('gunboys');    
    
var plentykids = L.marker([10.254323, -61.456433],
    {alt: 'plentykids'}).addTo(map)
    .bindPopup('plentykids');

    10.254748, -61.459322

var roysie = L.marker([10.254748, -61.459322],
    {alt: 'roysie'}).addTo(map)
    .bindPopup('roysie');

    10.254114, -61.459424

var spanish = L.marker([10.254114, -61.459424],
    {alt: 'spanish'}).addTo(map)
    .bindPopup('spanish');

var spanish = L.marker([10.251744, -61.459475],
    {alt: 'spanish'}).addTo(map)
    .bindPopup('spanish');
    

var popup = L.popup()
    .setLatLng([10.26, -61.45])
    .setContent("I am a standalone popup.")
    .openOn(map);

map.locate({setView: true, maxZoom:16});

//On Location Found
//function onLocationFound(e) {
    //var radius = e.accuracy;

    //L.marker(e.latlng).addTo(map)
        //.bindPopup("You are within " + radius + " meters from this point").openPopup();

    //L.circle(e.latlng, radius).addTo(map);
//}

//map.on('locationfound', onLocationFound);

//On location Error
//function onLocationError(e) {
    //alert(e.message);
//}

//map.on('locationerror', onLocationError);

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

