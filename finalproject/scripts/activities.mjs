import { getData } from "./shared.js";

const activityCard = ({ name, bio, image, imageAlt }) => `
  <article class="activity-card card">
    <img src="${image}" alt="${imageAlt}" width="640" height="360" loading="lazy">
    <h2>${name}</h2>
    <p>${bio}</p>
  </article>`;

async function showActivities() {
  const activityList = document.querySelector(".activity-list");
  const data = await getData("data/data.json");

  if (data) {
    activityList.innerHTML = data.activities.map(activityCard).join("");
  } else {
    activityList.textContent = "Activities could not be loaded right now. Please try again later.";
  }
}

showActivities();