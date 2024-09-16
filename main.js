"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var jokeDiv = document.getElementById("joke");
var weatherDiv = document.getElementById("weather");
var temperatureDiv = document.getElementById("temperature");
var blobDiv = document.getElementById("blob");
var currentJoke = "";
var currentScore = false;
var currentObjectJoke;
const reportAcudits = [];
function importNewJoke() {
    return __awaiter(this, void 0, void 0, function* () {
        const url = "https://icanhazdadjoke.com/";
        const options = {
            method: "GET",
            headers: {
                Accept: "application/json",
            },
        };
        try {
            const response = yield fetch(url, options);
            const result = yield response.json();
            currentJoke = result.joke;
        }
        catch (error) {
            console.error(error);
        }
        currentScore = false;
        printJoke(currentJoke);
    });
}
function importNewChuckJoke() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch("https://api.chucknorris.io/jokes/random");
            const result = yield response.json();
            currentJoke = result.value;
        }
        catch (error) {
            console.error(error);
        }
        currentScore = false;
        printJoke(currentJoke);
    });
}
function saveScoredJoke(scoreJoke) {
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
    }
    else {
        importNewJoke();
    }
    changeBlob();
}
function printJoke(currentJoke) {
    jokeDiv.innerHTML = `${currentJoke}`;
}
function getWheatherInfo() {
    return __awaiter(this, void 0, void 0, function* () {
        const location = yield getLocation();
        const language = navigator.language;
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${location.lat}&lon=${location.lon}&appid=9f080c853cf361a8faf3db39ba5f538c&lang=${language}`;
        try {
            const response = yield fetch(url);
            const result = yield response.json();
            const temp = (result.main.temp - 273.15).toFixed(1);
            const icon = icones.findIndex(item => item.codi === (result.weather[0].icon));
            if (weatherDiv) {
                weatherDiv.innerHTML = `<img src="${icones[icon].icona}" alt="Current weather icon" width="50">`;
            }
            else {
                console.error('Image error');
            }
            if (temperatureDiv) {
                temperatureDiv.innerHTML = `| &nbsp ${temp} °C`;
            }
        }
        catch (error) {
            console.error(error);
        }
    });
}
getWheatherInfo();
importNewJoke();
