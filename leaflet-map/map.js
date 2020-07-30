var map = L.map('map').setView([38.494443887725055, 27.7020263671875], 8);

var firstLayerLayer= L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.jpg', {
		maxZoom: 18,
		attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
		

	});
	firstLayerLayer.addTo(map);

//Geojson
/*
var request = new XMLHttpRequest();
request.open('GET', 'Geo.json', true);

request.onload = function() {
  if (this.status >= 200 && this.status < 400) {
    // Success!
	var geojson = JSON.parse(this.response);
	L.geoJson(geojson).addTo(map);
  } else {
    // We reached our target server, but it returned an error

  }
};

request.onerror = function() {
  // There was a connection error of some sort
};

request.send();
  */
 
var geojson={"type": "FeatureCollection","features": [{"type": "Feature","properties": {},"geometry": {"type": "Point","coordinates": [27.169189453124996,38.565347844885466]}},
{"type": "Feature","properties": {},"geometry": {"type": "Point","coordinates": [27.19390869140625,38.56105262446978]}},{"type": "Feature","properties": {},"geometry": 
{"type": "Point","coordinates": [27.16094970703125,38.5632002667659]}},{"type": "Feature","properties": {"marker-color": "#7e7e7e","marker-size": "medium","marker-symbol": ""},
"geometry": {"type": "Point","coordinates": [27.12799072265625,38.556757147352215]}},{"type": "Feature","properties": {},"geometry": {"type": "Point","coordinates": 
[27.034606933593746,38.61043215866372]}},{"type": "Feature","properties": {},"geometry": {"type": "Point","coordinates": [27.13348388671875,38.66192241975437]}},
{"type": "Feature","properties": {},"geometry": {"type": "Point","coordinates": [27.2076416015625,38.649053322140226]}},{"type": "Feature","properties": {},"geometry": 
{"type": "Point","coordinates": [27.169189453124996,38.649053322140226]}},{"type": "Feature","properties": {},"geometry": {"type": "Point","coordinates": [27.11700439453125,38.65334327823747]}},
{"type": "Feature","properties": {},"geometry": {"type": "Point","coordinates": [27.05657958984375,38.58896696823242]}},{"type": "Feature","properties": {},"geometry": {"type": "Point","coordinates":
 [27.25982666015625,38.606139634147866]}},{"type": "Feature","properties": {},"geometry": {"type": "Point","coordinates": [27.01812744140625,38.57393751557591]}},{"type": "Feature","properties": 
 {},"geometry": {"type": "Point","coordinates": [27.0648193359375,38.700515838688716]}},{"type": "Feature","properties": {},"geometry": {"type": "Point","coordinates": [27.25982666015625,38.55246141354153]}},
 {"type": "Feature","properties": {},"geometry": {"type": "Point","coordinates": [27.17742919921875,38.52023522875919]}},{"type": "Feature","properties": {},"geometry": {"type": "Point","coordinates":
[27.0977783203125,38.55890491799819]}},{"type": "Feature","properties": {},"geometry": {"type": "Point","coordinates": [27.31201171875,38.65763297744505]}},{"type": "Feature","properties": {},"geometry":
 {"type": "Point","coordinates": [27.125244140625,38.52453288748686]}},{"type": "Feature","properties": {},"geometry": {"type": "Point","coordinates": [27.20489501953125,38.62116234642254]}},
 {"type": "Feature","properties": {},"geometry": {"type": "Point","coordinates": [27.13897705078125,38.62223527691723]}},{"type": "Feature","properties": {},"geometry": {"type": "Point","coordinates":
  [27.140350341796875,38.613651383524335]}},{"type": "Feature","properties": {},"geometry": {"type": "Point","coordinates": [27.182922363281246,38.61687046392973]}}]}
  



//Create Layer


var uyduharitasi= L.tileLayer('http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}',{subdomains:['mt0','mt1','mt2','mt3']});
var googleharitasi= L.tileLayer('http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}',{subdomains:['mt0','mt1','mt2','mt3']});
var geceharitasi= L.tileLayer('http://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png',{subdomains:'abcd'});

//var noktalar = L.layerGroup();
	var layer = L.geoJson(geojson).bindPopup("Welcome..").addTo(map);

var baseLayers = {
	"Uydu Haritasi":uyduharitasi,
	"Google Haritasi":googleharitasi,
	"Gece Haritasi":geceharitasi
	
	};
var overLays={
	"Pinler":layer,
}

var topluKatman=L.control.layers(baseLayers,overLays).addTo(map);

var topluKatmanLocation= topluKatman.getPosition();
topluKatman.setPosition("topleft");














