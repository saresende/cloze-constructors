var clozeCards = require('./ClozeCard.js');

var inquirer = require('inquirer');



var cards = [clozeCards.firstVocabulary, clozeCards.secondVocabulary, clozeCards.thirdVocabulary, clozeCards.fourthVocabulary];

var place = 0;
var correct = 0;
var incorrect = 0;

/*clozeCard.prototype.showQuestion = function() {
    for (var i = 0; i < cards.length; i++) {
        var question = cards[place].text;
        question = question.replace(cards[place].cloze, ".....");
        console.log("Front: " + question);
        console.log("----");
    }
}*/

function intro () {

}
var flashcards = function() {
	 
        var question = cards[place].text;
        question = question.replace(cards[place].cloze, ".....");

    if (place < 4) {
        console.log("It's going");
              inquirer.prompt([
        	{
                type: 'input',
                message: question,
                name: "answer"
            }

        ]).then(function(answer) {
        
            if (answer.answer === cards[place].cloze) {
                console.log('Correct! The answer was: ' + cards[place].cloze);
                place++;
                correct++;
                console.log(place);
                flashcards();
            } else {
                console.log('Incorrect! The answer was: ' + cards[place].cloze);
                place++
                incorrect++;
                flashcards();
            }
        })
    } else {
    	console.log('No more cards! Your number of correct answers: ' + correct + ' And your number of incorrect answers: ' + incorrect);
    }
}
flashcards();
