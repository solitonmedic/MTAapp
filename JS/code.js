$(document).ready(function() {   
            var sideslider = $('[data-toggle=collapse-side]');
            var sel = sideslider.attr('data-target');
            var sel2 = sideslider.attr('data-target-2');
            sideslider.click(function(event){
                $(sel).toggleClass('in');
                $(sel2).toggleClass('out');
            });
        });


var directionsDisplay;
var directionsService;	

var map;

function myMap() {
		directionsDisplay = new google.maps.DirectionsRenderer();
        directionsService = new google.maps.DirectionsService();
		map= {
			center:new google.maps.LatLng(40.7711329, -73.9741874),
			zoom:12,
		}; 
		
		map=new google.maps.Map(document.getElementById("googleMap"),map);
		directionsDisplay.setMap(map);
		directionsDisplay.setPanel(document.getElementById('directionsPanel'));
		var defaultBounds = new google.maps.LatLngBounds(
		  new google.maps.LatLng(40.7127837, -74.1088471),
		  new google.maps.LatLng(40.7517704, -74.0059413));
		var input = document.getElementById('origin-input');
		var autocomplete = new google.maps.places.Autocomplete(input);
		var searchBox = new google.maps.places.SearchBox(input, {
		  bounds: defaultBounds
		});
		var input2 = document.getElementById('destination-input');
		var searchBox = new google.maps.places.SearchBox(input2, {
		  bounds: defaultBounds
		});
	
		var onChangeHandler = function() {
          calculateAndDisplayRoute(directionsService, directionsDisplay);
        };
		document.getElementById('button1').addEventListener('click', onChangeHandler);
        
      }

	function calculateAndDisplayRoute(directionsService, directionsDisplay) {
        var start = document.getElementById('origin-input').value;
        var end = document.getElementById('destination-input').value;
		if(start != null && end != null){
        directionsService.route({
          origin: start,
          destination: end,
          travelMode: 'TRANSIT'
        }, function(response, status) {
          if (status === 'OK') 
            directionsDisplay.setDirections(response);
          
        });
	}	
   }
	