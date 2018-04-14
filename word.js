var Letter = require("./letter.js");

function Word(word) {
    this.word = word;
    this.array = [];
    //the above array will be filled in by this.push and then used in this.string and this.argument
    this.push = function () {
        //creates an array of Letter objects
        var wordArr = this.word.split("");
        for (var i = 0; i < wordArr.length; i++) {
            var letter = new Letter(wordArr[i]);
            this.array.push(letter);
        }
    };
    this.string = function () {
        //Goes through each part of the array and displays either the letter or a - based on if the user has guessed the word.
        var arr = [];
        for (var i = 0; i < this.array.length; i++) {
            arr.push(this.array[i].toString());
        }
         console.log(arr.join(" "));
    };
    this.argument = function(abc) {
        //takes the user inputed letter and runs it through the array of Letter objects so each object can determine if it is a correct guess or not for its array position
        for(var i = 0; i < this.array.length; i++) {
            this.array[i].check(abc);
        }
    };
}

module.exports = Word;



//the below lines are checking that Word works with Letter/by itself
//  var please = new Word("work");

// console.log(please);
// console.log("----------------------------");
//  please.push();
// console.log(please.array);
//  please.string();
// please.argument("w");
// please.string();
// please.argument("e");
// please.string();
// please.argument("r");
// please.string();
// please.argument("t");
// please.string();
// console.log(please.array);
// console.log("--------------------");
