function init() {
    // Get values from Local Storage
    
        let zipCode = sessionStorage.getItem('zip');
        fetch('https://api.openweathermap.org/data/2.5/weather?zip='+
        zipCode+',us&appid=f63d273f25119d02e39ddf003ee6e1fa&units=imperial').then(response => response.json()).then(
            data => weatherData = data
        ).then(() => {
            setLocation(weatherData.name);
            setIcon(weatherData.weather[0].icon);
            setDescription(weatherData.weather[0].description);
            setTemps(weatherData.main.temp_min, weatherData.main.temp, weatherData.main.temp_max)
            setWind(weatherData.wind.speed);
        });
    };

    // Inject Values into HTML
// Sets Icon from sessionStorage Value
function setIcon(icon) {
    let img = document.querySelector('#icon');

    // Guard Clause
    if(!img) return;

    img.setAttribute("src", `http://openweathermap.org/img/wn/${icon}.png`);
    img.setAttribute("alt", "Icon for Weather Data");
}

// Sets Location Values from sessionStorage Value
function setLocation(location)
{
    let title = document.querySelector('#container-header');

    // Guard Clause
    if(!title) return;

    title.innerHTML = location;
    
    
}

// Sets Description From sessionStorage Value
function setDescription(description)
{
    let text = document.querySelector("#description");

    // Guard Clause
    if(!text) return;

    text.innerHTML = description.toUpperCase();
    
}


// Sets Temp values from sessionStorage
function setTemps(temp_min, temp, temp_max)
{
    let low = document.querySelector('.low');
    let current = document.querySelector('.current');
    let high = document.querySelector('.high');

    // Guard Clause
    if(!low && !current && !high) return;
   

    low.innerHTML = temp_min + ' \u00B0';
    current.innerHTML = temp + ' \u00B0';
    high.innerHTML = temp_max + ' \u00B0';
}

// Sets Wind Value from LocalStoreage
function setWind(wind)
{
    let conditions = document.querySelector('#wind');

    // Guard Clause
    if(!conditions) return;

    conditions.innerHTML = wind + ' MPH';
}

// Calls Init when the DOM content is loaded on screen
document.addEventListener("DOMContentLoaded", function() {
    init();
})
