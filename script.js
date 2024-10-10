document.addEventListener("DOMContentLoaded", function() {
    let singaporeMap = L.map('map').setView([1.3521, 103.8198], 12);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(singaporeMap);

    // Predefined categories for sightings
    const categories = ['poltergeist', 'apparitions', 'voices', 'temperature drop'];

    // JSONbin API Configuration
    const JSONBIN_URL = "https://api.jsonbin.io/v3/b/6707e59eacd3cb34a894991f"; // Replace with your bin ID
    const JSONBIN_API_KEY = "$2a$10$8m6sNL/5MaUyqaXrdNxjqO7VV2rqEaQXxAqAS1PeRE0fu0LVLQ0ce"; // Replace with your JSONbin API key

    // Function to post sighting to JSONbin
    async function postSighting(data) {
        try {
            let response = await axios.post(JSONBIN_URL, data, {
                headers: {
                    'Content-Type': 'application/json',
                    'X-Master-Key': "$2a$10$8m6sNL/5MaUyqaXrdNxjqO7VV2rqEaQXxAqAS1PeRE0fu0LVLQ0ce" // Use your secret API key here
                }
            });
            console.log('Sighting saved successfully:', response.data);
        } catch (error) {
            console.error('Error saving sighting:', error);
        }
    }

    // Handle map clicks for ghost sighting reporting
    singaporeMap.on('click', function(e) {
        let clickedCoords = e.latlng;

        let popupContent = `
            <div>
                <h5>Report Ghost Sighting</h5>
                <p>Do you want to report a sighting at this location?</p>
                <input id="sightingTitle" class="form-control mb-2" placeholder="Title of the sighting">
                <textarea id="sightingDescription" class="form-control mb-2" placeholder="Description of the sighting"></textarea>
                <label for="sightingCategory">Category:</label>
                <select id="sightingCategory" class="form-control mb-2">
                    ${categories.map(cat => `<option value="${cat}">${cat}</option>`).join('')}
                </select>
                <button id="confirmSighting" class="btn btn-primary">Confirm</button>
                <button id="cancelSighting" class="btn btn-secondary">Cancel</button>
            </div>
        `;

        let popup = L.popup()
            .setLatLng(clickedCoords)
            .setContent(popupContent)
            .openOn(singaporeMap);

        // Handle Confirm and Cancel buttons
        document.getElementById('confirmSighting').addEventListener('click', function() {
            let title = document.getElementById('sightingTitle').value;
            let description = document.getElementById('sightingDescription').value;
            let category = document.getElementById('sightingCategory').value;
            let timestamp = new Date().toISOString(); // Capture current timestamp
            let uniqueId = 'id-' + Math.random().toString(36).substr(2, 16); // Generate a unique ID

            if (!title || !description) {
                alert('Please provide both a title and description for the sighting.');
                return;
            }

            // Add marker on the map
            L.marker(clickedCoords).addTo(singaporeMap)
                .bindPopup(`${title} (${category}) - Reported here!`)
                .openPopup();

            // Prepare sighting data to be saved
            let sightingData = {
                _id: uniqueId,
                title: title,
                location: [clickedCoords.lat, clickedCoords.lng],
                category: category,
                description: description,
                timestamp: timestamp
            };

            // Post the sighting data to JSONbin
            postSighting(sightingData);

            // Close the popup after confirming
            singaporeMap.closePopup();
        });

        document.getElementById('cancelSighting').addEventListener('click', function() {
            singaporeMap.closePopup();
        });
    });
});

