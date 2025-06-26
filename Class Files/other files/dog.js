const dogImage = document.querySelector('#dog-image');

function fetchDogImage() {
    fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => {
        console.log(response);
        return response.json();
    })
    .then(data => {
        console.log(data);
        console.log(data.message);
        dogImage.setAttribute('src', data.message);
    })
    .catch(error => {
        console.error('Error fetching dog image:', error);
    });

}

// fetchDogImage();

// const button = document.querySelector('#fetch-dog-image');
// button.addEventListener('click', fetchDogImage);

async function fetchDogImageAsync() {
    try {
        const response = await fetch('https://dog.ceo/api/breeds/image/random');
        console.log(response);
        
        const data = await response.json();
        console.log(data);
        console.log(data.message);
        dogImage.setAttribute('src', data.message);
    } catch (error) {
        console.log('Error fetching dog image:', error);
    }
}

fetchDogImageAsync();

const button = document.querySelector('#fetch-dog-image');
button.addEventListener('click', fetchDogImageAsync);