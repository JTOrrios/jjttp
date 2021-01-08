'use strict'
//dontknow

let secretNum = Math.trunc(Math.random() * 20) + 1;
//know, creates randomnumber multiplies by 20 removes the decimal then add 1

let score = 20;
//know, set score to 20

let highscore = 0;
//know, set highscore to 0


const displayMessage = function(message) {
    //know, sets the display message as the result of the function and makes value constant

    document.querySelector('.message').textContent = message;
    //know, sets message in HTML file to JS message
};

document.querySelector('.check').addEventListener('click', function () {
    //know, when 'check' button is clicked, do function 

    const guess = Number(document.querySelector('.guess').value);
    //know, pulls guess value from HTML and makes constant

    console.log(guess, typeof guess);
    //know, outputs guess value and displays the type of variable


    //When there is no input
    if(!guess) {
        //know, if there is no guess 

        //document.querySelector('.message').textContent = 'No Number!';
        displayMessage('No Number!');
        //know, displays 'No Number!'

        //When player wins
    } else if (guess === secretNum) {
        //know, if guess equals secret number

        // document.querySelector('.message').textContent = 'Correct Number!';
        displayMessage('Correct Number!');
        //know, displays Correct Number!

        document.querySelector('.number').textContent = secretNum;
        //know, sets number in HTML file to secretNum

        document.querySelector('body').style.backgroundColor = '#60b347';
        //know, changes background of body to the hex value

        document.querySelector('.number').style.width = '30rem';
        //know, increases size of number by 30

        if (score > highscore) {
        //know, if score is larger 

            highscore = score;
            //know, sets highscore equals to score

            document.querySelector('.highscore').textContent = highscore;
            //know, sets highscore in HTML to JS highscore
        }

        //When guess is wrong
    } else if (guess !== secretNum) {
        //know, if guess does not equal secretNum

        if(score > 1) {
            //if score is greater than one 

            //document.querySelector('.message').textContent =
            //guess > secretNumber ? 'Too high!' : 'Too low!';
            displayMessage(guess > secretNum ? 'Too High!' : 'Too low!');
            //if guess is greater than secretNum display 'Too High' else display 'Too low!'

            score--;
            //decrement score 

            document.querySelector('.score').textContent = score;
            //know, sets score in HTML file equal to that of JS score

        } else{

            //document.querySelector('.message').textContent = 'You lost the game!';
            displayMessage('You lost the game');
            //know, 'display you lost the game'

            document.querySelector('.score').textContent = 0;
            //know, set HTML score to 0

        }
        }
    });

    document.querySelector('.again').addEventListener('click',function () {
        //know, when again is clicked run funtion

        score = 20;
        //know, set score to 20

        secretNum = Math.trunc(Math.random() * 20) + 1;
        //know, creates a secret number and saves it to secretNum

        //document.querySelector('message'.textContent = 'Start guessing...';
        displayMessage('Start guessing...');
        //know, display 'start guessing'

        document.querySelector('.score').textContent = score;
        //know, sets HTML score to JS score

        document.querySelector('.number').textContent = '?';
        //know, sets HTML number to '?'

        document.querySelector('.guess').value = '';
        //know, sets HTML guess as whitespace

        document.querySelector('body').style.backgroundColor = '#222';
        //know, sets background to specified hex value

        document.querySelector('.number').style.width = '15rem';
        //know, changes number size by 15
    });