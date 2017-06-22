

var clozeCard = function(text, cloze) {
	this.text = text;
	this.cloze = cloze;

};

exports.firstVocabulary = new clozeCard("Sofia Coppola was the first female director to win at Cannes in 50 years.", "Sofia Coppola");
exports.secondVocabulary = new clozeCard("Sofia Coppola's father is Francis Ford Coppola which is the famous director of the Godfather series.", "Francis Ford Coppola");
exports.thirdVocabulary = new clozeCard("Marie Antoinette was Sofia Coppola's third film.", "Marie Antoinette");
exports.fourthVocabulary = new clozeCard("Lance Acord was the cinematographer for Sofia's first three films. He also has worked on famous films such as 'Where The Wild Things Are'", "Lance Acord");



//module.exports = clozeCard;