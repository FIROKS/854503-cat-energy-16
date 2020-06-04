function initMap() {
  var uluru = {lat: 59.9385, lng: 30.3229};
  var map = new google.maps.Map(document.getElementById('map'), {
  zoom: 17,
  disableDefaultUI: false,
  center: uluru,
  });

  var marker = new google.maps.Marker({
    position: uluru,
    map: map,
    title: 'cat-energy',
    icon: {
      url: "./../img/map-pin.png",
      scaledSize: new google.maps.Size(113, 106)
    }
    });
  }
