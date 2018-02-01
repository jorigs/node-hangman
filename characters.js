
var q = require("q");							//npm install q - Promise package -- 
                                                // A promise is an object that represents the return value or the thrown exception that the function may eventually provide.

var hm = require("./hm.js");				//The randomly chosen word comes from hm.js
var answers = require("./answers.js")	;				//After correct or not has been determined
var main = require("./main.js");

var displayObject = {
	correctGuessesInOrder: [],
	displayNewGuess: function(){
		//fill blank spots with "_"
		if (word.toLetterJS.correctGuesses.length == 0 || word.toLetterJS.correctGuesses == null){
			for (var i =0; i<game.toLetterJS.wordLetters.length; i++){
				this.correctGuessesInOrder[i] = "_";
			}
		}
		else {
			//length of answer 
			for (var i=0; i<game.toLetterJS.wordLetters.length; i++){
				//If the displayed guess is not the same as wordLetters at index i,
				if (this.correctGuessesInOrder[i] != game.toLetterJS.wordLetters[i]){
					//Loop for correctGuesses length number of times,
					for (var j=0; j<word.toLetterJS.correctGuesses.length; j++){
						//If the correctGuesses at j is equal to wordLetters at i, the displayedGuess becomes the bandletter at index i
						if (word.toLetterJS.correctGuesses[j] == game.toLetterJS.wordLetters[i]){
							this.correctGuessesInOrder[i] = game.toLetterJS.wordLetters[i];
						}
						//Otherwise the displayedGuess at index i (corresponding to the band letter's indexes) becomes an underscore.
						else {
							this.correctGuessesInOrder[i] = "_";
						}
					}
				}
			}
		}

		console.log(this.correctGuessesInOrder.join(" ") + "\n");
	},

	checkProgress: function(){
		var counter = 0;

		//Loop a number of times equal to the length of the band name. 
		//If a guess is equal to the the band letter at the same index, add 1 to the counter.
		for (var i=0; i<game.toLetterJS.wordLetters.length; i++){
			if (this.correctGuessesInOrder[i] == game.toLetterJS.wordLetters[i]){
				counter++;
			}
		}

		//If the counter is the length of the band name, the user has won.
		if (counter == game.toLetterJS.wordLetters.length){

			main.toLetterJS.roundComplete = true;
			word.toLetterJS.winCount++;

			console.log("\nYou win!");
			console.log("Wins: " + word.toLetterJS.winCount + "--" + "Losses: " + word.toLetterJS.loseCount);
			console.log("-------------------------------------");

			main.toLetterJS.resetVariables();
		}
		//If the number of guesses remaining is zero, the user has lost.
		if (word.toLetterJS.guessesRemaining == 0){

			main.toLetterJS.roundComplete = true;
			word.toLetterJS.loseCount++;

			console.log("\NYou lose!");
			console.log("Wins: " + word.toLetterJS.winCount + "--" + "Losses: " + word.toLetterJS.loseCount);
			console.log("-------------------------------------");

			main.toLetterJS.resetVariables();

		}
	}
}



exports.toMain = displayObject;
exports.toHM = displayObject;




