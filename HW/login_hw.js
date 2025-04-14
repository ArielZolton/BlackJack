/**Create a Sign up
Capture and in a separate console.log log each textField's label and value, separated by ": ", e.g.:

Full Name: Mary Potter
Username: HarryPoppins

For the checkboxes, console.log the two statements that are true from the following four:

    "The user has checked the legal checkbox"
    "The user has checked the terms checkbox"
    "The user has not checked the legal checkbox"
    "The user has not checked the terms checkbox"

If the following are true, console.log "The user is eligible"
    the passwords are both the same ( use the === strict comparison operator)
    the user is 13 or older(COPPA)
    the user has checked both checkboxes
    none of the other fields are blank
if any of the above are not true, log that "The user is ineligible"
*/

const nameInput = document.querySelector('#name');
const userInput = document.querySelector('#username');
const emailInput = document.querySelector('#email');
const emailError = document.querySelector('#emailError');
const passwordInput = document.querySelector('#password');
const confirmPasswordInput = document.querySelector('#confirmPassword');
const togglePassword = document.querySelector('#togglePassword');

console.log(nameInput);
console.log(userInput);
console.log(emailInput);
console.log(emailError);
console.log(passwordInput);
console.log(confirmPasswordInput);
console.log(togglePassword);

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

emailInput.addEventListener('focusout', (e) => {
    console.log(emailInput.value);
    if (!emailRegex.test(emailInput.value)) {
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

    // const emailValue = emailInput.value;
    // const passwordValue = passwordInput.value;

    // console.log(emailValue);
    // console.log(passwordValue);

    const name = document.getElementById("name").value;
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const age = document.getElementById("age").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const legalChecked = document.getElementById("legal").checked;
    const termsChecked = document.getElementById("terms").checked;

    if (legalChecked) {
        console.log("The user has checked the legal checkbox.");
    } else {
        console.log("The user has not checked the legal checkbox.");
    }

    if (termsChecked) {
        console.log("The user has checked the terms checkbox.");
    } else {
        console.log("The user has not checked the terms checkbox.");
    }
    
    const passwordMatch = (confirmPassword === password);
    const fieldsFilled = name != "" && username != "" && email != "" && age != "" && password != "" && confirmPassword != "";

    const eligible =
        passwordMatch &&
        age >= 13 &&
        legalChecked &&
        termsChecked &&
        fieldsFilled;

    if (eligible) {
        console.log("The user is eligible");
    } else {
        console.log("The user is ineligible");
    }
})