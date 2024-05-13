#! /usr/bin/env node
"use strict";
//Number Game
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
// 1) Computer will generate a random number - Done
// 2) User input for guessing number - Done
// 3) Compare user input with computer generated number and show result - Done
const randomNumber = Math.floor(Math.random() * 100 + 1);
const answers = await inquirer_1.default.prompt([
    {
        name: "userGuesedNumber",
        type: "Number",
        message: "Please guess a number between 1-100: ",
    }
]);
if (answers.userGuesedNumber == randomNumber) {
    console.log("Congratulations! you guessed the right number.");
}
else {
    console.log("you guessed the wrong number");
}
let secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 5;
let score = 0;
let rounds = 0;
function guess(userGuess) {
    userGuess = parseInt(userGuess);
    if (userGuess === secretNumber) {
        console.log("Congratulation! You guessed the number!");
        score++;
        rounds++;
        attempts = 5; //Reset atempts for next round
    }
    else if (userGuess < secretNumber) {
        console.log("Too low! Try again.");
        attempts--;
    }
    else if (userGuess > secretNumber) {
        console.log("Too high! Try again.");
        attempts--;
    }
    if (attempts === 0) {
        console.log("Game over! You ran out of attempts.");
        console.log(`Your final score is $ {score} out of ${rounds} rounds`);
    }
}
function playAgain() {
    secretNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 5;
}
