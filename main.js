var game = require("./hm.js");				//The randomly chosen word comes from hm.js
var word = require("./answers.js")	
var letter = require("./characters.js");

var inquirer = require("inquirer");				//npm install inquirer

var playerStuff = {
	userLetter: "",
	roundComplete: false,
	startGame: function(){
		console.log("\nWelcome to Jane Austen Trivia\n");
		game.toMainJS.pickWord();
		console.log(game.toMain.chosenWord);
		letter.toMain.displayNewGuess();

		promptUser();
	},
	startRound: function(){
		this.roundComplete = false;

		game.toMain.pickWord();
		console.log(game.toMain.chosenWord);
		letter.toMain.displayNewGuess();

		promptUser();
	},
	resetVariables: function(){
		letter.toMain.correctGuessesInOrder= [];
		word.toMain.allGuesses = [];
		word.toMain.incorrectGuesses = [];
		word.toMain.correctGuesses = [];
		word.toMain.isMatch = null;
		word.toMain.isRepeat = null;
		word.toMain.guessesRemaining = 15;
	}
}


var promptUser = function() {
    inquirer.prompt([{
        name: "letter",
        message: "Give me a letter: ",
        validate: function(value) {
            if (isNaN(value) == true) {
                return true;
            }
            else {
            	return false;
            }
        }
    }]).then(function(answers) {

		console.log("--------------------------------- \n");

		//Store the input letter and push it into an allGuesses array
       	playerStuff.userLetter = answers.letter;
    	playerStuff.userLetter = playerStuff.userLetter.toUpperCase();
        word.toMain.allGuesses.push(playerStuff.userLetter);

        //Check the user input against the random word
        word.toMain.checkRepeat();

        //Display the letters or underscores for the random word
		letter.toMain.displayNewGuess();


       	console.log("Guesses remaining: " + word.toMain.guessesRemaining);

       	//Check to see if the game is still in progress
		letter.toMain.checkProgress();

		if (playerStuff.roundComplete == false){
		    promptUser();
		}
		else if (playerStuff.roundComplete == true){
			playerStuff.startRound();
		}

    })

}

playerStuff.startGame();

exports.toAnswers = playerStuff;
exports.toCharacters = playerStuff;






