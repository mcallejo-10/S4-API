var jokeDiv = document.getElementById("joke") as HTMLElement;
var weatherDiv = document.getElementById("weather") as HTMLElement;
var temperatureDiv = document.getElementById("temperature") as HTMLElement;
var blobDiv = document.getElementById("blob") as HTMLElement;

var currentJoke: string = "";
var currentScore: number | boolean = false;
var currentObjectJoke: {
    joke: string;
    score: number | boolean;
    date: string;
};

const reportAcudits: {
    joke: string;
    score: number | boolean;
    date: string;
}[] = [];

async function importNewJoke() {
    const url = "https://icanhazdadjoke.com/";
    const options = {
        method: "GET",
        headers: {
            Accept: "application/json",
        },
    };
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        currentJoke = result.joke;
    } catch (error) {
        console.error(error);
    }
    currentScore = false;
    printJoke(currentJoke);
}
async function importNewChuckJoke() {
    try {
        const response = await fetch("https://api.chucknorris.io/jokes/random");
        const result = await response.json();
        currentJoke = result.value;
    } catch (error) {
        console.error(error);
    }
    currentScore = false;
    printJoke(currentJoke);
}

function saveScoredJoke(scoreJoke: string) {
    const currentDate = new Date();
    const isoDate = currentDate.toISOString();

    currentScore = parseInt(scoreJoke);
    currentObjectJoke = {
        joke: currentJoke,
        score: currentScore,
        date: isoDate,
    };
}

function nextJoke() {
    if (currentScore == false) {
        const currentDate = new Date();
        const isoDate = currentDate.toISOString();
        currentObjectJoke = {
            joke: currentJoke,
            score: currentScore,
            date: isoDate,
        };
    }
    reportAcudits.push(currentObjectJoke);
    console.log(reportAcudits);
    if (reportAcudits.length % 2 != 0) {
        importNewChuckJoke();
    } else {
        importNewJoke();
    }
    changeBlob()
}

function printJoke(currentJoke: string) {
    jokeDiv.innerHTML = `${currentJoke}`;
}

async function getWheatherInfo() {

    const location = await getLocation()
    const language: string = navigator.language;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${location.lat}&lon=${location.lon}&appid=9f080c853cf361a8faf3db39ba5f538c&lang=${language}`;
    try {
        const response = await fetch(url);
        const result = await response.json();
        const temp = (result.main.temp - 273.15).toFixed(1);
        const icon = icones.findIndex(item => item.codi === (result.weather[0].icon))
        if (weatherDiv) {
            weatherDiv.innerHTML = `<img src="${icones[icon].icona}" alt="Current weather icon" width="50">`;
        } else {
            console.error('Image error');
        }
        if (temperatureDiv) {
            temperatureDiv.innerHTML = `|&nbsp &nbsp ${temp} °C`;
        }
    } catch (error) {
        console.error(error);
    }
}

getWheatherInfo();
importNewJoke();

