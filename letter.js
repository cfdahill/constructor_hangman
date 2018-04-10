function Letter(abc) {
    this.letter = abc
    this.guessed = false;
    this.toString = function(){
        if (!this.guessed) {
            return "_";
        } else {
            return this.letter;
        }
    }
    this.check = function(xyz) {
        if(xyz === this.letter) {
            this.guessed = true;
        }
    }
}

module.exports = Letter;

//the below lines are to check the above function
// var a = new letter("a");
// var b = new letter("b");
// console.log(a);
// a.check("z");
// b.check("b");
// console.log(a.guessed + " " + b.guessed); 