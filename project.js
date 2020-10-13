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
		questVal1:
			'A function name can be omitted because the function can be called in a statement this is called: an anonymous function. True or False',
		answer: { a: 'false', b: 'True'
	},
	correctAnswer: 'b'
	},
	{
		questVal2: 'function functionName(parameter){}. What is this called? ',
		answer: { a:'declaration syntax of a function', b: 'array syntax'
	},
	correctAnswer: 'a'
	},
	{
		questVal3:
			'What is this function called? hello =() => {   return "Hello World"}',
		answer: { a: 'arrow function', b: 'equality function'
	},
	correctAnswer: 'a'
}, 
	{
		questVal4: 'How many primitive data-types are used in JavaScript?',
		answer: { a: '3', b: '6'
	},
correctAnswer: 'b'
	},
	{
		questVal5: 'Name the datatypes that are used in JavaScript.',
		answer: { a: 'Boolens, Null,Undefined, Number, String, and Symbols',
		b: 'Number, Classes, Arrays, String, Null, Gifs'  
	},
	correctAnswer: 'a'
},
{
		question:
			'Is this a condition and what type?  Ex. let i   for(i=0; i<100; i++{ statement-be-executed}',
		answer: { a:'Yes, For Loop', b: 'No, While Loop'
	},
	correctAnswer: 'a'
},

		
];


function finalScore(){
let i = 0;
let correct = 0;
let selectValue;
let question = document.getElementsByClassName('questBank')
let select1 = document.getElementById("questVal1");
let answer1 = select1.options[select1.selectedIndex].value;
    if(answer1 == "right"){
        i++;
    }

let select2 = document.getElementById("questVal2");
let answer2 = select2.options[select2.selectedIndex].value;
    if(answer2 == "right"){
        i++;
    }

let select3 = document.getElementById("questVal3");
let answer3 = select3.options[select3.selectedIndex].value;
    if(answer3 == "right"){
        i++;
	}
	let select4 = document.getElementById("questVal4");
let answer4 = select4.options[select4.selectedIndex].value;
    if(answer4 == "right"){
        i++;
	}
	let select5 = document.getElementById("questVal5");
let answer5 = select5.options[select5.selectedIndex].value;
    if(answer5== "right"){
        i++;
    }
	document.getElementById("scoreDisplay").innerHTML = i;

}
function finalScore() {
	let answersCorrect = 0;
    let answersCounter = 0;
    foreach ("select" );{
		let rightOrWrong = "get value";
        if (rightOrWrong = right) {
			answersCorrect++
        }
        answersCounter++;
    }
    let finalScore = Math.floor((answersCorrect / answersCounter) * 10);
    document.getElementById("scoreDisplay").innerHTML = finalScore;
}
const btn = document.getElementById('btn');
//initialize an index variable to store current array element index
let index = 0;
const questionArea = document.querySelector('.cardArea');
//setting the question iinnerText to the first array element
questionArea.innerText = questBank[index].question;
const buttonArea = document.querySelector('.buttonArea');
btn.addEventListener('click', () => {
	console.log('You clicked the button');
	buttonArea.innerText = questBank[index].question;
});
// setting the index to increment through the array
const nextButton = document.querySelector('.nextButton');
nextButton.addEventListener('click', () => {
	index++;
	questionArea.innerText = questBank[index].answer;
	buttonArea.innerText = '';
	if (index === 9) {
		alert('Well Done!');
		index = 0;
		questionArea.innerText = questBank[index].question;
	} else {
	}
	console.log('clicked');
});

//reset button and text
nextButton.addEventListener('reset', () => {
	questionArea.innerText = questBank[index].question;
	buttonArea.innerText = 'Well Done!';
});
//.onclick
