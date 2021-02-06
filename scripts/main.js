'use strict';

const inputElement = document.querySelector('.js-input-number');
const clueElement = document.querySelector('.js-clue');
const clicksElement = document.querySelector('.js-clicks');
const btnElement = document.querySelector('.js-btn');
const formElement = document.querySelector('.js-form');

const randomNumber = getRandomNumber(100);

console.log(randomNumber);

function handleForm(ev) {
  ev.preventDefault();
}

formElement.addEventListener('submit', handleForm);

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

function paragraphClue(clue) {
  return (clueElement.innerHTML = clue);
}

function btnHandler() {
  const inputValue = parseInt(inputElement.value);

  if (inputValue < randomNumber && inputValue > 0) {
    paragraphClue('El número es demasiado bajo.');
  } else if (inputValue > randomNumber && inputValue <= 100) {
    paragraphClue('El número es demasiado alto.');
  } else if (inputValue === 42 && randomNumber === 42) {
    paragraphClue('¡¡Has ganado, campeona!! Y tienes la respuesta para todo.');
  } else if (inputValue === randomNumber) {
    paragraphClue('¡¡Has ganado, campeona!! 🤡');
  } else {
    paragraphClue('El número debe estar entre 1 y 100.');
  }
}

btnElement.addEventListener('click', btnHandler);

let clicksCount = 1;
function attemptHandler() {
  clicksElement.innerHTML = `Número de intentos: ${clicksCount++}`;
}

btnElement.addEventListener('click', attemptHandler);
