// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Creating Elements Section
    const createElementBtn = document.getElementById('createElement');
    const createElementContainer = document.getElementById('createElementContainer');

    createElementBtn.addEventListener('click', () => {
        const card = document.createElement('div');
        card.className = 'card';
    
        const image = document.createElement('img');
        image.src = 'https://picsum.photos/200';
        image.alt = 'Placeholder Image';
    
        const title = document.createElement('h3');
        title.textContent = 'Card Title';
    
        const description = document.createElement('p');
        description.textContent = 'This is a sample card description.';
    
        card.append(image, title, description);
        createElementContainer.appendChild(card);
    });

    // Appending Elements Section
    const appendChildBtn = document.getElementById('appendChildElement');
    const appendBtn = document.getElementById('appendElement');
    const appendElementContainer = document.getElementById('appendElementContainer');
    const appendElementSection = document.getElementById("appendElementSection")

    appendChildBtn.addEventListener('click', () => {
        const newElement = document.createElement('div');
        newElement.className = 'box';
        newElement.textContent = 'Appended with append';
        appendElementContainer.appendChild(newElement);
        // appendElementContainer.appendChild("asdf");


    });


    appendBtn.addEventListener('click', () => {
        const newElement = document.createElement('div');
        newElement.className = 'box';
        newElement.textContent = 'Appended with append';
        appendElementContainer.append(newElement);
        appendElementContainer.append("WOW");

    });

    let index = 1; // Start with 1

    // Add Above
    const addAboveBtn = document.createElement('button');
    addAboveBtn.textContent = 'Add Above';
    addAboveBtn.addEventListener('click', () => {
        const newElement = document.createElement('div');
        newElement.className = 'box';
        newElement.textContent = `Element ${index} (Added Above)`;
    
        // Add element to the top
        appendElementContainer.insertBefore(newElement, appendElementContainer.firstChild);
    
        index++; // Increment the index
    });
    appendElementSection.appendChild(addAboveBtn);
    
    // Add Below
    const addBelowBtn = document.createElement('button');
    addBelowBtn.textContent = 'Add Below';
    addBelowBtn.addEventListener('click', () => {
        const newElement = document.createElement('div');
        newElement.className = 'box';
        newElement.textContent = `Element ${index} (Added Below)`;
    
        // Add element to the bottom
        appendElementContainer.appendChild(newElement);
    
        index++; // Increment the index
    });
    appendElementSection.appendChild(addBelowBtn);

    // ClassList Methods Section
    const toggleClassListBtn = document.getElementById('toggleClassList');
    const classListContainer = document.getElementById('classListContainer');

    toggleClassListBtn.addEventListener('click', () => {
        classListContainer.classList.toggle('highlight');
    });
    
    const addClassBtn = document.createElement('button');
    addClassBtn.textContent = 'Add Highlight';
    addClassBtn.addEventListener('click', () => {
        classListContainer.classList.add('highlight');
    });
    classListSection.appendChild(addClassBtn);
    
    const removeClassBtn = document.createElement('button');
    removeClassBtn.textContent = 'Remove Highlight';
    removeClassBtn.addEventListener('click', () => {
        classListContainer.classList.remove('highlight');
    });
    classListSection.appendChild(removeClassBtn);
    

    // Text Content vs. HTML Content Section
    const demoContent = document.createElement('div');
    demoContent.innerHTML = '<p>This is <strong>HTML</strong> content.</p>';
    textContentContainer.appendChild(demoContent);
    // demoContent.textContent ="Wahoo"

    const element = document.getElementById('visibleExample');
    console.log('textContent:', element.textContent); 
    console.log('innerText:', element.innerText); 

    console.log('innerText:', demoContent.innerText); // Visible text only
    console.log('textContent:', demoContent.textContent); // Full textual content
    console.log('innerHTML:', demoContent.innerHTML); // Full HTML



}); 



const saveToLocalStorageBtn = document.getElementById('saveToLocalStorage');
const clearLocalStorageBtn = document.getElementById('clearLocalStorage');
const localStorageForm = document.getElementById('localStorageForm');
const localStorageDisplay = document.getElementById('localStorageDisplay');

let savedData = JSON.parse(localStorage.getItem('formData')) || [];

// Function to render the data display
function renderData() {
    localStorageDisplay.innerHTML = '';

    savedData.forEach((item, index) => {
        const itemDiv = document.createElement('div');
        itemDiv.textContent = `Name: ${item.name}, Age: ${item.age}`;

        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.addEventListener('click', () => {
            // Remove the item from the array
            savedData.splice(index, 1);
            console.log(savedData)

            // Update LocalStorage and re-render the display
            localStorage.setItem('formData', JSON.stringify(savedData));
            renderData();
        });

        itemDiv.appendChild(removeBtn);
        localStorageDisplay.appendChild(itemDiv);
    });

    if (savedData.length === 0) {
        localStorageDisplay.textContent = 'No data saved.';
    }
}

// Save data to LocalStorage
saveToLocalStorageBtn.addEventListener('click', () => {
    const formData = {
        name: localStorageForm.nameInput.value.trim(),
        age: localStorageForm.ageInput.value.trim()
    };

    // Validate form data
    if (!formData.name || !formData.age) {
        alert('Both name and age are required!');
        return;
    }

    // Add the form data to the array and update LocalStorage
    savedData.push(formData);
    localStorage.setItem('formData', JSON.stringify(savedData));

    // Re-render the display
    renderData();

    // Clear the form inputs
    localStorageForm.nameInput.value = '';
    localStorageForm.ageInput.value = '';
});

// Clear all LocalStorage data
clearLocalStorageBtn.addEventListener('click', () => {
    localStorage.clear();
    savedData = []; // Clear the array
    renderData(); // Update the display
});

// Render the initial state on page load
// document.addEventListener('DOMContentLoaded', () => {
    renderData();
// });