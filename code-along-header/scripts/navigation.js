// Store the selected elements that we are going to use.
const navButton = document.querySelector("#ham-btn");
// const navlinks = document.querySelector("#nav-bar");
const navBar = document.querySelector("#nav-bar");
let display = document.querySelector("#current");
let selected = document.querySelector("#selected");
console.log(display);
selected.textContent = display.textContent;

//Toggle the show class off and on
navButton.addEventListener('click', () => {
    navButton.classList.toggle('show');
    // navlinks.classList.toggle('show');
    navBar.classList.toggle('show');
})