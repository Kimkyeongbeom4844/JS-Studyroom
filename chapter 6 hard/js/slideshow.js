var slides = document.querySelectorAll('#container>img');
var prev = document.querySelector('#prev');
var next = document.querySelector('#next');

var current = 0;

showSlide(current);
prev.onclick = prevSlide;
next.onclick = nextSlide;

function showSlide(n) {
    for(var i=0; i<slides.length; i++) {
        slides[i].style.display = 'none';
    }
    slides[n].style.display = 'block';
}

function prevSlide() {
    if (current > 0) {
        current -= 1;
    }
    else {
        current = slides.length - 1;
    }
    showSlide(current);
}

function nextSlide() {
    if (current < slides.length -1) {
        current += 1;
    }
    else {
        current = 0;
    }
    showSlide(current);
}

