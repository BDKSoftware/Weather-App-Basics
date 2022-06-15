function init() {
    let btn = document.querySelector("#btn");
    

    

    btn.addEventListener('click', () => {
        let location = document.getElementById("input1").value;
        // Checks if Location value is false/null/blank
        if(!location)
        {
            console.log("Value is Blank");
            return;
        }

        
        if(btn) {
            console.log(location);
            localStorage.setItem('location', location);
            window.document.location = './weather.html';
        }
    })
}

document.addEventListener("DOMContentLoaded", function() {
    init();
})