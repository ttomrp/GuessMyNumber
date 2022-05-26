'use strict';

let correctNum = Math.trunc(Math.random()*20)+1;
let score = 20;
let highscore = 0;


document.querySelector(".check").addEventListener('click', checkEventHandler);
document.querySelector(".again").addEventListener('click', againEventHandler);

/*
Event handler method for the check button click.
*/
function checkEventHandler() {
    const guess = Number(document.querySelector('.guess').value);

    // if score > 0 game continues, else lose game
    if (score > 1) {
        if (!guess) {
            // if guess is 0 or null
            updateMessageElement("No Number...");
        } 
        else if (guess === correctNum){
            // if guess is correct and player wins
            if (score > highscore) {
                highscore = score;
            }
            updateNumberElement(correctNum, "30rem");
            updateMessageElement("Correct Number!");
            updateBodyElement("#60b347");
            document.querySelector(".highscore").textContent = highscore;
        } 
        else if (guess !== correctNum) {
            // if guess is incorrect.  use ternary operator to display high or low
            updateMessageElement((guess > correctNum) ? "Too High." : "Too Low.");
            score--;
            updateScoreElement(score)
        }
    }
    else {
        score = 0;
        updateScoreElement(score)
        updateMessageElement("You Lose. Press \'Again!\' to retry.");
    }
}

/*
Event handler method for the again button click.
Restores initial conditions without reloading the page to preserve highscore.
*/
function againEventHandler() {
    score = 20;
    correctNum = Math.trunc(Math.random()*20)+1;
    updateMessageElement("Start guessing...");
    updateScoreElement(score)
    updateBodyElement("#222");
    updateNumberElement("?", "15rem");
    document.querySelector('.guess').value = "";
}

/*
Helper method to udpate the html .message class
*/
function updateMessageElement(message) {
    document.querySelector(".message").textContent = message;
}

/*
Helper method to udpate the html body element
*/
function updateBodyElement(color) {
    document.querySelector("body").style.backgroundColor = color;
}

/*
Helper method to udpate the html .number class
*/
function updateNumberElement(text_content, width) {
    document.querySelector(".number").textContent = text_content;
    document.querySelector(".number").style.width = width;
}

/*
Helper method to udpate the html .score class
*/
function updateScoreElement(score) {
    document.querySelector(".score").textContent = score;
}