"use strict";

function alert(text) {

	console.log(text);

}

function math(num1, num2) {

	alert(num1 + num2);
	alert(num1 - num2);
	alert(num1 * num2);
	alert(num1 / num2);

	try {

		if (isNaN(num1) || isNaN(num2))
			throw "Це не число";

	} catch (err) {

		console.log(err);

	}
	try {

		if (num2==0)
			throw "На нуль ділити не можна";

	} catch (err) {

		console.log(err);

	}

}

math('ggdfgdf', 'fdsfds');
