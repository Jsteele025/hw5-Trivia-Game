//initialize variables
var output="";


//DATA
var questions = [
	{
		question: 'What was the first full length CGI movie?', 
		answers: [
			{
				answer: 'A Bugs Life',
				value: 1
			},
			{
				answer: 'Monsters Inc.',
				value: 2
			},
			{
				answer: 'Toy Story',
				value: 3
			},
			{
				answer: 'The Lion King',
				value: 4
			}

		],
		userInput: '',
		userValue: '',
		correctValue: 3,
		questionNumber: 1
	},
	{
		question: 'Which of these is not a name of one of the Spice Girls?', 
		answers: [
			{
				answer: 'Sporty Spice',
				value: 1
			},
			{
				answer: 'Old Spice',
				value: 2
			},
			{
				answer: 'Scary Spice',
				value: 3
			},
			{
				answer: 'Posh Spice',
				value: 4
			}

		],
		userInput: '',
		userValue: '',
		correctValue: 2,
		questionNumber: 2
	}

]


//Start Game Handler
document.querySelector('.start-button').addEventListener('click', function() {
	startGame();
})

//Start Game Function
function startGame() {
	console.log('game has begun!!!')

	//Print Timer
	timeLeft=15;
	output += '<h2>Time Left: <span class="countdown">' + timeLeft + '</span></h2>';
	//Start the timer
	countdownTimer();

	//show questions
	printQuestions();

	//Print to screen
	document.querySelector('.output').innerHTML = output;
}
 
function countdownTimer() {	
	//countdown	
	var triviaTimer = setInterval(function() {
		document.querySelector('.countdown').innerHTML = timeLeft --;
		if(timeLeft <= -1) {
			clearInterval(triviaTimer);
			endGame();
		}
	}, 1000);
}

function endGame() {
	console.log('game ended');
	output='';
	output += "<h2>Game is OVER!!<h2>"
	document.querySelector('.output').innerHTML = output;
}

function printQuestions() {
	for(let i = 0; i < questions.length; i ++) {
		output += '<h4>'+questions[i].question;+'</h4>';

		for(let n = 0; n < questions[i].answers.length; n ++ ) {
			output += '<input class="radio-button" type="radio" value="'+ questions[i].answers[n].value +'" name="'+questions[i].questionNumber +'"> '+questions[i].answers[n].answer+'</input><br>';
			
			// document.querySelector('.radio-button').addEventListener('click', function(){
			// 	questions[i].userInput = this.value;
			// 	console.log('this.value');
			// })
		}
	}
}
