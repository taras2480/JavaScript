'use strict'

let student = [];

function alert(array) {

	console.log(array);
	console.log('-----------------------')
}

let student1 = {

	yearOfStuding : 3,
	facultyName : 'Hystory'

}
let student2 = {

	yearOfStuding : 5,
	facultyName : 'Mathematics'

}
let student3 = {

	yearOfStuding : 4,
	facultyName : 'Geography'

}
let student4 = {

	yearOfStuding : 3,
	facultyName : 'Mathematics'

}
let student5 = {

	yearOfStuding : 1,
	facultyName : 'Aviation'

}
let student6 = {

	yearOfStuding : 2,
	facultyName : 'Geography'

}
let student7 = {

	yearOfStuding : 6,
	facultyName : 'Phylosophy'

}
let student8 = {

	yearOfStuding : 3,
	facultyName : 'Aviation'

}
let student9 = {

	yearOfStuding : 4,
	facultyName : 'Medicine'

}
let student10 = {

	yearOfStuding : 3,
	facultyName : 'Hystory'

}

student.push(student1, student2, student3, student4, student5, student6,
		student7, student8, student9, student10);

console.log('List of students');

function allFacultyName(obj) {

	return obj.facultyName;
}

alert(student);

console.log('a) Array FacultyName');
let FacultyNameStudents = student.map(allFacultyName);
alert(FacultyNameStudents);

console.log('б) Sum of yearOfStuding');

function allYearOfStuding(sumYearOfStuding, currentObj) {

	return sumYearOfStuding + currentObj.yearOfStuding;

}
let sumAllYearOfStuding = student.reduce(allYearOfStuding, 0);
alert(sumAllYearOfStuding);
