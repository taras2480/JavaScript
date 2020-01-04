"use strict"

function find(arr, value) {

	let val = -1;

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === value) {
			val = i;
		}
	}
	return val;

}

let products = [ 'products1', 'products1', 'products1', 'products1',
		'products190', 'products2345', 'products2323', 'products1333',
		'products16778', 'products187' ];

console.log(find(products, 'products187'));
