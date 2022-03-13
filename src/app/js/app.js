// Select elements
const openBar = document.getElementById('ber-open');
const closeBar = document.getElementById('bar-close');
const navContainer = document.getElementById('mobile-nav');

// Open nav bar
openBar.addEventListener('click', () => {
    navContainer.style.transform = 'translateX(0%)';
    document.body.style.overflowY = 'hidden';
})

// Close nav bar
closeBar.addEventListener('click', () => {
    navContainer.style.transform = 'translateX(-100%)';
    document.body.style.overflowY = 'scroll';
})