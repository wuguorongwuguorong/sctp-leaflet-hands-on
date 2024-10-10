# Ghost Sighting App Assignment

## Overview
In this project, you will create a web application using Leaflet and Bootstrap to report and visualize ghost sightings across Singapore. You'll start with a base map of Singapore and add interactive features to allow users to report sightings, save them to a database, and display all reported sightings on the map.

## Base Code
Start with the provided HTML file that includes a Bootstrap layout and a Leaflet map centered on Singapore. This will serve as the foundation for your ghost sighting app.

## Required Features

### 1. Add Ghost Sighting
- Implement a feature that allows users to click on any point on the map to report a ghost sighting.
- When a user clicks on the map, display a popup UI asking if they want to add a sighting at that location.
- The popup should include "Confirm" and "Cancel" buttons.
- Hint: Use Leaflet's `map.on('click', function(e) { ... })` to handle map clicks. See here for an example: # Ghost Sighting App Assignment

## Overview
In this project, you will create a web application using Leaflet and Bootstrap to report and visualize ghost sightings across Singapore. You'll start with a base map of Singapore and add interactive features to allow users to report sightings, save them to a database, and display all reported sightings on the map.

## Representing the Ghost Sighting.
Each sighting is represented as an object should has the following properties.
```
{
 "_id": "unique ID",
 "title":"Title of the sighting",
 "location":["lat", "lng"],
 "category":"poltergeist",
 "description":"Description of the sightings"
}
```
Of course, the strings `unique ID`, `lat` and `lng` should be replaced with their respective values when you create a sighting.

For categories, you can assume they are:
* poltergeist
* apparitions
* voices
* temperature drop

## Base Code
Start with the provided HTML file that includes a Bootstrap layout and a Leaflet map centered on Singapore. This will serve as the foundation for your ghost sighting app.

## Required Features

### 1. Add Ghost Sighting
- Implement a feature that allows users to click on any point on the map to report a ghost sighting.
- When a user clicks on the map, display a popup UI asking if they want to add a sighting at that location.
- Refer to the above section on what properties a sighting should have. The user should be able to choose the type of sightings, either with a radio button or from a `<select>` dropdown
- The popup should include "Confirm" and "Cancel" buttons.
- Hint: Use Leaflet's `map.on('click', function(e) { ... })` to handle map clicks.
-  See the example at https://glitch.com/edit/#!/sour-shine-marquess where it demonstrates creating a simple form in Leaflet.

### 2. Save Sightings to JSONbin
- When a user confirms a sighting, save the location data to JSONbin.
- Use the JSONbin API to store the sighting data.
- Each sighting should include latitude, longitude, and a timestamp.
- Hint: Use the `axios` library to send POST requests to JSONbin.

### 3. Load and Display Sightings
- When the app loads, retrieve all saved sightings from JSONbin.
- Display each sighting as a pin on the map.
- Each type of sighting should go into its own `layerGroups`
- Add a `L.control.layers` (a layer control) to allow the user to toggle on and off different kind of sightings
- Clicking on a pin should show a popup with the sighting details (date/time).
- Hint: Use the Fetch API to GET data from JSONbin, then use Leaflet's `L.marker()` to add pins to the map.

## Additional Challenges

1. Implement a heatmap of ghost sightings using the Leaflet.heat plugin.
2. Add a feature to filter sightings by date range.
3. Integrate with a weather API to show weather conditions at the time of each sighting.
4. Create custom ghost icons for the map markers.

## Suggested APIs and Resources

1. GeoJSON Data:
   - Singapore Planning Areas: https://data.gov.sg/dataset/master-plan-2014-planning-area-boundary-no-sea
   - Singapore Parks: https://data.gov.sg/dataset/parks

2. Weather API:
   - OpenWeatherMap API: https://openweathermap.org/api

3. Geocoding API:
   - OneMap API (Singapore): https://www.onemap.gov.sg/docs/

4. Time and Date API:
   - WorldTimeAPI: http://worldtimeapi.org/




