document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener("scroll", moveBackground);
});

function moveBackground() {
    let yOffset = window.scrollY;
    let backElements = document.getElementsByClassName("background-element");
    let foreElements = document.getElementsByClassName("parallax__layer--fore");

    for (let i = 0; i < backElements.length; i++) {
        backElements[i].style.setProperty("transform", "translateY("+ String(yOffset * 0.4) + "px)");
    }

    for (let i = 0; i < foreElements.length; i++) {
        foreElements[i].style.setProperty("transform", "translateY(" + String(-yOffset * 0.2) + "px)");
    }
}
