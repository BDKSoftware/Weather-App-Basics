function init() {
    let spn = document.querySelector("#userLocation");
    let location = localStorage.getItem('location');

    if(spn)
    {
        console.log(location);
        spn.innerHTML = location;
    }
}

document.addEventListener("DOMContentLoaded", function() {
    init();
})