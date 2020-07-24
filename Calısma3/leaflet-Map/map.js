var map = L.map('map').setView([38.494443887725055, 27.7020263671875], 8);

var firstLayerLayer= L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.jpg', {
		maxZoom: 18,
		attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
		

	});
	firstLayerLayer.addTo(map);


	// create icon:


	var SchoolIcon = L.icon({
		iconUrl: '5.png',
		iconSize: [40,40],
		iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
		shadowAnchor: [4, 62],  // the same for the shadow
		popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
	
	
	});
	
	


	var HospitalIcon = L.icon({
		iconUrl: '2.png',
		iconSize: [40,40],
		iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
		shadowAnchor: [4, 62],  // the same for the shadow
		popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
	
	
	});
	

	var TreeIcon = L.icon({
		iconUrl: '3.png',
		iconSize: [40,40],
		iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
		shadowAnchor: [4, 62],  // the same for the shadow
		popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
	
	
	});
	//Layer
	var Trees = L.layerGroup();
	var Hospitals = L.layerGroup();
	var Schools = L.layerGroup();
	

	var Tree1 =L.marker([36.567,29.196],{icon:TreeIcon}).bindPopup("I am a Tree").addTo(Trees);
	var Tree2 =L.marker([ 36.385,29.514],{icon:TreeIcon}).bindPopup("I am a tree").addTo(Trees);
	var Tree3= L.marker([36.494,29.322],{icon:TreeIcon}).bindPopup("I am a tree").addTo(Trees);
	var Hospital1=L.marker([39.805, 31.025], {icon: HospitalIcon}).bindPopup("I am a Hospital.").addTo(Hospitals);
	var Hospital2=L.marker([39.707, 30.278 ], {icon: HospitalIcon}).bindPopup("I am a Hospital.").addTo(Hospitals);
	var Hospital3=L.marker([39.673, 30.673], {icon: HospitalIcon}).bindPopup("I am a Hospital.").addTo(Hospitals);

	var School1=L.marker([39.436, 28.970], {icon: SchoolIcon}).bindPopup("I am a School.").addTo(Schools);
	var School2=L.marker([39.274, 28.443], {icon: SchoolIcon}).bindPopup("I am a School.").addTo(Schools);
	var School3=L.marker([39.189, 28.817], {icon: SchoolIcon}).bindPopup("I am a School.").addTo(Schools);



	
	
	

	


//Geojson

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
  




  //Shapes
var sekilsiz=L.polygon([ [ 37.666429212090605,28.5260009765625  ], [ 37.77505678240509,28.8116455078125 ], [  37.461778479617465,28.965454101562504 ], [ 37.99183365313853 ,29.597167968750004 ], [ 37.783740105227224 ,29.1192626953125 ], 
	[  38.22091976683121,28.9434814453125 ], [ 37.666429212090605 ,28.5260009765625 ] ] )

center =[ 38.676933444637925, 30.87982177734375];
radius =9000;
var circle= L.circle([ 38.676933444637925, 30.87982177734375], 9000, {
	color: 'red',
	fillColor: '#f03',
	fillOpacity: 1.0
})
//circle.addTo(map).bindPopup("I am a circle.");

var rectangle=L.polygon( [ [ 38.792626957868904, 28.4765625 ], [ 38.792626957868904, 29.498291015624996 ],
	[ 39.55911824217184, 29.498291015624996 ], [ 39.55911824217184, 28.4765625 ],
	 [38.792626957868904, 28.4765625 ] ] )
//rectangle.addTo(map);



//Layer
var alan1=L.layerGroup();
var alan2=L.layerGroup();


rectangle.addTo(alan1);
circle.addTo(alan1);
sekilsiz.addTo(alan2);
//var area = turf.area(circle);
//console.log(area);



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
	"Okullar":Schools,
	"Hastahaneler":Hospitals,
	"Agaclar":Trees,	
	"Alan1":alan1,
	"Alan2":alan2,
}

var topluKatman=L.control.layers(baseLayers,overLays).addTo(map);

var topluKatmanLocation= topluKatman.getPosition();
topluKatman.setPosition("topleft");




// var nokta6 =L.point(100,200);
//var control2 =nokta1.contains(nokta6);




/*	
function onMapClick(e) {
	var contained = rectangle.contains(e.latlng) || sekilsiz.contains(e.latlng);
	var message = contained ? "This is inside the polygon!" : "This is not inside the polygon.";
	
	popup
	  .setLatLng(e.latlng)
	  .setContent(message)
	  .openOn(map);
	  }


var popup = L.popup();
map.on('click', onMapClick);




function onMap(e) {
    var d = map.distance(e.latlng, circle.getLatLng());
	var isInside = d < circle.getRadius();
	console.log(isInside);
    
};*/
L.Circle.include({
	contains: function (latLng) {
	  return this.getLatLng().distanceTo(latLng) < this.getRadius();
	}
  });
  map.fitBounds(circle.getBounds());
  

  map.on('click', function (e) {
	  
	var marker = L.marker(e.latlng).addTo(map);
	
	


	var result = (circle.contains(marker.getLatLng()) ||rectangle.contains(marker.getLatLng())||sekilsiz.contains(marker.getLatLng())) ;
	var messagee = result ? 'inside': 'outside';
	
	marker.bindPopup('Marker ' + messagee + ' of the shape');
	marker.openPopup();
	map.on('click', function (e) {
		if (marker) {
		  map.removeLayer(marker);
		}
		marker = new L.Marker(e.latlng).addTo(map);
	  });
	 
	
  });
 
  