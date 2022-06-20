function init() {
    // Select the Button
    let btn = document.querySelector("#btn");

    // Add event Listener for CLick
    btn.addEventListener('click', () => {
        let city = document.getElementById("input1").value;
        let state = document.getElementById("input2").value;
        let zip = document.getElementById("input3").value;

        // Checks if Location value is false/null/blank
        if(!city || !zip || !state)
        {
            alert("All Fields Are Required");
            return;
        }

        // Checks if btn is value, if so it will save the city and state values
            // and route the user to the weather.html page that displays the results
        if(btn) {
            
            localStorage.setItem('city', city);
            localStorage.setItem('zip', zip);
            localStorage.setItem('state', state);
            window.document.location = './weather.html';
            return;
        }
    })
}

// Fetch Request to API for Current Weather Information

// RETURN VALUE: JSON data
function getWeather() {

};


// Gets Lat and Lon values and returns them, if their is no return the user is prompted to
    // re-input values that will work with OpenWeatherAPI

// RETURN VALUE: Lat and Long
function checkLocationValues() {

};


// Gets the time of where the user is located

// RETURN VALUE: Time Stamp for Users Locations
// This will be used to change the background image/color depending on the time
function getTime() {

}

document.addEventListener("DOMContentLoaded", function() {
    init();
})