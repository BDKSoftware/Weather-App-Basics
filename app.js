function init() {
    // Select the Button
    let btn = document.querySelector("#btn");

    // Add event Listener for CLick
    btn.addEventListener('click', () => {
        
        let zip = document.getElementById('input1').value;

        // Checks if Location value is false/null/blank
        if(!zip)
        {
            alert("All Fields Are Required");
            return;
        }

        // Checks if btn is value, if so it will save the city and state values
            // and route the user to the weather.html page that displays the results
        if(btn) {
            sessionStorage.setItem('zip', zip);
            window.document.location = './weather.html';
            return;
        }
    })
}


document.addEventListener("DOMContentLoaded", function() {
    init();
})