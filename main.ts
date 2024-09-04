let jokeDiv = document.getElementById('joke') as HTMLElement;
const searchJoke = document.getElementById("search");

const arrayJokes: { 
    id: string;
    joke: string;
    status: number;
}[] = [];

async function importJoke() {
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
        console.log(result);
        arrayJokes.push(result);
    } catch (error) {
        console.error(error);
    }
    printJoke();
}

function printJoke() {
    const currentJoke = arrayJokes[arrayJokes.length -1];
    jokeDiv.innerHTML =`${currentJoke.joke}`;
    console.log(arrayJokes);
}

function nextJoke() {
    importJoke();
}
importJoke();
