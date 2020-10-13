//Functionality
//make an area for the question and answer bank

//questBank{}

//displayArray{}

//eventListeners{}

//resetValues{}

//-----------------
//Gold MVP

//1. User Interface
//2. Build on the Q&A by adding more Q&A's
//3. Give the app some interactive properties like voice
//("Good Job!")

const activityTitle = document.getElementById('activityTitle');
const title = document.getElementById('title');
//console.log('title');
const button = document.querySelector('#buttonArea');
const cardArea = document.querySelectorAll('.cardArea');
let questBank = [
	{
		question:
			'A function name can be omitted because the function can be called in a statement this is called: an anonymous function. True or False',
		answer: 'True',
	},
	{
		question: 'function functionName(parameter){}. What is this called? ',
		answer: 'declaration syntax of a function',
	},
	{
		question:
			'What is this function called? hello =() => {   return "Hello World"}',
		answer: 'arrow function',
	},
	{
		question: 'How many primitive data-types are used in JavaScript?',
		answer: '6',
	},
	{
		question: 'Name the datatypes that are used in JavaScript.',
		answer: 'Boolens, Null,Undefined, Number, String, and Symbols',
	},
	{
		question:
			'Is this a condition and what type?  let i   for(i=0; i<100; i++{ statement-be-executed}',
		answer: 'Yes, For Loop',
	},
	{
		question:
			'What is the postion of const in this function? const myFunc(parameter){}',
		answer: 'the keyword',
	},
	{
		question: 'What does a <div> tag do in HTML?',
		answer: 'It is used as a container for HTML elements.',
	},
	{
		question: 'Can an array make an object in JavaScript, yes or no?',
		answer: 'Yes',
	},
	{
		question:
			'What does this function allow you to do in JavaScript?  let row =  document.getElementById("rownum")',
		answer: "Allows you to get an element by it's ID",
	},
];
const box = document.getElementById('box');
const btn = document.getElementById('btn');
//initialize an index variable to store current array element index
let index = 0;
const questionArea = document.querySelector('.cardArea');
//settint the question iinnerText to the first array element
questionArea.innerText = questBank[index].question;
const buttonArea = document.querySelector('.buttonArea');
btn.addEventListener('click', () => {
	console.log('You clicked the button');
	buttonArea.innerText = questBank[index].answer;
});
// setting the index to increment through the array
const nextButton = document.querySelector('.nextButton');
nextButton.addEventListener('click', () => {
	console.log('clicked');
	index++;
	questionArea.innerText = questBank[index].question;
	buttonArea.innerText = '';
});

//reset button and text
nextButton.addEventListener('reset', () => {
	questionArea.innerText = questBank[index].question;
	buttonArea.innerText = 'Well Done!';
});
//.onclick
