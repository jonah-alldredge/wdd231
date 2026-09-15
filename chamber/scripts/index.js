const lastModified = new Date();
const currentYear = new Date().getFullYear();
const navButton = document.querySelector("#ham-btn");
const navBar = document.querySelector("#nav-bar");

document.getElementById("lastModified").textContent = "Last Modified: " + document.lastModified;
document.getElementById("currentYear").textContent = currentYear;

navButton.addEventListener('click', () => {
    navButton.classList.toggle('show');
    navBar.classList.toggle('show');
})




// function createCard() {
//     // async function getCompany() {
//         // const data = await fetch('data/members.json');
//         // const companies = await data.json();
//         // // console.log(companies);
//         // return companies;
//         // }
//     const companies = fetch('data/members.json').then(response => response.json())
//         .then(values => values.forEach(value => console.log(value.name)))
//         .catch(error => console.log(error));
//     companies.forEach(company => {
//         const section = document.querySelector("card-layout")
//         const name = document.createElement("h2");
//         const tagLine = document.createElement("p");
//         const div = document.createElement("div");
//         const img = document.createElement("img");
//         const email = document.createElement("p");
//         const phone = document.createElement("p");
//         const url = document.createElement("p");
//         const span = document.createElement("span");
//         section.appendChild(name);
//         section.appendChild(tagLine);
//         section.appendChild(div);
//         div.appendChild(img);
//         div.appendChild(email);
//         div.appendChild(phone);
//         div.appendChild(url);
//         url.appendChild(span);
//     });
// };

// createCard();