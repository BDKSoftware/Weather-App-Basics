function init() {
    // Select the Button
    let btn = document.querySelector("#btn");

    // Add event Listener for CLick
    btn.addEventListener('click', () => {
        let city = document.getElementById("input1").value;
        let state = document.getElementById("input2").value;

        // Checks if Location value is false/null/blank
        if(!city || !state)
        {
            alert("Both city and state must be filled out");
            return;
        }

        // Checks if btn is value, if so it will save the city and state values
            // and route the user to the weather.html page that displays the results
        if(btn) {
            console.log(city);
            localStorage.setItem('city', city);
            localStorage.setItem('state', state);
            window.document.location = './weather.html';
            return;
        }
    })
}

function getWeather() {

};


// Gets Lat and Lon values and returns them, if their is no return the user is prompted to
    // re-input values that will work with OpenWeatherAPI

// RETURN VALUE: Lat and Long
function checkLocationValues() {

};

document.addEventListener("DOMContentLoaded", function() {
    init();
})