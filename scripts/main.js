"use strict";

function getRandomNumber(max) {
	return Math.ceil(Math.random() * max);
}

const randomNumber = getRandomNumber(100);

console.log(getRandomNumber(100));

const inputElement = document.querySelector('.js-input-number');
const paragraph1Element = document.querySelector('.js-paragraph1');
const paragraph2Element = document.querySelector('.js-paragraph2');
const btnElement = document.querySelector('.js-btn');

function paragraph1Preview (clue) {
    return paragraph1Element.innerHTML = clue;
}

/*function btnHandler () {
    const inputValue = parseInt(inputElement.value);

    if () {

    }

}


btnElement.addEventListener('click', btnHandler);*/