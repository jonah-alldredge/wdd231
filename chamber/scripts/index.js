const lastModified = new Date();
const currentYear = new Date().getFullYear();
const navButton = document.querySelector("#ham-btn");
const navBar = document.querySelector("#nav-bar");
const gridButton = document.querySelector("#grid-btn");
const listButton = document.querySelector("#list-btn");
const cardLayout = document.querySelector("#card-layout");

document.getElementById("lastModified").textContent = "Last Modified: " + document.lastModified;
document.getElementById("currentYear").textContent = currentYear;

navButton.addEventListener('click', () => {
    navButton.classList.toggle('show');
    navBar.classList.toggle('show');
})

gridButton.addEventListener('click', () => {
    cardLayout.classList.add('grid');
    cardLayout.classList.remove('list');
})

listButton.addEventListener('click', () => {
    cardLayout.classList.add('list');
    cardLayout.classList.remove('grid');    
})


async function getCompany() {
    const data = await fetch('data/members.json');
    const companies = await data.json();
    console.log(companies);
    return companies;
    }
// const companies = fetch('data/members.json').then(response => response.json())
//     .then(values => values.forEach(value => console.log(value.name)))

//     .then().catch(error => console.log(error));

async function createCard() {
    const companies = await getCompany();
    companies.forEach(company => {
        const card = document.querySelector("#card-layout");
        const section = document.createElement("section");
        const name = document.createElement("h3");
        const tagLine = document.createElement("p");
        const div = document.createElement("div");
        const img = document.createElement("img");
        const email = document.createElement("p");
        const phone = document.createElement("p");
        const url = document.createElement("p");
        card.appendChild(section);
        section.appendChild(name);
        section.appendChild(tagLine);
        section.appendChild(div);
        div.appendChild(img);
        img.setAttribute("loading", "lazy");
        img.setAttribute("src", "images/business.jpg");
        img.setAttribute("alt", "Company Picture");
        div.appendChild(email);
        div.appendChild(phone);
        div.appendChild(url);
        name.textContent = company.name;
        tagLine.textContent = company.tagLine;
        email.innerHTML = `<strong>EMAIL:</strong> ${company.email}`;
        phone.innerHTML = `<strong>PHONE:</strong> ${company.phone}`;
        url.innerHTML = `<strong>URL:</strong> ${company.url}`;
    })
};


createCard();