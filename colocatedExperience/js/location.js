			const userLocation = document.querySelector("[data-location]")
            if (navigator.geolocation) {
				//alert("Allowed");

				navigator.geolocation.watchPosition(successCallback, errorCallback, {});

				function successCallback(currentPosition) {
					// alert(currentPosition.coords.longitude +" " + currentPosition.coords.latitude);
                    userLocation.innerHTML=`${currentPosition.coords.longitude} ${currentPosition.coords.latitude}`
				
				var lat = currentPosition.coords.latitude,
		        long = currentPosition.coords.longitude;
 
		        var mapElem = document.getElementById('map');
		    	// mapElem.innerHTML = '<img src="http://maps.googleapis.com/maps/api/staticmap?markers=' + lat + ',' + long + '&zoom=20&size=300x300&sensor=false" />';					
				}

				function errorCallback(e) {
					alert(e);
				}

			} else {
				//alert("Not Allowed");
			}

        function logLocation(){
            console.log("logging location")
        }