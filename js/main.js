// Game over function
// Two players
	// change score to playerOneScore and playerTwoScore
	// 
 
 var questions = [
 {
	id: '11',
	category: 'The Arts',
	q: 'Rhapsody in Blue is a musical composition by which American composer?',
	ans1: 'A. Franz Liszt',
	ans2: 'B. George Gerswin',
	ans3: 'C. Sergei Rachmaninoff',
	ans4: 'D. Claude Debussy',
	answer: 'ans2',
	points: 100,

}, 

{
	id: '12',
	category: 'The Arts',
	q: 'Which 20th century painter made their permanent home in New Mexico and painted the desert terrian?',
	ans1: 'A. Salvador Dali',
	ans2: 'B. Frida Kahlo',
	ans3: 'C. Georgia O\'Keefe',
	ans4: 'D. Jackson Pollock',
	answer: 'ans3',
	points: 200,

	},
{

	id: '13',
	category: 'The Arts',
	q: 'The Bolshoi Ballet is an internationally renowned ballet company founded in which country?',
	ans1: 'A. Russia',
	ans2: 'B. Poland',
	ans3: 'C. Ukraine',
	ans4: 'D. United States',
	answer: 'ans1',
	points: 300,

},

{

	id: '14',
	category: 'The Arts',
	q: 'When was "The Golden Age of Illustration"?',
	ans1: 'A. 1750-1800',
	ans2: 'B. 1880-1920',
	ans3: 'C. 1930-1940',
	ans4: 'D. 1600-1650',
	answer: 'ans2',
	points: 400,

},

{

id: '15',
category: 'The Arts',
q: 'Which country was the paleolithic figurine "The Venus of Willendorf" found?',
ans1: 'A. China',
ans2: 'B. Romania',
ans3: 'C. Austria',
ans4: 'D. France',
answer: 'ans3',
points: 500,

},

{

id: '21',
category: 'World Leaders',
q: 'Who is the current Prime Minister of Canada?',
ans1: 'A. Theresa May',
ans2: 'B. Emmanuel Macron',
ans3: 'C. Justin Trudeau',
ans4: 'D. Angela Merkel',
answer: 'ans3',
points: 100,

},

{

id: '22',
category: 'World Leaders',
q: 'Who is the current Prime Minister of Israel?',
ans1: 'A. Benjamin Netanyahu',
ans2: 'B. Ariel Sharon',
ans3: 'C. Yitzhak Rabin',
ans4: 'D. Yasser Arafat',
answer: 'ans1',
points: 200,

},

{

id: '23',
category: 'World Leaders',
q: 'Which Egyptian politician was the Secretary-General of the United Nations from 1992-1996?',
ans1: 'A. Anwar Sadat',
ans2: 'B. Gamal Abdel Nasser',
ans3: 'C. Abdel Fattah el-Sisi',
ans4: 'D. Boutros Boutros-Ghali',
answer: 'ans4',
points: 300,

},

{

id: '24',
category: 'World Leaders',
q: 'The 1971 Ugandan coup was led by which military general who later became President?',
ans1: 'A. Idi Amin',
ans2: 'B. Mummar Gaddafi',
ans3: 'C. Milton Obote',
ans4: 'D. Yoweri Mudseveni',
answer: 'ans1',
points: 400,

},

{

id: '25',
category: 'World Leaders',
q: 'Which Tunisian President was ousted during the "Arab Spring"?',
ans1: 'A. Hosni Mubarak',
ans2: 'B. Habib Bourguiba',
ans3: 'C. Zine El Abidine Ben Ali',
ans4: 'D. Beji Caid Essebsi',
answer: 'ans3',
points: 500,

},


{

id: '31',
category: 'Film Directors',
q: 'Which director filmed the 1972 film "The Godfather"?',
ans1: 'A. Michael Bay',
ans2: 'B. Francis Ford Coppola',
ans3: 'C. Ron Howard',
ans4: 'D. Orson Welles',
answer: 'ans2',
points: 100,

},

{

id: '32',
category: 'Film Directors',
q: '"E.T. the Extra-Terrestrial was directed by which American film maker?',
ans1: 'A. Steven Speilberg',
ans2: 'B. James Cameron',
ans3: 'C. Tim Burton',
ans4: 'D. George Lucas',
answer: 'ans1',
points: 200,

},

{

id: '33',
category: 'Film Directors',
q: '"2001: A Space Odyssey" was made by which American film maker?',
ans1: 'A. Martin Scorsese',
ans2: 'B. Robert Altman',
ans3: 'C. Quentin Tarantino',
ans4: 'D. Stanley Kubrick',
answer: 'ans4',
points: 300,

},

{

id: '34',
category: 'Film Directors',
q: 'Which Italian film maker known for his fantasy and unique style directed the film "La Dolce Vita"?',
ans1: 'A. Roberto Rossellini',
ans2: 'B. Michelangelo Antonioni',
ans3: 'C. Federico Fellini',
ans4: 'D. Bernardo Bertolucci',
answer: 'ans3',
points: 400,

},

{

id: '35',
category: 'Film Directors',
q: 'The movie "Dreams" was the last film of which famous Japanese director?',
ans1: 'A. Takashi Miike',
ans2: 'B. Akira Kurosawa',
ans3: 'C. Kenji Mizoguchi',
ans4: 'D. Shohei Imamura',
answer: 'ans2',
points: 500,

},

{

id: '41',
category: 'Mythology',
q: 'Which Greek goddess was knowns as goddess of beauty, love, desire, and pleasure?',
ans1: 'A. Andromeda',
ans2: 'B. Helen of Troy',
ans3: 'C. Athena',
ans4: 'D. Aphrodite',
answer: 'ans4',
points: 100,

},

{

id: '42',
category: 'Mythology',
q: 'Which Greek god was known as the god of boundaries, travel, communication, trade, language, and writing?',
ans1: 'A. Hermes',
ans2: 'B. Hades',
ans3: 'C. Apollo',
ans4: 'D. Zeus',
answer: 'ans1',
points: 200,

},


{

id: '43',
category: 'Mythology',
q: 'Which Egyptian deity\'s prominent role was maintaining the universe?',
ans1: 'A. Isis',
ans2: 'B. Ma\'at',
ans3: 'C. Anubis',
ans4: 'D. Thoth',
answer: 'ans4',
points: 300,

},

{

id: '44',
category: 'Mythology',
q: 'Which Roman god is known as the god of the sky and thunder?',
ans1: 'A. Jupiter',
ans2: 'B. Mars',
ans3: 'C. Vulcan',
ans4: 'D. Mercury',
answer: 'ans1',
points: 400,

},


{

id: '45',
category: 'Mythology',
q: 'Which Roman god is depicted as having two-faces and is known as the god of beginnings, gates, transitions, time, duality, passages, and endings?',
ans1: 'A. Minerva',
ans2: 'B. Ceres',
ans3: 'C. Janus',
ans4: 'D. Vesta',
answer: 'ans3',
points: 500,

},


{

id: '51',
category: 'Philosophy',
q: 'Which Greek philosopher wrote "The Republic"?',
ans1: 'A. Plato',
ans2: 'B. Aristotle',
ans3: 'C. Socrates',
ans4: 'D. Plutarch',
answer: 'ans1',
points: 100,

},

{

id: '52',
category: 'Philosophy',
q: 'The book "Thus Spoke Zarathustra" was written by which philosopher?',
ans1: 'A. Immanuel Kant',
ans2: 'B. Rene Descartes',
ans3: 'C. Friedrich Nietzche',
ans4: 'D. Soren Kierkegaard',
answer: 'ans3',
points: '200',

},

{

id: '53',
category: 'Philosophy',
q: 'Which French philosopher is known for their work in post-structuralism and postmodern philosophy?',
ans1: 'A. Simone de Beauvoir',
ans2: 'B. Voltaire',
ans3: 'C. Jean-Paul Sartre',
ans4: 'D. Jacques Derrida',
answer: 'ans4',
points: 300,

},

{

id: '54',
category: 'Philosophy',
q: 'Which artist is known for his painting "The School of Athens" which depicts nearly every great Greek philosopher?',
ans1: 'A. El Greco',
ans2: 'B. Michelangelo',
ans3: 'C. Caravaggio',
ans4: 'D. Raphael',
answer: 'ans4',
points: 400,

},

{

id: '55',
category: 'Philosophy',
q: 'Which philosopher who is known primarily for his work in logic, mathematics, and linguistics and published the book "Tractatus Logico-Philosophicus"?',
ans1: 'A. Karl Marx',
ans2: 'B. Friedrich Engels',
ans3: 'C. Ludwig Wittgenstein',
ans4: 'D. Bertrand Russel',
answer: 'ans3',
points: 500,

},

];

