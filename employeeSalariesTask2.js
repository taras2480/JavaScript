"use strict";

//Обєкт не порожній
let employeeSalaries = {

	"Valya" : 1500,
	"Kolya" : 2200,
	"Sergij" : 1200,
	"Kostya" : 15000,
	"Misha" : 3000,
	"Petro" : 1700,
}

let counter = 0;
let summary = 0;
for ( let key in employeeSalaries) {

	counter++;
	summary += employeeSalaries[key];

}
console.log("Total salary:  " + summary);

// Обєкт порожній - сума всіх зарплат становить 0 - працює цей же код - 
//нижче підтвердження

let employeeSalariesEmpty = {

}

let counter1 = 0;
let summary1 = 0;
for ( let key in employeeSalariesEmpty) {

	counter1++;
	summary1 += employeeSalariesEmpty[key];

}
console.log("Total salary:  " + summary1);
