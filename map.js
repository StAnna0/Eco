var map = L.map('map').setView([59.93909, 30.31586], 9);
mapLink =
    '<a href="http://openstreetmap.org">OpenStreetMap</a>';
L.tileLayer(
    'https://api.mapbox.com/styles/v1/annast/ck2x1xsc21c5v1cmu17k9aozo/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiYW5uYXN0IiwiYSI6ImNrMjRmcXNqcjAxNTkzYmt4dXA5MjY5dzEifQ.3krMoWv0JIQ7jpoNUyyJXg').addTo(map);

function onEachFeature(feature, layer){
	if (feature.properties && feature.properties.popupContent){
		layer.bindPopup(feature.properties.popupContent);
	};
};

/*
(feature.properties && feature.properties.title){
		layer.bindPopup(feature.properties.title);
*/
var testFeature =

L.geoJSON(testFeature, {
	onEachFeature: onEachFeature
	}
).addTo(map);

var OOPT = {
    "type": "FeatureCollection",
    "name": "ino",
    "crs": {
        "type": "name",
        "properties": {
            "name": "urn:ogc:def:crs:OGC:1.3:CRS84"
        }
    },
    "features": [
                {
            "type": "Feature",
            "properties": {"id": 1, "title": "Юнтоловский заказник", "popupContent":"Юнтоловский заказник"},
            "geometry": {"type": "Point", "coordinates": [30.171728, 60.020679]}
        }, {
            "type": "Feature",
            "properties": {"id": 2, "title": "Заказник Западный Котлин", "popupContent":"Заказник Западный Котлин"},
            "geometry": {"type": "Point", "coordinates": [29.665595, 60.026811]}
        }, {
            "type": "Feature",
            "properties": {"id": 3, "title": "Государственный заказник Сестрорецкое болото", "popupContent":"Государственный заказник Сестрорецкое болото"},
            "geometry": {"type": "Point", "coordinates": [30.025497, 60.111849]}
        }, {
            "type": "Feature",
            "properties": {"id": 4, "title": "Северное побережье Невской губы", "popupContent":"Северное побережье Невской губы"},
            "geometry": {"type": "Point", "coordinates": [30.058759, 60.001240]}
        }, {
            "type": "Feature",
            "properties": {"id": 5, "title": "Ботанический сад Петра Великого", "popupContent":"Ботанический сад Петра Великого"},
            "geometry": {"type": "Point", "coordinates": [30.323640, 59.969384]}
		}, {
            "type": "Feature",
            "properties": {"id": 6, "title": "Ботанический сад Санкт-Петербургского государственного университета", "popupContent":"Ботанический сад Санкт-Петербургского государственного университета"},
            "geometry": {"type": "Point", "coordinates": [30.296884, 59.941722]}
		}, {
            "type": "Feature",
            "properties": {"id": 7, "title": "Парк Лесотехнической академии", "popupContent":"Парк Лесотехнической академии"},
            "geometry": {"type": "Point", "coordinates": [30.343247, 59.991842]}
		}, {
            "type": "Feature",
            "properties": {"id": 8, "title": "Дудергофские высоты", "popupContent":"Дудергофские высоты"},
            "geometry": {"type": "Point", "coordinates": [30.132874, 59.696871]}
		}, {
            "type": "Feature",
            "properties": {"id": 9, "title": "Елагин остров", "popupContent":"Елагин остров"},
            "geometry": {"type": "Point", "coordinates": [30.258765, 59.978752]}
		}, {
            "type": "Feature",
            "properties": {"id": 10, "title": "Памятник природы Комаровский берег", "popupContent":"Памятник природы Комаровский берег"},
            "geometry": {"type": "Point", "coordinates": [29.773047, 60.180168]}
		}, {
            "type": "Feature",
            "properties": {"id": 11, "title": "Новоорловский государственный природный заказник регионального значения", "popupContent":"Новоорловский государственный природный заказник регионального значения"},
            "geometry": {"type": "Point", "coordinates": [30.282462, 60.047805]}
		}, {
            "type": "Feature",
            "properties": {"id": 12, "title": "Государственный природный заказник Озеро Щучье", "popupContent":"Государственный природный заказник Озеро Щучье"},
            "geometry": {"type": "Point", "coordinates": [29.768621, 60.213004]}
		}, {
            "type": "Feature",
            "properties": {"id": 13, "title": "Парк «Сергиевка»", "popupContent":"Парк «Сергиевка»"},
            "geometry": {"type": "Point", "coordinates": [29.839728, 59.895919]}
		}, {
            "type": "Feature",
            "properties": {"id": 14, "title": "Петровский пруд", "popupContent":"Петровский пруд"},
            "geometry": {"type": "Point", "coordinates": [30.277349, 59.955941]}
		}, {
            "type": "Feature",
            "properties": {"id": 15, "title": "Стрельнинский берег", "popupContent":"Стрельнинский берег"},
            "geometry": {"type": "Point", "coordinates": [30.085916, 59.860851]}				
        }
    ]
};

L.geoJSON(OOPT, {
	onEachFeature: onEachFeature
}).addTo(map);
