// Select elements
const openBar = document.getElementById('ber-open');
const closeBar = document.getElementById('bar-close');
const navContainer = document.getElementById('mobile-nav');
const newsletterInput = document.getElementById('newsletter-input');
const newsletterBtn = document.getElementById('newsletter-btn');
const successMessage = document.getElementById('success-message');
const errorMessage = document.getElementById('error-message');

// Open nav bar
openBar.addEventListener('click', () => {
    navContainer.style.transform = 'translateX(0%)';
    document.body.style.overflowY = 'hidden';
});

// Close nav bar
closeBar.addEventListener('click', () => {
    navContainer.style.transform = 'translateX(-100%)';
    document.body.style.overflowY = 'scroll';
});

const emailValidation = new RegExp('[a-z0-9]+@[a-z]+.[a-z]{2,3}');

newsletterBtn.addEventListener('click', () => {
    if (emailValidation.test(newsletterInput.value)) {
        errorMessage.style.display = 'none';
        successMessage.style.display = 'block';
    } else {
        successMessage.style.display = 'none';
        errorMessage.style.display = 'block';
    }
});
