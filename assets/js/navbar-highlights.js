//animation for linear degriant
const sections = document.querySelectorAll("section");
const bubble = document.querySelector("#bubble");
const gradients = [
    "linear-gradient(to right top, #519DC2, #005A8C)",           
    "linear-gradient(to right top, #7da416, #5e7200)", 
    "linear-gradient(to right top, #c5702b, #e4ad18)", 
    "linear-gradient(to right top, #c5422b, #d82708)", 
    "linear-gradient(to right top, #2bc5c5, #098e92)", 
    "linear-gradient(to right top, #d3b81f, #e2ba09)"
];

const gradientDefault = [
    "linear-gradient(to right top, transparent, transparent)",
];

const options = {
    threshold: 0.35 //0.7
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
});