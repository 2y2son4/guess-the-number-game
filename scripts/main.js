"use strict";

function getRandomNumber(max) {
	return Math.ceil(Math.random() * max);
}

console.log(getRandomNumber(100));

const inputElement = document.querySelector('.js-input-number');
const paragraph1Element = document.querySelector('.js-paragraph1');
const paragraph2Element = document.querySelector('.js-paragraph2');
const btnElement = document.querySelector('.js-btn');

function btnHandler () {
    
}


btnElement.addEventListener('click', btnHandler);