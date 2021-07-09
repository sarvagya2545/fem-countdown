const timers = document.querySelectorAll('.timer .flip');

setInterval(() => {
    timers.forEach(flipCard => flipCard.classList.toggle('animate'));
}, 1000);