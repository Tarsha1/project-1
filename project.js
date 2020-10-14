const activityTitle = document.getElementById('activityTitle');
const title = document.getElementById('title');
//console.log('title');
const button = document.querySelector('#buttonArea');
const cardArea = document.querySelectorAll('.cardArea');
let questBank = [
	{
		questVal:
			'A function name can be omitted because the function can be called in a statement this is called an anonymous function. True or False?',
		answers: ['a: false', 'b: True'],
		correctAnswer: 'b',
	},
	{
		questVal: 'function functionName(parameter){}. What is this called? ',
		answer: ['a: declaration syntax of a function', 'b: array syntax'],
		correctAnswer: 'a',
	},
	{
		questVal:
			'What is this function called? hello =() => {   return "Hello World"}',
		answer: ['a: arrow function', 'b: equality function'],
		correctAnswer: 'a',
	},
	{
		questVal: 'How many primitive data-types are used in JavaScript?',
		answer: ['a: 3', 'b: 6'],
		correctAnswer: 'b',
	},
	{
		questVal: 'Name the datatypes that are used in JavaScript.',
		answer: [
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
});
// setting the index to increment through the array
// const questVal = document.querySelector('.questVal');
let nextButton = document.getElementsByClassName('nextButton')[0];
nextButton.addEventListener('click', () => {
	index++;
	questionArea.innerText = questBank[index].questVal;
	answerArea.innerText = '';
	if (index === 4) {
		alert('Well Done!');
		index = 0;
		questionArea.innerText = questBank[index].questVal;
	} else {
	}
});

//reset button and text
questionArea.addEventListener('reset', () => {
	questionArea.innerText = question[index].answer;
	buttonArea.innerText = 'Well Done!';
});
