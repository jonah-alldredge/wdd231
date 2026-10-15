import { getData } from "./shared.js";

// ---------- Friends ----------
const friendCard = ({ name, status, location, image, imageAlt }) => `
  <article class="friend-card card">
    <img src="${image}" alt="${imageAlt}" width="72" height="72" loading="lazy">
    <div class="friend-info">
      <h3>${name}</h3>
      <p>${status}</p>
      <p>${location}</p>
    </div>
  </article>`;

async function showFriends() {
  const friendsList = document.querySelector(".friends-list");
  const data = await getData("data/data.json");

  if (data) {
    friendsList.innerHTML = data.friends.map(friendCard).join("");
  } else {
    friendsList.textContent = "Friends could not be loaded right now. Please try again later.";
  }
}

// ---------- "You will be notified" modal ----------
function setUpModal() {
  const form = document.querySelector("#notify-form");
  const dialog = document.querySelector("#notify-dialog");
  const closeButton = document.querySelector("#notify-close");

  // The submit event only fires when the browser's built-in validation passes.
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    dialog.showModal();
  });

  closeButton.addEventListener("click", () => dialog.close());

  // Clicking the dimmed backdrop (outside the dialog's content) also closes it.
  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) {
      dialog.close();
    }
  });

  dialog.addEventListener("close", () => form.reset());
}

showFriends();
setUpModal();