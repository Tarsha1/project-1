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
activityTitle.style.textAlign = 'center';
activityTitle.style.fontWeight = 'bold';
const subTitle = document.querySelector('');
aside.appendChild(subTitle);
subTitle.style.fontSize = '25px';
subTitle.style.fontWeight = 'bold';

const jaaFunc = document.createElement('h2');
tableOfContentsTitle.innerText = 'Let\'s Learn JavaScript';
const aside = document.querySelector('aside');
console.log(aside);
aside.appendChild(jaaFunc);

let questBank = [
	{ image: 'arr1.png', answer: 'The slice method.' },
	{ image: 'arr2.png', answer: 'The pop method.' },
	{ image: 'arr3.png', answer: 'The Value.' },
	{ image: 'arr4.png', answer: 'For Loop' },
	{ image: 'func5.png', answer: 'Data-Types' },
	{ image: 'func4.png', answer: 'A nested array.' },
	{ image: 'func3.png', answer: 'A Keyword.' },
	{ image: 'func2.png', answer: 'The function declaration syntax.' },
	{ image: 'func1.png', answer: 'The arrow method.' },
	{ image: 'funcArr.png', answer: 'The anonyamous function.' },
];
for (let i = 0; i < arr.length; i += 1) {
	let items = getRandomItem(questBank);
	arr[i].innerHTML = arr.image + '<img src="' + arr.answer + '">';
	//console.log(questBank)
}
const answerDisplay = document.getElementById('answer').style.display = 'none';
    let ans = document.getElementById('answer');
    if(ans.style.display === 'none') {
        ans.style.display = 'block';
    
    }else {
        ans.style.display = 'none';
    }
}