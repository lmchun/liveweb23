			const userLocation = document.querySelector("[data-location]")
            let lat = "0",
		        long = "0";
			const accessContent = document.querySelector("#accessPopup");

			if (navigator.geolocation) {
				//alert("Allowed");

				navigator.geolocation.watchPosition(successCallback, errorCallback, {});

				function successCallback(currentPosition) {
					// alert(currentPosition.coords.longitude +" " + currentPosition.coords.latitude);
                    userLocation.innerHTML=`${currentPosition.coords.longitude} ${currentPosition.coords.latitude}`
				
				lat = currentPosition.coords.latitude,
		        long = currentPosition.coords.longitude;

				checkLocation();
				
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

		function showonMap(){
			console.log("show map")
			let mapElem = document.getElementById('map');
				const googleMap = "https://maps.googleapis.com/maps/api/staticmap?center=" +  lat + ',' + long +"&zoom=18&size=400x400&markers=color:red%7Clabel:DoyerSt%7C"+  lat + ',' + long +"&key=AIzaSyCAirwcBgqDzPj6DlLDNzWvF-DPlcjsXfE"
		    	mapElem.innerHTML = `<img src="${googleMap}" />`	
		}

		function checkLocation(){
			// Regular expressions for latitude and longitude patterns
		  const latitudePattern = /^40\.69/;
		  const longitudePattern = /^-73\.98/;
		  
		  // Check if latitude and longitude match the patterns
		  const latitudeMatchesPattern = lat.toString().match(latitudePattern);
		  const longitudeMatchesPattern = long.toString().match(longitudePattern);
		  
		  if (latitudeMatchesPattern && longitudeMatchesPattern) {
			console.log("The latitude starts with 40.69 and longitude starts with -73.98");
			accessContent.innerHTML = `<p>Access Granted</p>`
			console.log("access granted")
		  } else {
			console.log("The latitude or longitude does not match the desired patterns");

		  }
		  }

