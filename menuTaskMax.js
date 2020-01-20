'use strict'

let menuElem = document.getElementById('education');
let titleElem = menuElem.querySelector('.title');

titleElem.onclick = function() {
	menuElem.classList.toggle('open')//при першому натисканні присвоює клас open,при другому - видаляє даний клас;
};