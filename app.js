const form = document.getElementById('form');
const email = document.getElementById('email');
const errorContainer = document.getElementById('errorContainer');

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

form.addEventListener('submit', (e) => {
    e.preventDefault();
    clearMessage();

    if (email.value === '') {
        const errorMessage = createErrorMessage(msg);
        errorContainer.appendChild(errorMessage);
        email.style.border = '1px solid #FF6155';
        email.style.background = 'rgba(255, 97, 85, 0.15)';
    } else if (!isValidEmail(email.value)) {
        const errorMessage = createErrorMessage(msg);
        errorContainer.appendChild(errorMessage);
        email.style.color = '#FF6155';
        email.style.border = '1px solid #FF6155';
        email.style.background = 'rgba(255, 97, 85, 0.15)';
    } else {
        email.style.border = '';
        email.style.background = '';
        email.style.color = '';
    }
    email.blur();
})

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    return emailRegex.test(email);
}