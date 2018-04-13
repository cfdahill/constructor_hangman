function Letter(xyz) {
    this.letter = xyz
    this.guessed = false;
    this.toString = function(){
        if (!this.guessed) {
            return "_";
        } else {
            return this.letter;
        }
    }
    this.check = function(abc) {
        if(abc === this.letter) {
            this.guessed = true;
        }
    }
}

//Letter uses variable xyz to represent the letter because I want abc to represent the same, user inputted, variable for every .js

module.exports = Letter;

//the below lines are to check the above function is working by itself
// var a = new letter("a");
// var b = new letter("b");
// console.log(a);
// a.check("z");
// b.check("b");
// console.log(a.guessed + " " + b.guessed); 