const categories = function(name, id) {
	this.catName = name;
	this.catId = id;
}
var cat1 = new categories(
	"The Arts",
	'1',
	)
var cat2 = new categories(
	"World Leaders",
	'2',
	)
var cat3 = new categories(
	"Film Directors",
	'3',
	)
var cat4 = new categories(
	"Mythology",
	'4',
	)
var cat5 = new categories(
	"Philosophy",
	'5',
	)

window.onload = function() {
	createBoard(1, cat1.catName, cat1.catId);
	createBoard(2, cat2.catName, cat2.catId);
	createBoard(3, cat3.catName, cat3.catId);
	createBoard(4, cat4.catName, cat4.catId);
	createBoard(5, cat5.catName, cat5.catId);
	initScore(score);
	alert('Welcome to Jeopardy');
}

var score = 0;
var initScore = function(playerScore) {
	$('#score_num').html(playerScore);
}


var createBoard = function(colNum, catName, catId) {
	var points = 100;
	for (var i = 0; i <=5; i++) {
		if (i === 0) {
			var $catName = $('<div>');
			$catName.addClass('category');
			$catName.html(catName);
			$('#column'+colNum).append($catName);
		} else {
			var $tile = $('<button>');
			$tile.addClass('game_tile');
			var x = catId + '' + i;
			var y = parseInt(x);
			$tile.attr('id', y);
			$tile.attr('points', points);
			$tile.html(points);
			points+=100;
			$tile.on('click', function() {
				showQuestion(event);
			});
			$tile.appendTo("#column" + colNum);
		}
	}
}

