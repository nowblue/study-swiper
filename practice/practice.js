const slider = document.querySelector('.slider');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
let currentPosition = 0;
const step = 600;

function moveSlider(direction) {
    if (direction === 'prev') {
    currentPosition += step;
    } else {
    currentPosition -= step;
    }
    slider.style.left = currentPosition + 'px';
    }

    
prevBtn.addEventListener('click', function() {
    moveSlider('prev');
    });
    nextBtn.addEventListener('click', function() {
    moveSlider('next');
    });
        