
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
  animation: google.maps.Animation.BOUNCE,
  title: 'cat-energy',
  icon: {
  url: "../img/icon-pin.svg",
  scaledSize: new google.maps.Size(67, 100)
  }
  });

  }
