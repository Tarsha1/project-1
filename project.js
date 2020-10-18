const openBtn = document.getElementById('openModal');
const modal = document.getElementById('modal');
const close = document.getElementById('close');
const openModal = () => {
	modal.style.display = 'block';
};
function closeModal() {
	modal.style.display = 'none';
}
openBtn.addEventListener('click', openModal);
close.addEventListener('click', closeModal);

const activityTitle = document.getElementById('activityTitle');
const title = document.getElementById('title');

const button = document.querySelector('#buttonArea');
const cardArea = document.querySelectorAll('.cardArea');
let questBank = [
	{
		questVal:
			'A function name can be omitted because the function can be called in a statement this is called an anonymous function. True or False?',
		answers: ['a: False', 'b: True'],
		correctAnswer: 'b',
	},
	{
		questVal: 'function functionName(parameter){}. What is this called? ',
		answers: ['a: declaration syntax of a function', 'b: array syntax'],
		correctAnswer: 'a',
	},
	{
		questVal:
			'What is this function called? hello =() => {   return "Hello World"}',
		answers: ['a: arrow function', 'b: equality function'],
		correctAnswer: 'a',
	},
	{
		questVal: 'How many primitive data-types are used in JavaScript?',
		answers: ['a: 3', 'b: 6'],
		correctAnswer: 'b',
	},
	{
		questVal: 'Name the datatypes that are used in JavaScript.',
		answers: [
			'a: Boolens, Null,Undefined, Number, String, and Symbols',
			'b: Number, Classes, Arrays, String, Null, Gifs',
		],
		correctAnswer: 'a',
	},
];

const btn = document.getElementById('btn');

//initialize an index variable to store current array element index
let index = 0;
const questionArea = document.querySelector('.cardArea');
//setting the question innerText to the first array element
questionArea.innerText = questBank[index].questVal;
const answerArea = document.getElementsByClassName('answerArea')[0];
const buttonArea = document.querySelector('.buttonArea');
btn.addEventListener('click', () => {
	answerArea.innerText =
		questBank[index].answers[0] + ' ' + questBank[index].answers[1];

	console.log(index);
});

let nextButton = document.getElementsByClassName('nextButton')[0];
nextButton.addEventListener('click', () => {
	index++;
	if (5 <= index) {
		alert('Well Done!');
		index = 0;
		questionArea.innerText = questBank[index].questVal;
	} else {
		questionArea.innerText = questBank[index].questVal;
		answerArea.innerText = '';
	}
	console.log(questBank.length);
	console.log(index);
});

//reset button and text
questionArea.addEventListener('reset', () => {
	questionArea.innerText = question[index].answer;
	buttonArea.innerText = 'Well Done!';
});
//Score board
function finalScore() {
	let i = 0;
	let correct = 10;
	let selectValue;
	let question = document.getElementsByClassName('questBank');
	let select = document.getElementById('questVal');
	let answer = select.options[select.selectedIndex].value;
	if (answer == 'right') {
		i++;
	}

	let select2 = document.getElementById('questVal2');
	let answer2 = select2.options[select2.selectedIndex].value;
	if (answer2 == 'right') {
		i++;
	}

	let select3 = document.getElementById('questVal3');
	let answer3 = select3.options[select3.selectedIndex].value;
	if (answer3 == 'right') {
		i++;
	}
	let select4 = document.getElementById('questVal4');
	let answer4 = select4.options[select4.selectedIndex].value;
	if (answer4 == 'right') {
		i++;
	}
	let select5 = document.getElementById('questVal5');
	let answer5 = select5.options[select5.selectedIndex].value;
	if (answer5 == 'right') {
		i++;
	}
	document.getElementById('scoreDisplay').innerHTML = index;
}
function finalScore() {
	let answersCorrect = 0;
	let answersCounter = 0;
	foreach('select');
	{
		let rightOrWrong = 'get value';
		if ((rightOrWrong = right)) {
			answersCorrect++;
		}
		answersCounter++;
	}
	let finalScore = Math.floor((answersCorrect / answersCounter) * 20);
	document.getElementById('scoreDisplay').innerHTML = finalScore;
}
