'use strict';

let secretNumber = Math.floor(Math.random() * 20) + 1;

let score = 20;
let highscore = 0;
let message = 'Start guessing...';

//check the guess number
document.querySelector('.check').addEventListener('click', () => {
    const guess = Number(document.querySelector('.guess').value);

    //there is no input
    if (!guess) {
        message = 'No number was inserted...';
    }
    //player wins
    else if (guess === secretNumber) {
        message = '🎉 Correct number!';

        document.querySelector('.number').textContent = secretNumber;

        document.querySelector('body').style.backgroundColor = '#60b347';

        document.querySelector('.number').style.width = '30rem';

        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
    }
    //guess is not the secret number
    else {
        if (score > 1) {
            message = guess > secretNumber ? 'Too high!' : 'Too low!';
            score--;
        } else {
            message = 'You Lost! Start again...';   
            score = 0;
            document.querySelector('.check').classList.add('disabledBtn');
            document.querySelector('body').style.backgroundColor = '#222';
        }   
    }

    document.querySelector('.message').textContent = message;

    document.querySelector('.score').textContent = score;
});


//reset game, but keep the highscore
document.querySelector('.again').addEventListener('click', () => {

    secretNumber = Math.floor(Math.random() * 20) + 1;

    score = 20;

    document.querySelector('.score').textContent = score;

    document.querySelector('.guess').value = '';

    document.querySelector('.message').textContent = 'Start guessing...';

    document.querySelector('.number').textContent = '?';

    document.querySelector('body').style.backgroundColor = 'blueviolet';

    document.querySelector('.number').style.width = '15rem';

    document.querySelector('.check').classList.remove('disabledBtn');
});