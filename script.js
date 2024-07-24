'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector(' .guess').value = 23;
console.log(document.querySelector(' .guess').value);
*/
let score = 20;
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let highScore = 0;

//document.querySelector('.number').textContent = secretNumber;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
const displayScore = function (score) {
  document.querySelector('.score').textContent = score;
};
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  // when there in no input
  if (!guess) {
    displayMessage('NO NUMBER😒 🤷‍♂️');
    //when player wins
  } else if (guess == secretNumber) {
    displayMessage('Correct number 🎀');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
    //when guss is high
  } else if (guess > secretNumber) {
    if (score > 1) {
      displayMessage('TOO HIGH📈📈');
      score--;
      displayScore(score);
    } else {
      displayMessage('YOU LOOSE👎👎');
    }

    //when guess is low
  } else if (guess < secretNumber) {
    if (score > 1) {
      displayMessage('TOO LOW📉📉');
      score--;
      displayScore(score);
    } else {
      displayMessage('YOU LOOSE👎👎');
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start guessing...');
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.score').textContent = score;
});
