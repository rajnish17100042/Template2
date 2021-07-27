
AOS.init({

    duration: 1000,
    easing: 'ease-in-out',
    once: false,
    mirror: false,

});

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}