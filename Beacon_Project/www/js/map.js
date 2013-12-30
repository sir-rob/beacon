//-- Custom Icons ------------------//
		var GirIcon = L.Icon.extend({
	        options: {
	            shadowUrl: 'images/icon_gir_shadow.png',
	            iconSize:     [55, 64],
	            shadowSize:   [65, 16],
	            iconAnchor:   [25, 58],
	            shadowAnchor: [5, 10],
	            popupAnchor:  [5, -60]
	        }
	    });
		
		var PiggyIcon = L.Icon.extend({
	        options: {
	            shadowUrl: 'images/piggy_shadow.png',
	            iconSize:     [50, 46],
	            shadowSize:   [50, 9],
	            iconAnchor:   [25, 0],
	            shadowAnchor: [25, -50],
	            popupAnchor:  [0, 0]
	        }
	    });
		
		var greenGirIcon = new GirIcon({iconUrl: 'images/icon_gir_green.png'}),
		    pinkGirIcon = new GirIcon({iconUrl: 'images/icon_gir_pink.png'}),
		    blackGirIcon = new GirIcon({iconUrl: 'images/icon_gir_black.png'}),
			piggyIcon = new PiggyIcon({iconUrl: 'images/piggy.png'});
		//----------------------------------//
		
		//-- Markers for Layers ------------//
		var piggy01 = L.marker([36.26954, -115.01329], {icon: piggyIcon}).bindPopup('This is piggy01.'),
			piggy02 = L.marker([36.27334, -115.00617], {icon: piggyIcon}).bindPopup('This is piggy02.'),
			gir01 = L.marker([36.27497, -115.01347], {icon: pinkGirIcon}).bindPopup('This is Gir01.'),
			gir02 = L.marker([36.26992, -115.00887], {icon: greenGirIcon}).bindPopup('This is Gir02.');
		
		var piggies = L.layerGroup([piggy01, piggy02]),
			girs = L.layerGroup([gir01, gir02]);
		
		var overlayMaps = {
			    "Piggies": piggies,
			    "Girs": girs
			}; 
		//----------------------------------//
		
	
		
		//-- MapQuest OpenStreet ----------------------------------------//
		var mapquestUrl = 'http://{s}.mqcdn.com/tiles/1.0.0/osm/{z}/{x}/{y}.png',
	    subDomains = ['otile1','otile2','otile3','otile4'],
	    mapquestAttrib = 'Data, imagery and map information provided by <a href="http://open.mapquest.co.uk" target="_blank">MapQuest</a>, <a href="http://www.openstreetmap.org/" target="_blank">OpenStreetMap</a> and contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/" target="_blank">CC-BY-SA</a>',
	    cloudmadeUrl = 'http://{s}.tile.cloudmade.com/5e97fdf33141445da76813c22dd7868d/997/256/{z}/{x}/{y}.png',
	    cloudmadeAttribution = 'Map data &copy; 2011 OpenStreetMap contributors, Imagery &copy; 2011 CloudMade';
	    
		var mapquest = new L.TileLayer(mapquestUrl, {maxZoom: 18, attribution: mapquestAttrib, subdomains: subDomains}),
			cloudmade = new L.tileLayer(cloudmadeUrl, {styleId: 999,attribution: cloudmadeAttribution});
		
		//cloudmade.addTo(map);
		var baseMaps = {
			"MapQuest":mapquest,
			"CloudMade":cloudmade
		};
		//--------------------------------------------------------//
		
		//-- Map Constructor -------------------------------//
		var NWPoint = new L.LatLng(36.3071, -115.31216),
		    SEPoint = new L.LatLng(35.98134, -114.91837),
		    bounds = new L.LatLngBounds(NWPoint, SEPoint);
		//alert(bounds.getSouthWest(),bounds.getNorthEast());
		// var map = L.map('map', {layers:[mapquest,piggies], minZoom:4, maxZoom:18, maxBounds:bounds});
		var map = L.map('map', {layers:[mapquest], minZoom:4, maxZoom:18, maxBounds:bounds});
		L.control.layers(baseMaps, overlayMaps).addTo(map);
		//map.fitBounds(bounds);
		//-------------------------------------------------//
		
		
		//-- Image Overlay ----------------------------------------//
		//var imageUrl = 'http://www.lib.utexas.edu/maps/historical/newark_nj_1922.jpg',
		var imageUrl = 'images/gir_sit_150.png',
	    imageBounds = [[36.27518, -115.01381], [36.27002, -115.00892]];

		L.imageOverlay(imageUrl, imageBounds).addTo(map);
		//--------------------------------------------------------//
		
		//<iframe width="425" height="350" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?f=q&amp;source=s_q&amp;hl=en&amp;geocode=&amp;q=Las+Vegas+Motor+Speedway,+Las+Vegas,+NV&amp;aq=0&amp;oq=las+vegas+speed&amp;sll=40.676472,-73.979187&amp;sspn=1.026922,1.043701&amp;ie=UTF8&amp;hq=Las+Vegas+Motor+Speedway,+Las+Vegas,+NV&amp;ll=36.267458,-115.013234&amp;spn=0.019409,0.023555&amp;t=m&amp;output=embed"></iframe><br /><small><a href="https://maps.google.com/maps?f=q&amp;source=embed&amp;hl=en&amp;geocode=&amp;q=Las+Vegas+Motor+Speedway,+Las+Vegas,+NV&amp;aq=0&amp;oq=las+vegas+speed&amp;sll=40.676472,-73.979187&amp;sspn=1.026922,1.043701&amp;ie=UTF8&amp;hq=Las+Vegas+Motor+Speedway,+Las+Vegas,+NV&amp;ll=36.267458,-115.013234&amp;spn=0.019409,0.023555&amp;t=m" style="color:#0000FF;text-align:left">View Larger Map</a></small>
		var popup = L.popup();

		function onMapClick(e) {
			popup
				.setLatLng(e.latlng)
				.setContent("You clicked the map at " + e.latlng.toString())
				.openOn(map);
		}

		map.on('click', onMapClick);
		
		
		function onLocationFound(e) {
		    var radius = e.accuracy / 2;

		    L.marker(e.latlng, {icon: blackGirIcon}).addTo(map)
		        .bindPopup("You are within " + radius + " meters from this point").openPopup();

		    L.circle(e.latlng, radius).addTo(map);
		    
		    map.setView([36.272373,-115.01025], 16);
		    //map.locate({setView: true, maxZoom: 16});
		}

		map.on('locationfound', onLocationFound);
		//map.locate({setView: true, maxZoom: 16});
		map.setView([36.272373,-115.01025], 16);
		