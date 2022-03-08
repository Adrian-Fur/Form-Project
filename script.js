const form = document.getElementById('form');
const password1 = document.getElementById('password1');
const password2 = document.getElementById('password2');
const messageContainer = document.querySelector('.message-container');
const message = document.getElementById('message');

let isValid = false;
let passwordMatch = false;

function validateForm() {
    isValid = form.checkValidity();
    if (!isValid) {
        message.textContent ='Please fill out all fields';
        message.style.color = 'red';
        messageContainer.style.borderColor = 'red';
        return;
    }
    if(password1.value === password2.value) {
        passwordMatch = true;
        password1.style.borderColor = 'green';
        password2.style.borderColor = 'green';
    } else {
        passwordMatch = false;
        message.textContent = 'Make sure passwords match.';
        message.style.color = 'red';
        messageContainer.style.borderColor = 'red';
        password1.style.borderColor = 'red';
        password2.style.borderColor = 'red';
        return;
    }
    if (isValid && passwordMatch) {
        message.textContent = 'Successfully Registered!';
        message.style.color = 'green';
        messageContainer.style.borderColor = 'green';
    }
}

function storeFormData() {
    const user = {
        name: form.name.value,
        phone: form.phone.value,
        email: form.email.value,
        website: form.website.value,
        password: form.password.value
    };
    console.log(user);
}

function processFormData(event) {
    event.preventDefault();
    validateForm();
    if (isValid && passwordMatch) {
        storeFormData();
    };
}

form.addEventListener('submit', processFormData);