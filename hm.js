// javascript picks a word and sends the answers letters to answer.js and character.js
var letter = require("./characters.js");


var answerKey = {
	words: ["Emma", "Pride & Prejudice", "Sense & Sensibility", "Persuasion", "Mansfield Park", "Northanger Abbey", "Lady Susan"],
	randNum: 0,
	chosenWord: "",
	wordLetters:[],

	pickWord: function(){
		this.randNum = Math.floor(Math.random()*this.words.length);
		this.answerWord = this.words[this.randNum];
		this.answerCharacters = this.chosenWord.split("");
	}

};


exports.toAnswers = answerKey;
exports.toCharacters = answerKey;
exports.toMain = answerKey;

