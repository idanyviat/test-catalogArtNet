'use strict'
var PHOTOS_AMUNT = 3;
var photoTemplate = document.querySelector('.catalog__item--image').content.querySelector('.inform-photo');
var list = document.querySelector('#inform');

var getRandomArbitrary = function (min, max) {
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
};

var generatePhoto = function () {
    var photos = [];
    for (var i = 0; i <= PHOTOS_AMUNT; i++) {
        photos.push({
            url: 'img/' + i + '.png',
            price: '3771'
        });
    }
    return photos;
};

var renderInfo = function (photoData) {
    var generateItem = photoTemplate.cloneNode(true);
    generateItem.querySelector('.catalog__item--image img').src = photoData.url;
    generateItem.querySelector('.catalog__item--name').textContent = photoData.names;
    generateItem.querySelector('.catalog__item--price').textContent = photoData.price;
    return generateItem;
};

var craftInfo = function (photos) {
    var fragment = document.createDocumentFragment();
    for (var i = 0; i < photos.length; i++) {
        fragment.appendChild(renderInfo(photos[i]));
    }
    list.appendChild(fragment);
};

var init = function () {
    var photos = generatePhoto();
    craftInfo(photos);
};

init();
