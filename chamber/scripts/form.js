const lastModified = new Date();
const currentYear = new Date().getFullYear();
const navButton = document.querySelector("#ham-btn");
const navBar = document.querySelector("#nav-bar");
const nonBtn = document.querySelector("#non-button");
const nonModal = document.querySelector('#non-modal');
const nonCloseBtn = document.querySelector("#non-close");
const bronzeBtn = document.querySelector("#bronze-button");
const bronzeModal = document.querySelector('#bronze-modal');
const bronzeCloseBtn = document.querySelector("#bronze-close");
const silverBtn = document.querySelector("#silver-button");
const silverModal = document.querySelector('#silver-modal');
const silverCloseBtn = document.querySelector("#silver-close");
const goldBtn = document.querySelector("#gold-button");
const goldModal = document.querySelector('#gold-modal');
const goldCloseBtn = document.querySelector("#gold-close");

document.getElementById("timestamp").value = new Date().toISOString();
document.getElementById("lastModified").textContent = "Last Modified: " + document.lastModified;
document.getElementById("currentYear").textContent = currentYear;

navButton.addEventListener('click', () => {
  navButton.classList.toggle('show');
  navBar.classList.toggle('show');
});

nonBtn.addEventListener('click', () => {
  nonModal.showModal();
});
bronzeBtn.addEventListener('click', () => {
  bronzeModal.showModal();
});
silverBtn.addEventListener('click', () => {
  silverModal.showModal();
});
goldBtn.addEventListener('click', () => {
  goldModal.showModal();
});

nonCloseBtn.addEventListener('click', () => {
  nonModal.close();
});
bronzeCloseBtn.addEventListener('click', () => {
  bronzeModal.close();
});
silverCloseBtn.addEventListener('click', () => {
  silverModal.close();
});
goldCloseBtn.addEventListener('click', () => {
  goldModal.close();
});