/*
* Файл - сборщик остальных скриптов
* Здесь создаются объекты классов и 
* применяются методы
*/

'use strict';

let carouselsFactory = new CarouselFactory;
var carousels = document.getElementsByName('carousel');
var elem = [];

for (var i = 0; i < carousels.length; i++) {
	var index = carousels[i].getAttribute('data-index');
	var range = carousels[i].getAttribute('data-range');
	elem[i] = carouselsFactory.createClass(i, carousels[i], range, index);
	var classCarousel = elem[i];
	var asides = [carousels[i].children[1], carousels[i].children[2]];
	for (var a = 0; a < asides.length; a++) {
		var angle = asides[a].children[0];
		angle.onclick = function(event) {
			let target = event.target;
			var carouselNumber = target.getAttribute('data-carousel-number');
			onclick(elem[carouselNumber], target);
		}
	}
}

function onclick(c, elem) {
	c.carouselClickEvent(elem);
}

var mastersBlock = document.getElementById('masters');
let masters = new Masters(mastersBlock);
var mastersIcons = document.getElementsByName('masters__icon');

for (var i = 0; i < mastersIcons.length; i++) {
	mastersIcons[i].onclick = function() {
		masters.clickEvent(this);
	}
}

var burger = document.getElementById('burger');

burger.onclick = function() {
	this.classList.toggle('change');
	headerMenu.classList.toggle('active__menu');
}

var offerButton = document.getElementById('offer__button');
var windowOffer = document.getElementById('window');
let windowClass = new Window();

offerButton.onclick = function() {
	windowClass.clickEvent(this, windowOffer);
}