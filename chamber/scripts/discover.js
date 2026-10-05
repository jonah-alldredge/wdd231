import { places } from '../data/places.mjs';

console.log(places);

const showHere = document.querySelector('#allPlaces');

function displayItems(places) {
  places.forEach(place => {
    const theCard = document.createElement('div');
    theCard.className = 'place-card';
    const thePhoto = document.createElement('img');
    thePhoto.src = `${place.photo_url}`;
    thePhoto.alt = place.name;
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
    showHere.appendChild(theCard);
  });
}

displayItems(places);