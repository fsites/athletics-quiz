$(document).ready(function() {

/*QUESTIONS ARRAY*/
var questions = [
	{question: "Who managed the Oakland A's from 2007-2011?",
	answers: ["Bob Geren", "Tony La Russa", "Charlie Manuel", "Ozzie Guillen"],
	correct: 0},

	{question: "Which pitcher won the 1992 Cy Young Award with the Oakland A's?",
	answers: ["Randy Johnson", "Roger Clemens", "Dennis Eckersley", "David Cone"],
	correct: 2},

	{question: "Who has the most all time home runs for the Oakland A's?",
	answers: ["Reggie Jackson", "Mark McGwire", "Willie McCovey", "Jose Canseco"],
	correct: 1},

	{question: "Where did the Oakland A's franchise originate?",
	answers: ["Kansas City", "Washington D.C.", "Chicago", "Philadelphia"],
	correct: 3},

	{question: "Which former A's player holds the record for most stolen bases in MLB history?",
	answers: ["Reggie Jackson", "Mo Vaughn", "Willie McCovey", "Rickey Henderson"],
	correct: 3},

	{question: "Which city has not been home for the A's franchise?",
	answers: ["Oakland", "Kansas City", "Brooklyn", "Philadelphia"],
	correct: 2},

	{question: "The A's won how many games during their historic winning streak in 2002?",
	answers: ["19", "20", "21", "22"],
	correct: 1},

	{question: "Which player does not have thier number retired with the A's?",
	answers: ["Reggie Jackson", "Vida Blue", "Rickey Henderson", "Dennis Eckersley"],
	correct: 1},

	{question: "In what year did the A's have their highest winning percentage over a 162 game season?",
	answers: ["1988", "2002", "1990", "2001"],
	correct: 0},

	{question: "The A's current spring training facility, Hohokam Stadium, is located in what Arizona city?",
	answers: ["Phoenix", "Scottsdale", "Tempe", "Mesa"],
	correct: 3},

	{question: "The A's former spring training facility is located in what Arizona city?",
	answers: ["Phoenix", "Scottsdale", "Tempe", "Mesa"],
	correct: 0},

	{question: "What 2 franchises have the closest active MLB stadiums?",
	answers: ["A's and Giants", "Yankees and Mets", "Angels and Dodgers", "Cubs and White Sox"],
	correct: 1},

	{question: "When did the A's first play in the Oakland Coliseum?",
	answers: ["1966", "1967", "1968", "1969"],
	correct: 2},

	{question: "When did the Oakland Coliseum open?",
	answers: ["1966", "1967", "1968", "1969"],
	correct: 0},

	{question: "How much does it cost to convert the Coliseum from baseball to football each time?",
	answers: ["$90,000", "$150,000", "$250,000", "$300,000"],
	correct: 2},

	{question: "Who holds the franchise record for most home runs in a single season?",
	answers: ["Reggie Jackson", "Mark McGwire", "Jimmie Foxx", "Jose Conseco"],
	correct: 2},

	{question: "Rickey Henderson stole 130 bases in 1982, but was caught how many times in the same year?",
	answers: ["20", "42", "51", "35"],
	correct: 1},

	{question: "In what year did Dennis Eckersley set the franchise record with 51 saves in a season?",
	answers: ["1988", "1990", "1991", "1992"],
	correct: 3},

	{question: "Who has the best winning percentage as an A's manager?",
	answers: ["Dick WIlliams", "Bob Melvin", "Tony La Russa", "Connie Mack"],
	correct: 0},

	{question: "The Oakland Athletics have won the World Series the same amount of times as the Giants, Angels, and Rangers combined.",
	answers: ["False", "True"],
	correct: 1},
];

/*GLOBAL VARIABLES*/
var questionNum = 0
var numberCorrect = 0

/*HIDES QUESTIONS and PERCENT on PAGE LOAD*/
$('.content').hide();
$('#percent-display').hide();


/*HIDES BEGIN BUTTON ON CLICK, SHOWS FIRST QUESTION*/
$('#begin-button').click(function(){
	$('#begin').hide();
	$('.content').fadeIn(700);
	$('#feedback').text("Select an Answer and press Submit");
	question();
})


/*HELPER FUNCTION - LOADS QUESTION and ANSWERS*/
function question() {
	console.log("questionNum = " + questionNum);
	if (questionNum < questions.length) {
		$('.question').text(questions[questionNum].question);
		for (i = 0; i < questions[questionNum].answers.length; i++) {
			$('.answers').prepend("<input type='radio' name='answer' class='radio' value=' "+ i +" '>" 
				+ questions[questionNum].answers[i] 
				+ "<br>");
			}
		}
	else {
		quizEnd()
	}
}

/*HELPER FUNCTION - REMOVES RADIO BUTTONS*/
function removeAnswers() {
	$('.radio').remove();
	$('.answers').empty();
}

/*HELPER FUNCTION - ENDS QUIZ and DISPLAYS RESULTS*/
function quizEnd() {
		$('.question').hide(1000);
		$('.answerform').hide(1000);
		$('#current-numbers').hide(1500);
		$('#feedback').text("You got " 				
			+ numberCorrect 
			+ " out of " + questions.length + " correct or");
		$('#percent-display').fadeIn(1500).text(Math.round((numberCorrect/questions.length) * 100) + '%');
}

/*HELPER FUNCTION - DISPLAYS NUMBER CORRECT and TOTAL QUESTIONS*/
function currentNumbers(){
	$('#current-numbers').text("#" + (questionNum + 1) + "/" + questions.length +
		" | Correct " + numberCorrect + "/" + questionNum);
};
		
/*SUBMIT CLICKED FUNCTION*/
$('#submitbutton').click(function() {
	//local variables to be compared
	var userAnswer = $('input[type=radio]:checked').val();
	var correctAnswer = questions[questionNum].correct;
		//Checks answers and moves to next question
		if (userAnswer == null) {
			$('#feedback').text("You need to pick something...")}
		else if (userAnswer == correctAnswer) {
			$('#feedback').text("Correct!")
			removeAnswers()
			questionNum++
			numberCorrect++
			currentNumbers()
			question()	
		}
		else {
			$('#feedback').text("Nope, the correct answer is " + questions[questionNum].answers[correctAnswer])
			removeAnswers()
			questionNum++
			currentNumbers()
			question()
		};
	console.log('submit clicked')
	console.log('userAnswer is ' + userAnswer)
	return false;
})

});