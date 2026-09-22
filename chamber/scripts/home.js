const lastModified = new Date();
const currentYear = new Date().getFullYear();
const navButton = document.querySelector("#ham-btn");
const navBar = document.querySelector("#nav-bar");
const weather = document.querySelector("#current-temp");
const numbers = new Set();

const url = 'https://api.openweathermap.org/data/2.5/forecast?lat=40.25944752687567&lon=-111.67285201081629&appid=dda56ed3dade7f6fadc0e4fea812465a&units=imperial';
const iconUrl = 'https://openweathermap.org/payload/api/media/file/';


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
    while (numbers.size < 2) {
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
        const membership = document.createElement("p");
        card.appendChild(section);
        section.appendChild(name);
        section.appendChild(tagLine);
        section.appendChild(div);
        div.appendChild(email);
        div.appendChild(phone);
        div.appendChild(url);
        div.appendChild(membership);
        name.textContent = data[number].name;
        tagLine.textContent = data[number].tagLine;
        email.innerHTML = `<strong>EMAIL:</strong> ${data[number].email}`;
        phone.innerHTML = `<strong>PHONE:</strong> ${data[number].phone}`;
        url.innerHTML = `<strong>URL:</strong> ${data[number].url}`;
        membership.innerHTML = `Membership Level: <strong>${data[number].membership}</strong>`;

    });
}


async function getTemp() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            // console.log(data.list);
            displayTemperature(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
};

//numbers on weather that start the day out 0,8,16

function displayTemperature(data) {
    const div = document.querySelector("#current-weather");
    const p = document.createElement("p");
    const img = document.createElement("img");
    const temperature = data.list[0].main.temp;
    const description = data.list[0].weather[0].description;
    const icon = `${iconUrl}${data.list[0].weather[0].icon}.png`;
    img.setAttribute("src", `${icon}`);
    img.setAttribute("alt", "picture of forecast");
    div.appendChild(p);
    div.appendChild(img);
    weather.textContent = `${temperature}\u00B0F`;
    p.textContent = `Current Forecast: ${description}`;
    futureForecast(data);
};

function futureForecast(data) {
    const days = [4, 12, 20];
    days.forEach(day => {
        const parentDiv = document.querySelector("#future-forecast");
        const div = document.createElement("div");
        const p = document.createElement("p");
        const p2 = document.createElement("p");
        const img = document.createElement("img");
        const icon = `${iconUrl}${data.list[day].weather[0].icon}.png`;
        const temp = data.list[day].main.temp;
        const dateText = data.list[day].dt_txt;
        const dateFull = new Date(dateText.replace(' ', 'T'));
        const date = dateFull.toLocaleDateString('en-US', {
            weekday: 'short',
            month: 'short',
            day: 'numeric'
        });
        // console.log(date);
        img.setAttribute("src", `${icon}`);
        img.setAttribute("alt", "picture of forecast");
        parentDiv.appendChild(div);
        div.appendChild(p2);
        div.appendChild(img);
        div.appendChild(p);
        p2.textContent = `${date}`;
        p.textContent = `${temp}\u00B0F`;
    });
}



getTemp();
createCompany();

