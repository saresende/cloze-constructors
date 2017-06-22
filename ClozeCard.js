

var clozeCard = function(text, cloze) {
	this.text = text;
	this.cloze = cloze;

};

exports.firstCard = new clozeCard("Sofia Coppola recently won the 'Best Director' category at Cannes, being only the second female to do so. ", "Sofia Coppola");
exports.secondCard = new clozeCard("Francis Ford Coppola is Sofia Coppola's father, who was the famous director of the Godfather series. ", "Francis Ford Coppola");
exports.thirdCard= new clozeCard("Marie Antoinette was Sofia Coppola's third film, protraying the youth and life of the late French queen. ", "Marie Antoinette");
exports.fourthCard = new clozeCard("Lance Acord was the cinematographer for three of Sofia's films. He also has worked on films such as 'Where The Wild Things Are.' ", "Lance Acord");
exports.fifthCard = new clozeCard("Kirsten Dunst is the blonde starlet who has appeared and/or starred in four of Sofia Coppola's films. ", "Kirsten Dunst");
exports.sixthCard = new clozeCard("Sofia Coppola's latest film, called 'The Beguiled', recently screened at Cannes 2017. ", "The Beguiled");
exports.seventhCard = new clozeCard("Off topic subject: Samuel Resende is single handedly the most dashing and quick witted student of the 2017 Full Time Full Stack Web Development Course at the University of Central Florida. ", "Samuel Resende");


//module.exports = clozeCard;