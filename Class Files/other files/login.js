// const loginForm = document.getElementById('loginForm');
// console.log(loginForm);

// const emailInput = document.getElementById('email');
// const emailError = document.getElementById('emailError');
// const passwordInput = document.getElementById('password');
// const togglePassword = document.getElementById('togglePassword');

const emailInput = document.querySelector('#email');
const emailError = document.querySelector('#emailError');
const passwordInput = document.querySelector('#password');
const togglePassword = document.querySelector('#togglePassword');

console.log(emailInput);
console.log(emailError);
console.log(passwordInput);
console.log(togglePassword);

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


emailInput.addEventListener('focusout', (e) => {
    // something@something.something
    // e.preventDefault();
    console.log(emailInput.value);
    if (emailInput.value === '') {
        emailError.classList.add('hidden');
    } else if (!emailRegex.test(emailInput.value)) {
        emailError.classList.remove('hidden');
    } else {
        emailError.classList.add('hidden');
    }
})

togglePassword.addEventListener('click', () => {
    
    const type = passwordInput.getAttribute('type');
    console.log(type);
    const newType = type === 'password' ? 'text' : 'password';
    console.log(newType);
    passwordInput.setAttribute('type', newType);

})


const loginForm = document.querySelector('#loginForm');

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(e);

    const emailValue = emailInput.value;
    const passwordValue = passwordInput.value;

    console.log(emailValue);
    console.log(passwordValue);
    
    
})