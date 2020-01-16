'use strict'

function changeColorToRed() {
	let elements = document.querySelectorAll('li>a');
	for (var i = 0; i < elements.length; i++) {
		let elAtribute = elements[i].href;
		if (((elAtribute.search('http:') != -1) || (elAtribute
				.search('ftp:') != -1))
				&& (elAtribute.search('internal') == -1))
			elements[i].classList.add('external-red');
	}
}