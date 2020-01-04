"use strict"

function camelize(str) {
	let string = str.split('-');
	for (let i = 1; i < string.length; i++) {
		string[i] = string[i].toUpperCase().charAt(0)
				+ string[i].slice(1, string[i].lenght);
	}
	return string.join('');
}

console.log(camelize('my-short-string'));