var showQuestion = function(event) {
	event.target.disabled = true;
	event.target.style.color = 'black';

	var $modal = $('#question_modal');
	$modal.show();

	var filtered = questions.filter(function(filtered){
		
		return filtered.id == event.target.id;
	});
	filtered = filtered[0];

	var $modalContent = $('#modal_c');
	var $questionToAnswer = $('#question_area');
	$questionToAnswer.text(filtered.q);

	var correctAnswer=filtered.answer;
	$modal.attr('correct', correctAnswer);

	var $ans1 = $('#ans1');
	$ans1.html(filtered.ans1);
	var $ans2 = $('#ans2');
	$ans2.html(filtered.ans2);
	var $ans3 = $('#ans3');
	$ans3.html(filtered.ans3);
	var $ans4 = $('#ans4');
	$ans4.html(filtered.ans4);

	var $pointsWorth = $('#points-worth');
	$pointsWorth.text(filtered.points);

	$('.answer').attr('points', filtered.points);
	$('.answer').on('click', function(event) {                     /// CHECK CORRECT FUNCTION
		if (this.id == $('#question_modal').attr('correct')) {
			alert('Correct!');
			score += parseInt($(this).attr('points'), 10);
			$('#score_num').html(score);
			$('#question_modal').hide();
		} else if (this.id != $('#question_modal').attr('correct')){
			alert('Incorrect!');
			score -= parseInt($(this).attr('points'), 10);
		}	
	});

}








// ALL INSIDE CLICK EVENT CALLBACK

// 1) pull out id value from the event.target or $(this) using jquery
// or whatever

// now initiate this loop (still inside callback)
// purpose: iterate over every element (question object) inside questions array
// stop when you find the question whose 'questionId' value is equal to the id of the 
// thing that was clicked
//for (var i = 0; i < questions.length; i++) {
//	if (clickedId === questions[i].questionId) {
		// do something and break out of loop
		//assign the question object you found to a variable
	// }
// }

// NOW OUTSIDE loop
// use the info from the question variable (i.e. question, category, answer, points, etc)
// utilize that to change info in your modal that pops up the question




// then select the container and do 
// itemToAddTo.innerHTML = array[i].property 1 + ' ' + array[i].property 2 etc...




// for (int i=0; i<JsonArray.length; i++) {
//	var question = JsonArray[i];
//	var htmlString = "<div>"+question['name']+"</div>";
//	$("#questions-element").append(htmlString);
// }



// <div id="modalInviteArea" class="modal" style="display: none;">
//	<div class="modal-content">
//		<h4>HEADER!</h4>
//		<p class="add-margin-top-30 add-margin-bottom-30">Content!</p>
//	</div>
// </div>



//var currentQuestion = 0;

//function createCurrentQuestion() {
	//var currentQuestionObject = JSONArray[currentQuestion];
	// $("#myQuestionDiv").html(currentQuestionObject['html']);
// }

// $(document).ready(function() {
	// $("#nextButton").on('click', function(){
		 //if (currentQuestion < yourJSONArray.length) {
			// currentQuestion++;
			// createCurrentQuestion();
		// }
//	});
//	$("#prevButton").on('click', function(){
//		if (currentQuestion > 0) {
//			currentQuestion++;
//			createCurrentQuestion();
//		}
//	});
// });

