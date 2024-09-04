
var jokeDiv = document.getElementById('joke') as HTMLElement;

var currentJoke: string = '';
var currentScore: (number | boolean) = false;
var currentObjectJoke: {
    joke: string;
    score: number | boolean;
    date: string;
}

const reportAcudits: {
    joke: string;
    score: number | boolean;
    date: string;
}[] = [];



async function importNewJoke() {
    const url = 'https://icanhazdadjoke.com/';
    const options = {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
        }
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
        date: isoDate
    }
}

function nextJoke() {
    if (currentScore == false) {
        const currentDate = new Date();
        const isoDate = currentDate.toISOString();
        currentObjectJoke = {
            joke: currentJoke,
            score: currentScore,
            date: isoDate
        }
    }
    reportAcudits.push(currentObjectJoke);
    console.log(reportAcudits);
    importNewJoke()

}


function printJoke(currentJoke: string) {
    jokeDiv.innerHTML = `${currentJoke}`;
    //console.log(reportAcudits);
}

importNewJoke();
