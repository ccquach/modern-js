/**
 * GAME FUNCTION:
 * - Player must guess a number between a min and max
 * - Player gets a certain amount of guesses
 * - Notify player of guesses remaining
 * - Notify player of correct answer if lose
 * - Let player choose to play again
 */

// Game values
let min = 15;
let max = 20;
let winningNum = getRandomNum(min, max);
let guessesLeft = 3;

// UI Elements
const $minNum = document.querySelector('.min-num');
const $maxNum = document.querySelector('.max-num');
const $guessForm = document.querySelector('#guess-form');
const $guessBtn = document.querySelector('#guess-btn');
const $guessInput = document.querySelector('#guess-input');
const $message = document.querySelector('.message');

// Assign UI min and max
$minNum.textContent = min;
$maxNum.textContent = max;

// Listen for guess
$guessForm.addEventListener('submit', e => {
  e.preventDefault();
  const guess = +$guessInput.value;
  validate(guess);
  check(guess);
});

// Listen for play again
$guessForm.addEventListener('mousedown', e => {
  if (e.target.classList.contains('play-again')) {
    window.location.reload();
  }
});

function validate(guess) {
  if (isNaN(guess) || guess < min || guess > max) {
    setMessage(`Please enter a number between ${min} and ${max}`, 'red');
  }
}

function check(guess) {
  if (guess === winningNum) {
    gameOver(true, `${winningNum} is correct, YOU WIN!!`);
  } else {
    guessesLeft--;
    if (guessesLeft === 0) {
      gameOver(
        false,
        `Game Over, you lost. The correct number was ${winningNum}`
      );
    } else {
      $guessInput.value = '';
      setMessage(`${guess} is not correct, ${guessesLeft} guesses left`, 'red');
    }
  }
}

function gameOver(won, message) {
  $guessInput.disabled = true;
  setMessage(message, won ? 'green' : 'red');
  playAgain();
}

function playAgain() {
  $guessBtn.value = 'play again';
  $guessBtn.className += ' play-again';
}

function setMessage(message, color) {
  $message.style.color = color;
  $message.textContent = message;
  $guessInput.style.borderColor = color;
}

function getRandomNum(min, max) {
  return Math.floor(Math.random(max - min + 1)) + min;
}
