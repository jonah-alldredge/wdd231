export async function getData(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Could not load data:", error);
    return null;
  }
}

const root = document.documentElement;
const themeButton = document.querySelector(".theme-toggle");

try {
  const savedTheme = localStorage.getItem("knectTheme");
  if (savedTheme) {
    root.dataset.theme = savedTheme;
  } else if (window.matchMedia("(prefers-color-scheme: light)").matches) {
    root.dataset.theme = "light";
  }
} catch (error) {
  console.error("Could not read saved theme:", error);
}

themeButton.addEventListener("click", () => {
  let newTheme = "light";
  if (root.dataset.theme === "light") {
    newTheme = "dark";
  }
  root.dataset.theme = newTheme;
  try {
    localStorage.setItem("knectTheme", newTheme);
  } catch (error) {
    console.error("Could not save theme:", error);
  }
});

const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".site-nav");

function setMenu(open) {
  menuButton.classList.toggle("is-open", open);
  nav.classList.toggle("is-open", open);
}

menuButton.addEventListener("click", () => {
  setMenu(!nav.classList.contains("is-open"));
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    setMenu(false);
  }
});