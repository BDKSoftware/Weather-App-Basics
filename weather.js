function init() {
    let spn = document.querySelector("#userLocation");
    let city = localStorage.getItem('city');
    let state = localStorage.getItem('state');


    if(spn)
    {
       
        spn.innerHTML = city + ", " + state;
    }
}

document.addEventListener("DOMContentLoaded", function() {
    init();
})