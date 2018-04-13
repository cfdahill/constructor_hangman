var Letter = require("./letter.js");

function Word(word) {
    this.word = word;
    this.array = [];
    this.push = function () {
        var wordArr = this.word.split("");
        for (var i = 0; i < wordArr.length; i++) {
            var letter = new Letter(wordArr[i]);
            this.array.push(letter);
        }
    };
    this.string = function () {
        var arr = [];
        for (var i = 0; i < this.array.length; i++) {
            arr.push(this.array[i].toString());
        }
         console.log(arr.join(" "));
    };
    this.argument = function(abc) {
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
