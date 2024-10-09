// Select the necessary DOM elements
const jokeBtn = document.getElementById('joke-btn');
const jokeText = document.getElementById('joke');

// Joke API URL
const jokeAPIUrl = 'https://v2.jokeapi.dev/joke/Any';

// Event listener for the joke button
jokeBtn.addEventListener('click', fetchJoke);

// Function to fetch a random joke
async function fetchJoke() {
    try {
        const response = await fetch(jokeAPIUrl);
        if (!response.ok) {
            throw new Error('Failed to fetch a joke');
        }

        const jokeData = await response.json();
        
        // Check if it's a single-part or two-part joke and display accordingly
        if (jokeData.type === 'single') {
            jokeText.textContent = jokeData.joke;
        } else {
            jokeText.textContent = `${jokeData.setup} - ${jokeData.delivery}`;
        }
    } catch (error) {
        jokeText.textContent = 'Oops! Something went wrong. Please try again.';
    }
}
