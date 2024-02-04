const form = document.getElementById('form');
const email = document.getElementById('email');
const messagesContainer = document.getElementById('messagesContainer');
const mainContainer = document.querySelector('.flex_container ');
const secondScreen = document.querySelector('.second_screen');
const dismissBtn = document.getElementById('dismissBtn');

const msg = 'Valid email required';

function createErrorMessage(message) {
    const errorMessage = document.createElement('p');
    errorMessage.classList.add('error_p');
    errorMessage.textContent = message
    return errorMessage;
}

function clearMessage() {
    const existingErrorMessages = document.querySelectorAll('.error_p');
    existingErrorMessages.forEach(message => message.remove());
    return existingErrorMessages;
}

function showErrorMessage() {
    const errorMessage = createErrorMessage(msg);
    messagesContainer.appendChild(errorMessage);
    email.style.border = '1px solid #FF6155';
    email.style.background = 'rgba(255, 97, 85, 0.15)';
    email.style.color = '#FF6155';
}

function resetStyles() {
    email.style.border = '';
    email.style.background = '';
    email.style.color = '';
}


form.addEventListener('submit', (e) => {
    e.preventDefault();
    clearMessage();

    if (email.value === '' || !isValidEmail(email.value)) {
        showErrorMessage();
    } else {
        secondScreen.classList.remove("hidden");
        mainContainer.style.display = 'none';
        resetStyles();
    }
    email.blur();
})

dismissBtn.addEventListener('click', (e) => {
    e.preventDefault();
    secondScreen.classList.add("hidden");
    mainContainer.style.display = 'flex';
    email.value = '';
})

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    return emailRegex.test(email);
}