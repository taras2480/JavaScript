'use strict'

//Спочатку отримуємо кількість тегів Li
function getQttyTagsLi() {

	let elements = document.querySelectorAll('ul>li');

	for (var i = 0; i < elements.length; i++) {
		let currentElement = elements[i];

	}

	let p = document.createElement('p');
	p.className = "alert";
	p.innerHTML = 'Q-ty elements with tags li: ' + i;

	document.body.append(p);

}

//Заповнюємо список
function selectTagsByLi() {

	let elements1 = document.getElementById('1');
	console.log(elements1.innerHTML);
	elements1.innerHTML = 'Text 1';

	let elements2 = document.getElementById('2');
	console.log(elements2.innerHTML);
	elements2.innerHTML = 'Text 2';

	let elements3 = document.getElementById('3');
	console.log(elements3.innerHTML);
	elements3.innerHTML = 'Text 3';

	let elements4 = document.getElementById('4');
	console.log(elements4.innerHTML);
	elements4.innerHTML = 'Text 4';

	let elements5 = document.getElementById('5');
	console.log(elements5.innerHTML);
	elements5.innerHTML = 'Text 5';

	let elements6 = document.getElementById('6');
	console.log(elements6.innerHTML);
	elements6.innerHTML = 'Text 6';

}
