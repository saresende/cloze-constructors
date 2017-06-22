var clozeCards = require('./ClozeCard.js');

var inquirer = require('inquirer');



var cards = [clozeCards.firstCard, clozeCards.secondCard, clozeCards.thirdCard, clozeCards.fourthCard, clozeCards.fifthCard, clozeCards.sixthCard, clozeCards.seventhCard];

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
	console.log('Welcome to FLASH CARDS')
	inquirer.prompt([ {

		type: 'confirm',
		message: 'Are you ready to study? *snort*',
		name: 'confirm',
		default: true
		}
		]).then(function(answer) {
			if (answer.confirm === true) {
				console.log("Now that's what I'm talking about!!");
				console.log("Today we're studying your knowledge on: Sofia Coppola trivia")
				flashcards();
			}
			else {
				console.log("That's OK. Come back when you're feeling studious.");
			}
		})
		
	
}

intro();
var flashcards = function() {
    if (place < 7) {
    	var question = cards[place].text;
        question = question.replace(cards[place].cloze, ".....");
        //console.log("It's going");
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
                flashcards();
            } else {
                console.log('Incorrect! The answer was: ' + cards[place].cloze);
                place++
                incorrect++;
                flashcards();
            }
        })
    } else {
    	console.log('No more cards! Number of correct guesses: ' + correct + ' Number of incorrect answers: ' + incorrect);
    }
}
//flashcards();
