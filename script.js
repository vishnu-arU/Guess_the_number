'use strict';

// generating random number

let randomNumber = Math.floor(Math.random() * 20) + 1;

// settting the score as 20

let score = 5;
let highScore = 0;

// writing the whole function

document.querySelector('.check').addEventListener('click', function () {
  const guessNumber = Number(document.querySelector('.guess').value);

  // when no number is entered

  if (!guessNumber) {
    document.querySelector('.message').textContent = 'no number entered';
  }
  //   when the number is correct
  else if (randomNumber === guessNumber) {
    if (highScore < score) {
      highScore == score;
      document.querySelector('.highscore').textContent = score;
    }

    document.querySelector('.message').textContent =
      ' Wow u guessed it right 🤝';
    document.querySelector('.number').textContent = randomNumber;
    document.querySelector('body').style.backgroundColor = '#b60347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').style.color = 'green';
  }

  //   when the number is too high
  else if (guessNumber > randomNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'too high';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = ' sorry game over! 😣';
      document.querySelector('.score').textContent = 0;
      document.querySelector('.number').textContent = randomNumber;
      document.querySelector('body').style.backgroundColor = 'orange';
    }
  }

  //   if the number is  too low
  else if (guessNumber < randomNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'too low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = ' sorry game over!';
      document.querySelector('.score').textContent = 0;
      document.querySelector('.number').textContent = randomNumber;
      document.querySelector('body').style.backgroundColor = 'orange';
    }
  }
});
// implementing the  again button refreshing the page

document.querySelector('.again').addEventListener('click', function () {
  randomNumber = Math.floor(Math.random() * 20) + 1;
  score = 5;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
