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
var jokeDiv = document.getElementById('joke');
var currentJoke = '';
var currentScore = false;
var currentObjectJoke;
const reportAcudits = [];
function importNewJoke() {
    return __awaiter(this, void 0, void 0, function* () {
        const url = 'https://icanhazdadjoke.com/';
        const options = {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
            }
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
function saveScoredJoke(scoreJoke) {
    const currentDate = new Date();
    const isoDate = currentDate.toISOString();
    currentScore = parseInt(scoreJoke);
    currentObjectJoke = {
        joke: currentJoke,
        score: currentScore,
        date: isoDate
    };
}
function nextJoke() {
    if (currentScore == false) {
        const currentDate = new Date();
        const isoDate = currentDate.toISOString();
        currentObjectJoke = {
            joke: currentJoke,
            score: currentScore,
            date: isoDate
        };
    }
    reportAcudits.push(currentObjectJoke);
    console.log(reportAcudits);
    importNewJoke();
}
function printJoke(currentJoke) {
    jokeDiv.innerHTML = `${currentJoke}`;
    //console.log(reportAcudits);
}
importNewJoke();
