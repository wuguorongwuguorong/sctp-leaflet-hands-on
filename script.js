document.addEventListener("click", function(){
    let map = L.map('map').setView([1.3521, 103.8198], 12);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Add markers for the locations
let locations = [
    {name: "Marina Bay Sands", coords: [1.2838, 103.8591]},
    {name: "Gardens by the Bay", coords: [1.2816, 103.8636]},
    {name: "Sentosa Island", coords: [1.2494, 103.8303]},
    {name: "Orchard Road", coords: [1.3038, 103.8319]},
    {name: "Singapore Zoo", coords: [1.4043, 103.7930]}
];

for (let loc of locations) {
    L.marker(loc.coords).addTo(map)
        .bindPopup(loc.name);
};
})

