var score = 0;

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
		questVal: 'Name the data types that are used in JavaScript?',
		answers: [
			'a: Boolens, Null,Undefined, Number, String, and Symbols',
			'b: Number, Classes, Arrays, String, Null, Gifs',
		],
		correctAnswer: 'a',
	},
	{
		questVal:
			'Is this a condition and what type? let i for(i=0; i<100; i++){ }',
		answers: ['a: Yes, a For Loop', 'b: No, aWhile Loop'],
		correctAnswer: 'a',
	},
	{
		questVal: 'Can an array make objects? Yes or No',
		answers: ['a: Yes', 'b: No'],
		correctAnswer: 'a',
	},
	{
		questVal:
			'What does const represent in this function? const myFunc(parameter){}',
		answers: ['a: A value', 'b: A keyword'],
		correctAnswer: 'b',
	},
	{
		questVal: 'What does a <div></div> do in html?',
		answers: [
			'a: It is used for a container for HTML elements',
			'b: It divides numbers',
		],
		correctAnswer: 'a',
	},
	{
		questVal:
			'What does this function allow you to do in JavaScript? let row = document.getElementById(rowNum){}',
		answers: ['a: nothing', "b: Allows you to get an element by it's ID"],
		correctAnswer: 'b',
	},
];
const playersScore = document.getElementById('score');
playersScore.innerText = 'score:' + score;
const btn = document.getElementById('btn');
//initialize an index variable to store current array element index
var index = 0;
const questionArea = document.querySelector('.cardArea');
//setting the question innerText to the first array element
questionArea.innerText = questBank[index].questVal;
const answerArea = document.getElementsByClassName('answerArea')[0];
console.log('ANSWER AREA: ', answerArea);
const optionA = document.getElementById('optionA');
const optionB = document.getElementById('optionB');
const buttonArea = document.querySelector('.buttonArea');
btn.addEventListener('click', () => {
	optionA.innerText = questBank[index].answers[0];
	optionB.innerText = questBank[index].answers[1];
	// answerArea.innerText = questBank[index].answers[0] + ' ' + questBank[index].answers[1];
	console.log(index);
});
optionA.addEventListener('click', () => {
	console.log('OPTION A CLICKED');
	// console.log(optionA.innerText[0])
	if (optionA.innerText[0] === questBank[index].correctAnswer) {
		console.log('CORRECT');
		score += 10;
		index += 1;
		playersScore.innerText = 'score:' + score;
	} else {
		console.log('WRONG');
		alert('wrong answer');
		index += 1;
	}
});
optionB.addEventListener('click', () => {
	console.log('OPTION B CLICKED');
	if (optionB.innerText[0] === questBank[index].correctAnswer) {
		console.log('CORRECT');
		alert('Correct');
		score += 10;
		index += 1;
		playersScore.innerText = 'score:' + score;
	} else {
		console.log('WRONG');
		alert('Wrong Answer');
		index += 1;
	}
});

let nextButton = document.getElementsByClassName('nextButton')[0];
nextButton.addEventListener('click', () => {
	questionArea.innerText = questBank[index].questVal;
	optionA.innerText = questBank[index].answers[0];
	optionB.innerText = questBank[index].answers[1];
});
