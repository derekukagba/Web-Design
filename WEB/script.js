

// Function to populate the gallery
function populateGallery() {
    const galleryContainer = document.querySelector('.gallery');

    galleryImages.forEach(image => {
        const imgElement = document.createElement('img');
        imgElement.src = image;
        galleryContainer.appendChild(imgElement);
    });
}

// Form validation
function validateForm(event) {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    if (name === '' || email === '' || subject === '' || message === '') {
        alert('All fields must be filled out');
        event.preventDefault();
    }
}

const animals = ['lion', 'elephant', 'giraffe', 'zebra', 'monkey'];
const randomAnimal = animals[Math.floor(Math.random() * animals.length)];
let attempts = 3;

function checkGuess() {
    const guessInput = document.getElementById('guessInput');
    const resultMessage = document.getElementById('resultMessage');

    const userGuess = guessInput.value.toLowerCase();

    if (userGuess === randomAnimal) {
        resultMessage.textContent = 'Congratulations! You guessed the correct animal!';
        resultMessage.style.color = '#4caf50';
        disableGuessing();
    } else {
        attempts--;

        if (attempts > 0) {
            resultMessage.textContent = `Incorrect guess. ${attempts} attempts remaining. Try again!`;
            resultMessage.style.color = '#ff0000';
        } else {
            resultMessage.textContent = `Sorry, you're out of attempts. The correct animal was ${randomAnimal}.`;
            resultMessage.style.color = '#ff0000';
            disableGuessing();
        }
    }
}

function disableGuessing() {
    const guessInput = document.getElementById('guessInput');
    const submitButton = document.querySelector('#game button');
    guessInput.disabled = true;
    submitButton.disabled = true;
}

document.addEventListener('DOMContentLoaded', function () {
    populateGallery();
});
function validateForm(event) {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    const formErrors = document.getElementById('formErrors');

    formErrors.innerHTML = '';

    // Simple validation for demonstration purposes
    if (name === '' || email === '' || subject === '' || message === '') {
        displayErrorMessage('All fields must be filled out');
        event.preventDefault();
    }

}

function displayErrorMessage(message) {
    const formErrors = document.getElementById('formErrors');
    const errorMessage = document.createElement('p');
    errorMessage.textContent = message;
    formErrors.appendChild(errorMessage);
}
function shuffleGallery() {
    const galleryContainer = document.querySelector('.gallery');
    const galleryImages = Array.from(galleryContainer.children);

    for (let i = galleryImages.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [galleryImages[i], galleryImages[j]] = [galleryImages[j], galleryImages[i]];
    }

    galleryContainer.innerHTML = '';
    galleryImages.forEach(image => {
        galleryContainer.appendChild(image);
    });
}

document.addEventListener('scroll', function () {
    const sections = document.querySelectorAll('section');
    let currentSectionId = '';

    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 50 && rect.bottom >= 50) {
            currentSectionId = section.id;
        }
    });

    const navLinks = document.querySelectorAll('#footerNav a');
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + currentSectionId) {
            link.classList.add('active');
        }
    });
});

function playGame() {
    const userGuess = prompt('Guess a number between 1 and 10:');
    const randomNumber = Math.floor(Math.random() * 10) + 1;

    const resultElement = document.getElementById('gameResult');

    if (userGuess && parseInt(userGuess) === randomNumber) {
        resultElement.textContent = 'Congratulations! You guessed the correct number!';
    } else {
        resultElement.textContent = `Sorry, the correct number was ${randomNumber}. Try again!`;
    }
}

function displayWebsiteReport() {
    const reportSection = document.getElementById('report');
    const reportList = reportSection.querySelector('ul');

    const optimizationStatus = 'Images are optimized';
    const validationStatus = 'HTML is valid';
    const pageSpeedStatus = 'PageSpeed has been analyzed';

    const reportItems = [optimizationStatus, validationStatus, pageSpeedStatus];

    reportItems.forEach(item => {
        const listItem = document.createElement('li');
        listItem.innerHTML = item;
        reportList.appendChild(listItem);
    });
}

document.addEventListener('DOMContentLoaded', function () {
    displayWebsiteReport();
});

function populateGallery() {
    const galleryContainer = document.querySelector('.gallery-container');
    


    galleryImages.forEach(image => {
        const imgElement = document.createElement('img');
        imgElement.src = image;
        imgElement.alt = 'Gallery Image';
        galleryContainer.appendChild(imgElement);
    });
}

function validateForm(event) {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    const formErrors = document.getElementById('formErrors');

    formErrors.innerHTML = '';

    if (name.trim() === '' || email.trim() === '' || subject.trim() === '' || message.trim() === '') {
        displayErrorMessage('All fields must be filled out');
        event.preventDefault();
    }

    const emailRegex = /^\S+@\S+\.\S+$/;
    if (!emailRegex.test(email)) {
        displayErrorMessage('Enter a valid email address');
        event.preventDefault();
    }
}

function displayErrorMessage(message) {
    const formErrors = document.getElementById('formErrors');
    const errorMessage = document.createElement('p');
    errorMessage.textContent = message;
    formErrors.appendChild(errorMessage);
}

// Run functions on page load
document.addEventListener('DOMContentLoaded', function () {
    populateGallery();
    displayWebsiteReport(); 
});