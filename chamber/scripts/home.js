const lastModified = new Date();
const currentYear = new Date().getFullYear();
const navButton = document.querySelector("#ham-btn");
const navBar = document.querySelector("#nav-bar");
const weather = document.querySelector("#current-temp");
const numbers = new Set();
const url = 'https://api.openweathermap.org/data/2.5/forecast?lat=40.25944752687567&lon=-111.67285201081629&appid=dda56ed3dade7f6fadc0e4fea812465a&units=imperial';


document.getElementById("lastModified").textContent = "Last Modified: " + document.lastModified;
document.getElementById("currentYear").textContent = currentYear;

navButton.addEventListener('click', () => {
    navButton.classList.toggle('show');
    navBar.classList.toggle('show');
});

async function getCompany() {
    const data = await fetch("data/members.json"); // Gets the data
    const companies = await data.json(); // Converts from json format to javascript
    return companies; // returns object array
}

async function createCompany() {
    const data = await getCompany();
    while (numbers.size < 3) {
        const randomNumber = Math.floor(Math.random() * 9);
        numbers.add(randomNumber);
    }
    // console.log(numbers);
    // console.log(data);
    numbers.forEach(number => {
        const card = document.querySelector("#card-layout");
        const section = document.createElement("section");
        const name = document.createElement("h3");
        const tagLine = document.createElement("p");
        const div = document.createElement("div");
        const email = document.createElement("p");
        const phone = document.createElement("p");
        const url = document.createElement("p");
        card.appendChild(section);
        section.appendChild(name);
        section.appendChild(tagLine);
        section.appendChild(div);
        div.appendChild(email);
        div.appendChild(phone);
        div.appendChild(url);
        name.textContent = data[number].name;
        tagLine.textContent = data[number].tagLine;
        email.innerHTML = `<strong>EMAIL:</strong> ${data[number].email}`;
        phone.innerHTML = `<strong>PHONE:</strong> ${data[number].phone}`;
        url.innerHTML = `<strong>URL:</strong> ${data[number].url}`;
    });
}


async function getTemp() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
};

function displayResults(data) {
    weather.textContent = `${data.main.temp}\u00B0F`;
};

function spotlight() {
    
}



getTemp();
createCompany();


