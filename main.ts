var jokeDiv = document.getElementById("joke") as HTMLElement;
var weatherDiv = document.getElementById("weather") as HTMLElement;
var temperatureDiv = document.getElementById("temperature") as HTMLElement;

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

type Simbol = {
    idComarca: number;
    simbol: number;
}

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
    importNewJoke();
}

function printJoke(currentJoke: string) {
    jokeDiv.innerHTML = `${currentJoke}`;
    //console.log(reportAcudits);
}


async function getLocation(): Promise<{ lat: string, lon: string }> {
    return new Promise((resolve, reject) => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const lat = position.coords.latitude.toFixed(6);
                    const lon = position.coords.longitude.toFixed(6);
                    resolve({ lat, lon });
                },
                (error) => {
                    reject(new Error("Error getting geolocation " + error.message));
                }
            );
        } else {
            reject(new Error("Geolocation is not supported in this browser"));
        }
    });
}


async function getComarcaCode(): Promise<string> {
    return new Promise(async (resolve, reject) => {
        try {
            const location = await getLocation();
            const url = `https://api.icgc.cat/territori/comarques/geo/${location.lon}/${location.lat}`;
            try {
                const response = await fetch(url);
                const result = await response.json();
                resolve(result.responses.features[0].properties.CODICOMAR);

            } catch (error) {
                reject(console.error(error));
            }
        } catch (error) {
            reject(console.error(error));
        }
    });
}


async function getWheatherInfo() {

    const url = `https://api.meteo.cat/pronostic/v1/comarcal/${formattedDate}`;
    const options = {
        method: "GET",
        headers: {
            "X-Api-Key": "Yr8iuFFH0o3xKYjrmkYCYaunCVBdp7k5nIuNiITj",
        },
    };
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        const weatherArray: {
            idComarca: number;
            simbol: number;
        }[] = result.mati.cel
        const comarca = await getComarcaCode()
        const estatCel = weatherArray.filter(element => (element.idComarca === parseInt(comarca)));
        const estat = estatDelCel.filter(item => item.codi === estatCel[0].simbol);

        if (weatherDiv) {
            weatherDiv.innerHTML=`<img src="${estat[0].icona}" alt="Current weather icon" width="50">`;
        } else {
            console.error('Image error');
        }
    }
    catch (error) {
        console.error(error);
    }
}


async function getTemperature() {
    const location = await getLocation()
    const language: string = navigator.language;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${location.lat}&lon=${location.lon}&appid=9f080c853cf361a8faf3db39ba5f538c&lang=${language}`;
    try {
        const response = await fetch(url);
        const result = await response.json();
        const temp = (result.main.temp - 273.15).toFixed(1);

        if (temperatureDiv) {
            temperatureDiv.innerHTML = `| ${temp} °C`;
        }
    } catch (error) {
        console.error(error);
    }
}



importNewJoke();

getWheatherInfo();
getTemperature();
