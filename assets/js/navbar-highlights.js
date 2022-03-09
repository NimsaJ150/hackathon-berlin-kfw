/*animation for linear degriant
const sections = document.querySelectorAll("section");
const bubble = document.querySelector("#bubble");
const gradients = [
    "linear-gradient(to right top, #519DC2, #dee3e6)",           
    "linear-gradient(to right top, #A4B419, #f5f5ce)", 
    "linear-gradient(to right top, #f8f4ef, #ece9e2)", 
    "linear-gradient(to right top, #F0EEE1, #b9b9b9)", 
    "linear-gradient(to right top, #eee8f0, #5B2C6F)", 
    "linear-gradient(to right top, #F0EEE1, #cccdce)",
    "linear-gradient(to right top, #00446E, #def1fd)"
];

const gradientDefault = [
    "linear-gradient(to right top, transparent, transparent)",
];

const options = {
    threshold: 0.7
};

let observer = new IntersectionObserver(navCheck, options);

function navCheck(entries) {
    entries.forEach(entry => {
        const id = entry.target.id;
        const activeAnchor = document.querySelector(`[data-page=${id}]`);
        const gradientIndex = entry.target.getAttribute("data-index");
        const coords = activeAnchor.getBoundingClientRect();
        const directions = {
            height: coords.height,
            width: coords.width,
            top: coords.height,
            left: coords.left
        };
        if($(window).width() < 800){
            bubble.style.background = gradientDefault;
            bubble.preventDefault();
            coords.activeAnchor.preventDefault();
        }
        if(entry.isIntersecting && $(window).width() > 913){
            bubble.style.setProperty("left", `${directions.left}px`);
            bubble.style.setProperty("top", `${directions.top}px`);
            bubble.style.setProperty("width", `${directions.width}px`);
            bubble.style.setProperty("height", `${directions.height}px`);
            bubble.style.background = gradients[gradientIndex];
        }
    });
}

sections.forEach(section => {
    observer.observe(section);
}); */