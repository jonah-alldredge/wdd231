const lastModified = new Date();
const currentYear = new Date().getFullYear();

document.getElementById("lastModified").textContent = "Last Modified: " + document.lastModified;
document.getElementById("currentYear").textContent = currentYear;