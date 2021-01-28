'use strict';

const inputElement = document.querySelector('.js-input-number');
const paragraph1Element = document.querySelector('.js-paragraph1');
const paragraph2Element = document.querySelector('.js-paragraph2');
const btnElement = document.querySelector('.js-btn');




function paragraph1Clue(clue) {
    return paragraph1Element.innerHTML = clue;
}

function getRandomNumber(max) {
	return Math.ceil(Math.random() * max);
}

const randomNumber = getRandomNumber(100);

function btnHandler () {
    const inputValue = parseInt(inputElement.value);

    if (inputValue < randomNumber) {
        paragraph1Clue('El número es demasiado bajo.');
    } else if (inputValue > randomNumber) {
        paragraph1Clue('El número es demasiado alto.');
    } else if (inputValue === randomNumber) {
        paragraph1Clue('¡¡Has ganado, campeona!!');
    } else {
        paragraph1Clue('El número debe estar entre 1 y 100');
    }
}

btnElement.addEventListener('click', btnHandler);


function attemptHandler () {    
    let clicksCount = 0;   
    return paragraph2Element.innerHTML = `Número de intentos: ${clicksCount++}`;
}

btnElement.addEventListener('click', attemptHandler);