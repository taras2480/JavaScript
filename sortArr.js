'use strict'

function alert(array) {

	console.log(array);
	console.log('-----------------------')
}

function compareNumbers(number1, number2) {

	return (number1 - number2);

}

function filterBiggerZero(obj) {

	return obj > 0;
}

let array = [ 4, 22, 48, -12, 22, 37, -57, 38, -654, 49, 456, 45, -67 - 46,
		567, -25, 59, -34, 78, 48, -57 ];

console.log('Array created');
alert(array);
console.log('Min to max');
array.sort(compareNumbers);
alert(array);

console.log('Max to min');
array.reverse(compareNumbers);
alert(array);
console.log();

console.log('Only bigger than ZERO');
let positiveArr = array.filter(function(number) {
	return number > 0;
});
alert(positiveArr);

console.log('Only less than ZERO');
let lessZeroArr = array.filter(function(number) {
	return number < 0;
});
alert(lessZeroArr);
