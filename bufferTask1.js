'use strict'

function makeBuffer() {

	let strBuff = ' ';

	return {

		add : function(value) {

			strBuff += value.toString();

		},
		print : function() {
			return strBuff;

		},
		
		clear : function() {
			var strArr=strBuff.split();
			var strArr1 = strArr.splice(1,1);
			return strArr1.join();

		},

	}

}
var buffer = makeBuffer();

// додати значення до буферу
buffer.add('JavaScript ');
buffer.add('Вчити ');
buffer.add('Потрібно!');

// отримати поточне значення
console.log(buffer.print());
// JavaScript Вчити Потрібно!

// Перевірка, чи всі дані навіть числові повертає до стрічкового типу:
var buffer1 = makeBuffer();
buffer1.add(0);
buffer1.add(1);
buffer1.add(0);
console.log(buffer1.print()); // '010'

// Метод clear
console.log(buffer.clear());
console.log(buffer1.clear());

