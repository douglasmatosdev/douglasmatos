var map;
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: -22.6553095, lng: -43.2545535},
        zoom: 10
    });
}
