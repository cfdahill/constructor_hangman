var fromLetter = require("./letter.js");
var array = [];
function Word(word) {
    this.word = word;
    this.array = function(){
        for (var i = 0; i < this.word.length; i++) {
           var letter = new fromLetter.Letter(this.word.indexOf(i));
           array.push();
        }
        return here;
    };
    this.string = function() {
        for(var i = 0; i<this.array.length; i++){
        console.log(this.array[i].fromLetter.Letter.toString());
        }
    };
    this.argument = function(abc) {
        for(var i = 0; i < this.array.length; i++) {
            fromLetter.Letter.check(abc)
        }
    };
}


//checking Word
var please = new Word("please");
var work = new Word("work");

console.log(please);
console.log("----------------------------");
console.log(please.array());
console.log("--------------------");
console.log(please.string());