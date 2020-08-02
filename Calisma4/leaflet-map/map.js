var map = L.map('map').setView([38.494443887725055, 27.7020263671875], 7);

L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.jpg', {
		maxZoom: 18,
		attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
		

	}).addTo(map);
	


//Create Layer


var uyduharitasi= L.tileLayer('http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}',{subdomains:['mt0','mt1','mt2','mt3']});
var googleharitasi= L.tileLayer('http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}',{subdomains:['mt0','mt1','mt2','mt3']});
var geceharitasi= L.tileLayer('http://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png',{subdomains:'abcd'});


var baseLayers = {
	"Uydu Haritasi":uyduharitasi,
	"Google Haritasi":googleharitasi,
	"Gece Haritasi":geceharitasi
	
    };
    

    var topluKatman=L.control.layers(baseLayers).addTo(map);
    var topluKatmanLocation= topluKatman.getPosition();
    topluKatman.setPosition("topleft");
// Coordinates array (lat-lon)
coords = [
    [ 38.42777351132902, 27.125244140625],
    [39.78321267821705, 30.531005859375],
    [36.94111143010769,30.695800781249996],
    [ 37.88352498087131,32.4755859375]
];

// Markers



// Line
let line = L.polyline(coords, {color: "red", weight: 7}).bindPopup("Travel Path");

// Map
//let map = L.map('map', {center: [14, -87], zoom: 3, layers: [osm, pnt, line]});

// Description
let legend = L.control({position: "topright"});
legend.onAdd = function() {
    let div = L.DomUtil.create("div", "legend");
    div.innerHTML = 
        '<h3>My travel plan</h3>' +
        '<ul>' +
        '<li>Izmir</li>' +
        '<li>Eskisehir</li>' +
        '<li>Antalya</li>' +
        '<li>Konya</li>' +
        '</ul>'
    return div;
};
legend.addTo(map);

// Layer con


var a =0;

for (let i=0; i<coords.length; i+=1) { 
    
    task(i,a);
    a +=5; 
    
  
 } 
var city =["Izmir","Eskisehir","Antalya","Konya"]
 function task(i,a) { 
   setTimeout(function() { 
    //for (var a=0; a<city.length; a+=1 ){
        L.marker(coords[i]).bindPopup("<b>Day</b>"+ "<b>"+a+"</b>" +"<br>"+city[i]).addTo(map);
       
    
  

    addItem(i);
   
       // Add tasks to do 
   }, 2700 * i); 
  
 } 
 function addItem(i) {
    line.addTo(map);
   


 }
 var control = L.Routing.control({
    waypoints: coords,
    lineOptions: {
        styles: [{className: 'animate'}] // Adding animate class
    },
    routeWhileDragging: true
}).addTo(map);
 
 
