// MAP

const map = L.map("map").setView([36.499177,-79.9903687], 15);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// LEGENDS

// MARKERS



// GET latlng onClick
//
// map.on('click', function (e) {
//   console.log(e.latlng)
//   alert(e.latlng)
// })