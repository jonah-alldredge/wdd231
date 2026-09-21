const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector("figcaption");

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=40.25944752687567&lon=-111.67285201081629&appid=dda56ed3dade7f6fadc0e4fea812465a&units=imperial';

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data); //testing only
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

function displayResults(data) {
    const temp = data.main.temp;
    currentTemp.textContent = `${temp}\u00B0F`;
}

apiFetch();