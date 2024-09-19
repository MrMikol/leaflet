var map = L.map('map').setView([10.244536, -61.455111], 13); //fitWorld()

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

let tempMarker;
let pinData = {}; //STORES PIN DATA

//CLICK EVENT TO PLACE A PIN
map.on('click', function (e) {
    if (tempMarker) {
        map.removeLayer(tempMarker);
    }

    //PLACES TEMPORARY MARKER ON THE CLICKED LOCATION
    tempMarker = L.marker(e.latlng).addTo(map);

    //SHOW FORM TO ENTER NAME AND DESCRIPTION
    $('#overlay').css("display", "block"); // Show overlay
    $('#pinModal').css("display", "block"); // Show modal
    pinData = {
        lat: e.latlng.lat,
        lng: e.latlng.lng
    };
});

$('#pinForm').on('submit', function(event) {
    event.preventDefault();

    const name = $('#pinName').val();
    const description = $('#pinDescription').val();

    if (tempMarker) {
        //BIND POPUP WITH NAME AND DESCRIPTION
        tempMarker.bindPopup(`<b>${name}</b><br>${description}`).openPopup();

        //HIDE FORM
        $('#overlay').css("display", "none");
        $('#pinModal').css("display", "none");

        //SAVE PIN INFORMATION
        pinData.name = name;
        pinData.description = description;
        savePin(pinData);
    }
});

function savePin(data) {
    fetch('http://localhost:5000/api/pins', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((result) => {
        console.log('Pin saved: ', result);
      })
        .catch((error) => {
            console.error('Error saving pin: ', error);
        });
    //console.log('Pin saved:', data);
    //alert('Pin saved:', data);
};