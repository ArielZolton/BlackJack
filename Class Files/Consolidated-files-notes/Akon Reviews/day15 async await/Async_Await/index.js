// ===============================
// ✅ Simple Async/Await Example
// ===============================
async function getSimplePokemon() {
    const res = await fetch('https://pokeapi.co/api/v2/pokemon/1');
    const data = await res.json();
    console.log('Simple Async/Await:', data.name); // bulbasaur
}

// getSimplePokemon();


// ===============================
// ❌ Cannot Use Await Outside Async (Unless in Module)
// ===============================
// const res = await fetch('https://pokeapi.co/api/v2/pokemon/1'); // ❌ SyntaxError


// ===============================
// ✅ Using Try/Catch for Error Handling
// ===============================
async function getWithErrorHandling() {
    try {
        const res = await fetch('https://pokeapi.co/api/v2/pokemon/0');
        const data = await res.json();
        console.log(data);
    } catch (error) {
        console.error('Caught with try/catch:', error);
    }
}
// getWithErrorHandling();


// ===============================
// ✅ Refactor: Fetch Pokémon and Manipulate DOM (Async/Await)
// ===============================
const fetchPokemonAsyncBtn = document.getElementById('fetchPokemonAsync');
const pokemonContainerAsync = document.getElementById('pokemonContainerAsync');

fetchPokemonAsyncBtn?.addEventListener('click', async () => {
    pokemonContainerAsync.innerHTML = '';

    const randomId = Math.floor(Math.random() * 1010) + 1;
    const url = `https://pokeapi.co/api/v2/pokemon/${randomId}`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const pokemonDetails = await response.json();
        // console.log(pokemonDetails)
        const pokemonCard = document.createElement('div');
        pokemonCard.className = 'pokemon-card';

        const pokemonImage = document.createElement('img');
        pokemonImage.src = pokemonDetails.sprites.front_default;
        pokemonImage.alt = `${pokemonDetails.name} image`;

        const pokemonName = document.createElement('h3');
        pokemonName.textContent = pokemonDetails.name;

        const pokemonType = document.createElement('p');
        pokemonType.textContent = `Type: ${pokemonDetails.types.map(t => t.type.name).join(', ')}`;

        pokemonCard.append(pokemonImage, pokemonName, pokemonType);
        pokemonContainerAsync.appendChild(pokemonCard);

    } catch (error) {
        console.error('Error fetching Pokémon:', error);
        pokemonContainerAsync.textContent = 'Failed to fetch Pokémon. Please try again.';
    }
});


// ===============================
// ⚖️ Side-by-Side Comparison
// ===============================
const url = 'https://pokeapi.co/api/v2/pokemon/25';

// Promise Version
function fetchWithThen() {
    fetch(url)
        .then(res => res.json())
        .then(data => console.log('Promise .then:', data.name))
        .catch(err => console.error(err));
}
// fetchWithThen();

// Async/Await Version
async function fetchWithAsyncAwait() {
    try {
        const res = await fetch(url);
        const data = await res.json();
        console.log('Async/Await:', data.name);
    } catch (err) {
        console.error(err);
    }
}

// fetchWithAsyncAwait();

// ===============================
//  Multiple Uses
// ===============================

async function loadTwoPokemon() {
    const res1 = await fetch('https://pokeapi.co/api/v2/pokemon/1');
    const bulbasaur = await res1.json();
    console.log('First Pokémon:', bulbasaur.name);

    const res2 = await fetch('https://pokeapi.co/api/v2/pokemon/4');
    const charmander = await res2.json();
    console.log('Second Pokémon:', charmander.name);
   
}
// loadTwoPokemon();

function loadTwoPokemonThen() {
    fetch('https://pokeapi.co/api/v2/pokemon/1')
        .then(res1 => res1.json())
        .then(bulbasaur => {
            console.log('First Pokémon:', bulbasaur.name);
            return fetch('https://pokeapi.co/api/v2/pokemon/4');
        })
        .then(res2 => res2.json())
        .then(charmander => {
            console.log('Second Pokémon:', charmander.name);
            
        })
        .catch(error => {
            console.error('Error loading Pokémon:', error);
        });
}
// loadTwoPokemonThen();

// function loadTwoPokemonThen() {
//     fetch('https://pokeapi.co/api/v2/pokemon/1')
//         .then(res1 => res1.json())
//         .then(bulbasaur => {
//             return fetch('https://pokeapi.co/api/v2/pokemon/4')
//                 .then(res2 => res2.json())
//                 .then(charmander => {
//                     return { bulbasaur, charmander }; // pass both forward
//                 });
//         })
//         .then(({ bulbasaur, charmander }) => {
//             logBothPokemon(bulbasaur, charmander);
//         })
//         .catch(error => {
//             console.error('Error loading Pokémon:', error);
//         });
// }



// ===============================
//  Other Uses
// ===============================
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function runWithDelay() {
    console.log('Start delay...');
    await delay(2000); // wait 2 seconds
    console.log('2 seconds later!');
}
// runWithDelay();






function waitForClick(buttonId) {
    return new Promise(resolve => {
        document.getElementById(buttonId).addEventListener('click', resolve, { once: true });
    });
}

async function stepByStepTutorial() {
    const display = document.getElementById('stepTutorialDisplay');
    display.textContent = 'Step 1: Click the button to begin...';
    await waitForClick('stepTutorialBtn');

    display.textContent = 'Step 2: Great! Click again to continue...';
    await waitForClick('stepTutorialBtn');

    display.textContent = 'Step 3: One more click to finish!';
    await waitForClick('stepTutorialBtn');

    display.textContent = '✅ Tutorial complete! Great job!';
}

// stepByStepTutorial(); 


// const steps = [
//     'Step 1: Click the button to begin...',
//     'Step 2: Great! Click again to continue...',
//     'Step 3: One more click to finish!',
//     '✅ Tutorial complete! Great job!',
// ];

// let currentStep = 0;

// document.getElementById('stepTutorialBtn').addEventListener('click', () => {
//     const display = document.getElementById('stepTutorialDisplay');
//     display.textContent = steps[currentStep];

//     if (currentStep < steps.length - 1) {
//         currentStep++;
//     }
// });






