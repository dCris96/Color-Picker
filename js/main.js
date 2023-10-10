let box = document.querySelector('.box');
let botones = document.querySelectorAll('span');

function cambiarColor(color) {
    box.style.background = color;

    botones.forEach(function (item) {
        item.classList.remove('active');
    });

    event.target.classList.add('active');
}