var inquirer = require("inquirer");
var Word = require("./word.js");

var wordOptions = ["hippopotomonstrosesquippedaliophobia", "crypt", "awkward", "dwarves", "banjo", "fjord", "jazzy", "xylophone", "zombie", "quad", "quip", "rhythmic", "unzip"]

var random = wordOptions[Math.floor(Math.random()*wordOptions.length)];

var tries = 5;
var correct = 0;
var previousCorrect = 0;

var word = new Word(random);
word.push();


function guess() {
    word.string();
    if (tries > 0) {
        inquirer.prompt([
            {
                name: "letter",
                message: "Choose a letter.  You have " + tries + " incorrect guesses remaining."
            }
        ]).then(function (abc) {
            word.argument(abc.letter);

            for (var i = 0; i < word.array.length; i++) {
                if (word.array[i].guessed === true) {
                    correct++;
                }
            }
            if (correct === word.array.length) {
                console.log("Winner!\n" + random);
            }
            else if (correct === previousCorrect) {
                tries--
                console.log("There are no " + abc.letter + "'s in the word.\nYou have " + tries + " remaining.")
                correct = 0;
                guess();
            }
            else {
                previousCorrect = correct;
                correct = 0;
                guess();
            }
        });
    } else {
        console.log("Game over, the word was " + random);
    }
}
guess(random);