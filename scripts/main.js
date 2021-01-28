'use strict';

const inputElement = document.querySelector('.js-input-number');
const paragraph1Element = document.querySelector('.js-paragraph1');
const paragraph2Element = document.querySelector('.js-paragraph2');
const btnElement = document.querySelector('.js-btn');


function getRandomNumber(max) {
	return Math.ceil(Math.random() * max);
}

console.log(getRandomNumber(100));

const randomNumber = getRandomNumber(100);


function paragraph1Preview(clue) {
    return paragraph1Element.innerHTML = clue;
}


function btnHandler () {
    const inputValue = parseInt(inputElement.value);

    if (inputValue < randomNumber) {
        paragraph1Preview('El número es demasiado bajo.');
    } else if (inputValue > randomNumber) {
        paragraph1Preview('El número es demasiado alto.');
    } else if (inputValue === randomNumber) {
        paragraph1Preview('¡¡Has ganado, campeona!!');
    } else {
        paragraph1Preview('El número debe estar entre 1 y 100');
    }
}

btnElement.addEventListener('click', btnHandler);




function attemptHandler () {  
    let clicksCount = 0;      
    return paragraph2Element.innerHTML = `Número de intentos: ${clicksCount++}`;
}

btnElement.addEventListener('click', attemptHandler);