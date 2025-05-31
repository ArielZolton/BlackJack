//Simple Promise
const simplePromise = new Promise((resolve, reject) => {
    const isSuccess = Math.random() > 0.5; // Random success or failure
    setTimeout(() => {
        if (isSuccess) {
            resolve('Success! The promise resolved.');
        } else {
            reject('Failure! The promise was rejected.');
        }
    }, 1000); // Simulate async operation with a timeout
});



simplePromise
    .then((message) => console.log('Then:', message))
    .catch((error) => console.error('Catch:', error))
    .finally(() => console.log('Finally: Promise is complete.'));

//Chaining Promises
const chainExample = new Promise((resolve) => {
    setTimeout(() => resolve(10), 1000); // Resolves to the number 10
});

chainExample
    .then((result) => {
        console.log('First then:', result); // Output: 10
        return result * 2; // Passes 20 to the next then
    })
    .then((result) => {
        console.log('Second then:', result); // Output: 20
        return result + 5; // Passes 25 to the next then
    })
    .then((result) => console.log('Third then:', result)) // Output: 25
    .finally(() => console.log('Chaining is complete.'));

// Handling Errors
const errorExample = new Promise((resolve, reject) => {
    setTimeout(() => reject('Something went wrong!'), 1000); // Force reject
});

errorExample
    .then((message) => console.log('This will not execute:', message))
    .catch((error) => console.error('Caught error:', error)) // Output the error
    .finally(() => console.log('Error handling is complete.'));




// Fetch Pokémon API Data
const fetchPokemonBtn = document.getElementById('fetchPokemon');
const pokemonContainer = document.getElementById('pokemonContainer');

fetchPokemonBtn.addEventListener('click', () => {
    // Clear previous content
    pokemonContainer.innerHTML = '';

    // Generate a random Pokémon ID (1 to 1010 as an example range)
    const randomId = Math.floor(Math.random() * 1010) + 1;

    // Fetch data for the random Pokémon
    fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}`)
        .then((response) => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then((pokemonDetails) => {
            // console.log(pokemonDetails)
            // Create elements for Pokémon data
            const pokemonCard = document.createElement('div');
            pokemonCard.className = 'pokemon-card';

            const pokemonImage = document.createElement('img');
            pokemonImage.src = pokemonDetails.sprites.front_default;
            pokemonImage.alt = `${pokemonDetails.name} image`;

            const pokemonName = document.createElement('h3');
            pokemonName.textContent = pokemonDetails.name;

            const pokemonType = document.createElement('p');
            pokemonType.textContent = `Type: ${pokemonDetails.types.map(type => type.type.name).join(', ')}`;

            // Append details to the card
            pokemonCard.append(pokemonImage, pokemonName, pokemonType);

            // Append card to the container
            pokemonContainer.appendChild(pokemonCard);
        })
        .catch((error) => {
            console.error('Error fetching Pokémon:', error);
            pokemonContainer.textContent = 'Failed to fetch Pokémon. Please try again.';
        });
});


