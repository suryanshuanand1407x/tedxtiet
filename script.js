// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Mobile menu toggle
// const menuBtn = document.querySelector('.menu-btn');
// const navLinks = document.querySelector('.nav-links');

menuBtn.addEventListener('click', () => {
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const hero = document.querySelector('#hero');
    const scrolled = window.pageYOffset;
    hero.style.backgroundPositionY = scrolled * 0.5 + 'px';
});

// Dynamic text animation
const dynamicText = document.querySelector('.dynamic-text');
const phrases = ['We all have a story to tell', 'Ideas worth spreading', 'Innovation meets inspiration'];
let currentPhrase = 0;

function changeText() {
    dynamicText.style.opacity = '0';
    setTimeout(() => {
        dynamicText.textContent = phrases[currentPhrase];
        dynamicText.style.opacity = '1';
        currentPhrase = (currentPhrase + 1) % phrases.length;
    }, 500);
}

setInterval(changeText, 5000);

// Header scroll effect
const header = document.querySelector('header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > lastScroll) {
        header.style.transform = 'translateY(-100%)';
    } else {
        header.style.transform = 'translateY(0)';
    }
    
    lastScroll = currentScroll;
});
