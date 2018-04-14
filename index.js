var inquirer = require("inquirer");
var Word = require("./word.js");

var wordOptions = ["hippopotomonstrosesquippedaliophobia", "crypt", "awkward", "dwarves", "banjo", "fjord", "jazzy", "xylophone", "zombie", "quad", "quip", "rhythmic", "unzip"]
//that first word means the fear of big words, if there is a better word that demonstrates irony, I don't want to know it
var random = wordOptions[Math.floor(Math.random() * wordOptions.length)];

var tries = 5;
var correct = 0;
var previousCorrect = 0;
//tries = # of attempts left, correct and previousCorrect will be used to determine if a tries should be removed and when the player has won the game.

var word = new Word(random);
word.push();
//since the program is built to only play once through, starting the game does not need any prompts or code for repeating.

function guess() {
    word.string();
    //this will display the string at the start of each turn
    if (tries > 0) {
        //only run if there are still tries left
        inquirer.prompt([
            {
                name: "letter",
                message: "Choose a letter and press Enter.  You have " + tries + " incorrect guesses remaining."
            }
            //prompts the user to pick a letter
        ]).then(function (abc) {
            word.argument(abc.letter);
            // start things off by checking to see if the user input letter is a correct guess for any of the letters
            for (var i = 0; i < word.array.length; i++) {
                //now going through it all to determine if the user wins, loses a tries, or keeps playing
                if (word.array[i].guessed === true) {
                    correct++;
                    //this counts the number of letters that have been guessed
                }
            }
            if (correct === word.array.length) {
                //if the number of letters correctly guessed is the same as the total number of letters then the user won
                console.log("Winner!\n" + random);
            }
            else if (correct === previousCorrect) {
                //if the current total number of correct letters guessed is the same as the previous number of correct letter guessed then remove a tries.
                tries--
                console.log("There are no " + abc.letter + "'s in the word.\nYou have " + tries + " remaining.")
                correct = 0;
                guess();
                //reset correct to 0 since the if loop at line 32 will always add to correct after each guess and rerun this function
            }
            else {
                previousCorrect = correct;
                correct = 0;
                guess();
                //if correct number of letters is greater than previous correct number of letters then it means the user correctly guessed a new letter but haven't won yet.  Therefore, set the previousCorrect to represent the current correct numbers, reset current correct to 0 (same reason as line 48) and rerun this function
            }
        });
    } else {
        console.log("Game over, the word was " + random);
        //loser!
    }
}
guess(random);