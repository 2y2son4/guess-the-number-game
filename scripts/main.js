'use strict';

const inputElement = document.querySelector('.js-input-number');
const clueElement = document.querySelector('.js-clue');
const clicksElement = document.querySelector('.js-clicks');
const tryBtnElement = document.querySelector('.js-btn-try');
const resetBtnElement = document.querySelector('.js-btn-reset');
const formElement = document.querySelector('.js-form');

let randomNumber;
let clicksCount;

function handleForm(ev) {
  ev.preventDefault();
}

formElement.addEventListener('submit', handleForm);

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

function paragraphClue(clue) {
  clueElement.innerHTML = clue;
}

function btnHandler() {
  const inputValue = Number(inputElement.value); // Better than parseInt, it converts, i.e. '1e2' → 100.

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

tryBtnElement.addEventListener('click', btnHandler);

function attemptHandler() {
  clicksElement.innerHTML = `Número de intentos: ${clicksCount++}`;
}

tryBtnElement.addEventListener('click', attemptHandler);

/* Add a reset button that cleans the input, the counter, writes the initial feedback and generates a new random number to play again! */
function resetHandler() {
  // location.reload(); It works but it feels like cheating. You don't learn anything from JS in the process.
  inputElement.value = '';
  clicksElement.innerHTML = '';
  clicksCount = 1;
  clueElement.innerHTML =
    '<strong class="bold">Pista:</strong> escribe un número del 1 al 100 y haz click en "Prueba".';
  randomNumber = getRandomNumber(100);
  console.log(randomNumber);
}

resetBtnElement.addEventListener('click', resetHandler);

resetHandler();
