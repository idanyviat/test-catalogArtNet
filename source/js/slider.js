'use strict'
var button = document.querySelector('button');
var slider = document.getElementById('Range-second');
var sliderSecond = document.getElementById('Range-first');
var output = document.getElementById('min-price');
var outputSecond = document.getElementById('max-price');
var line = document.querySelector('.catalog__item--line');
var catalogImage = document.querySelector('.catalog__item--image');
var popup = document.querySelector('.catalog__popup');
var close = document.querySelector('.catalog__close');
var slides = document.querySelectorAll('.slide');
var sliderWidth = document.querySelector('.catalog__item--slider').offsetWidth;
var widthArrey = [4];
var lineWidth = 200;
var offset = 0;
var step = 0;
var balance = 0;

for (var i = 0; i < slides.length; i++) {
    widthArrey.push(slides[i].offsetWidth);
    lineWidth += slides[i].offsetWidth;
}

line.style.width = lineWidth + 'px';
catalogImage.onclick = function () {
    balance = lineWidth - sliderWidth - (offset + widthArrey[step]);
    if (balance >= 0) {
        offset = offset + widthArrey[step];
        line.style.left = -offset + 'px';
    }
    else {
        line.style.left = -(lineWidth - sliderWidth) + 'px';
        offset = 0;
        step = -1;
    }

    if (step + 1 == slides.length) {
        step = 0;
        offset = 0;
    }
    else {
        step++;
    }
}

slides.onmouseover = slides.onmouseout = handler;
function handler(event) {
    function str(el) {
        if (!el) return "null"
        return el.className || el.tagName;
    }
    if (event.type == 'mouseover') {
        offset = offset + widthArrey[step];
        event.target.style.left = -offset + 'px';
    }
    if (event.type == 'mouseout') {
        event.target.style.left = +offset + 'px';
    }
}

button.addEventListener('click', function (evt) {
    evt.preventDefault();
    popup.classList.toggle('hidden');
});
close.addEventListener('click', function (evt) {
    evt.preventDefault();
    popup.classList.add('hidden');
});

output.innerHTML = slider.value;
outputSecond.innerHTML = sliderSecond.value;
sliderSecond.oninput = function () {
    outputSecond.innerHTML = this.value;
}
slider.oninput = function () {
    output.innerHTML = this.value;
}

var form = document.querySelector('.setup-form');
form.addEventListener('submit', function (evt) {
    window.upload(new FormData(form), function (response) {
        popup.classList.add('hidden');
    });
    evt.preventDefault();
});


