function initMap() {
      var pos = {lat: 50.028038, lng: 36.323749};
      var opt = {
        center: {lat: 50.028038, lng: 36.323749},
        zoom: 15,
      }
      var myMap = new google.maps.Map(document.getElementById("map"), opt);

      var marker = new google.maps.Marker({
        position: pos,
        map: myMap,
        title: "SPORTCARS FOR RACES",
      });

      var info = new google.maps.InfoWindow({
        content: '<h3>SPORTCARS FOR RACES</h3><p>61000, Kharkiv region,<br> Kharkiv, Vulitsya Heroiv Pracі, 2</p>'
      });

      marker.addListener("click", function(){
        info.open(myMap, marker);
      });
    }
