// Add console.log to check to see if our code is working.
console.log("working");
// Create the map object with center and zoom level.
let map = L.map('mapid').setView([30, 30], 2);

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
  maxZoom: 18,
  accessToken: API_KEY
});
// Accessing the airport GeoJSON URL
let airportData = "https://raw.githubusercontent.com/DJsef81/Mapping_Earthquakes/main/majorAirports.json";
  
// Grabbing our GeoJSON data.
d3.json(airportData).then(function(data) {
    console.log(data);
  // Creating a GeoJSON layer with the retrieved data.
  L.geoJson(data, {
    onEachFeature: function(feature, layer) {
    console.log(layer); 
    layer.bindPopup('<h1>'+feature.properties.faa+'</h1><p>name: '+feature.properties.name+'</p>'); 
  }
}).addTo(map);
});
// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);

 