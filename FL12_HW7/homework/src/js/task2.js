// Your code goes here
'use strict';

let wantToPlay = confirm('Do you want to play a game?');
const magicNumber1 = 1;
const magicNumber2 = 2;
const magicNumber3 = 3;
const magicNumber4 = 25;
const magicNumber5 = 50;
const magicNumber6 = 100;
const magicNumber7 = 200;
const magicNumber8 = 9;
const magicNumber10 = 13;
const magicNumber11 = 4;

if ( !wantToPlay ) {
    alert('You did not become a billionaire, but can.');
} else {
    let winningNumber = Math.floor(Math.random() * magicNumber8);
    let attemptPrize = 0;

    for (let i = magicNumber1; i <= magicNumber3; i++) {
        let possiblePrize = 0;
        if (i === magicNumber1) {
            possiblePrize = magicNumber6;    
        } else if (i === magicNumber2) {
            possiblePrize = magicNumber5;
        } else if (i === magicNumber3) {
            possiblePrize = magicNumber4;
        }
        let userNumber = +prompt(`Choose a roulette pocket number from 0 to 8\nAttempts left: ${magicNumber11 - i}
Total prize:  ${attemptPrize}\nPossible prize on current attempt: ${possiblePrize}`, '');

        if (i === magicNumber1 && userNumber === winningNumber) {
            attemptPrize = possiblePrize;    
            break;    
        } else if (i === magicNumber2 && userNumber === winningNumber) {
            attemptPrize = possiblePrize;
            break;
        } else if (i === magicNumber3 && userNumber === winningNumber) {
            attemptPrize = possiblePrize;
            break;
        }
    }

    let wantPlayAgain;
    if (attemptPrize !== 0) {
        wantPlayAgain = confirm(`Congratulation, you won! Your prize is: ${attemptPrize}$. Do you want to continue?`);
    } else {
        alert(`Thank you for your participation. Your prize is: ${attemptPrize}$`);
        wantPlayAgain = confirm('Do you want to play again?');
    }

    let attemptPrize2 = attemptPrize;
    while ( wantPlayAgain ) {
        let winningNumber2 = Math.floor(Math.random() * magicNumber10);

        for (let j = magicNumber1; j <= magicNumber3; j++) {
            let possiblePrize2 = 0;
            if (j === magicNumber1) {
                possiblePrize2 = magicNumber7;    
            } else if (j === magicNumber2) {
                possiblePrize2 = magicNumber6;
            } else if (j === magicNumber3) {
                possiblePrize2 = magicNumber5;
            }

            let userNumber2 = +prompt(`Choose a roulette pocket number from 0 to 12\nAttempts left: ${magicNumber11 - j}
Total prize:  ${attemptPrize2} \nPossible prize on current attempt: ${possiblePrize2}`, '');

            if (j === magicNumber1 && userNumber2 === winningNumber2) {
                attemptPrize2 = attemptPrize2 + possiblePrize2;    
                break;    
            } else if (j === magicNumber2 && userNumber2 === winningNumber2) {
                attemptPrize2 = attemptPrize2 + possiblePrize2;
                break;
            } else if (j === magicNumber3 && userNumber2 === winningNumber2) {
                attemptPrize2 = attemptPrize2 + possiblePrize2;
                break;
            }    
        }

        alert(`Thank you for your participation. Your prize is: ${attemptPrize2}$`);
        wantPlayAgain = confirm('Do you want to play again?');
    }
}