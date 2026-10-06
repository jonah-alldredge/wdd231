import { places } from '../data/places.mjs';
const lastModified = new Date();
const currentYear = new Date().getFullYear();
const navButton = document.querySelector("#ham-btn");
const navBar = document.querySelector("#nav-bar");
const showHere = document.querySelector('#allPlaces');
const mainDiv = document.createElement('div');
const visitMessage = document.querySelector('#message');
const lastVisit = localStorage.getItem('lastVisitDate');
const currentVisit = Date.now();

document.getElementById("lastModified").textContent = "Last Modified: " + document.lastModified;
document.getElementById("currentYear").textContent = currentYear;

navButton.addEventListener('click', () => {
  navButton.classList.toggle('show');
  navBar.classList.toggle('show');
});

function displayItems(places) {
  places.forEach(place => {
    const theCard = document.createElement('div');
    mainDiv.className = 'place-layout';
    theCard.className = 'place-card';
    const thePhoto = document.createElement('img');
    thePhoto.src = `${place.photo_url}`;
    thePhoto.alt = place.name;
    thePhoto.loading = 'lazy';
    theCard.appendChild(thePhoto);
    const theTitle = document.createElement('h2');
    theTitle.innerText = place.name;
    theCard.appendChild(theTitle);
    const theAddress = document.createElement('address');
    theAddress.innerText = place.address;
    theCard.appendChild(theAddress);
    const theDesc = document.createElement('p');
    theDesc.innerText = place.description;
    theCard.appendChild(theDesc);
    mainDiv.appendChild(theCard);
    showHere.appendChild(mainDiv);
  });
}
displayItems(places);

const miliseconds = 86400000;
const timeDifference = currentVisit - lastVisit;
// const timeDifference = 90000000;
// console.log(timeDifference);
const daySince = (timeDifference - miliseconds) / miliseconds;
// console.log(daySince);
if (!lastVisit) {
  visitMessage.textContent = 'Welcome! Let us know if you have any questions.';
  // localStorage.setItem('lastVisit', currentVisit);
} else {
  if (timeDifference < miliseconds) {
    visitMessage.textContent = 'Back so soon? Glad to see you!';
  } else {
    let plural = 'days';
    let roundedNumber = Math.round(daySince, 1);
    if (daySince < 1) {
      plural = 'day';
      roundedNumber = 1;
    }
    visitMessage.textContent = `You last visited ${roundedNumber} ${plural} ago`;  
  }
}
localStorage.setItem('lastVisitDate', currentVisit);

