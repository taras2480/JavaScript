"use strict";

let login;
let password;

login = prompt("Who's there?", "");

if (login == "Admin") {
	password = prompt("Password?", "");
	if (password == "TheMaster") {
		alert("Welcome!");
	} else if (password !== "TheMaster") {
		alert("Wrong password");
	} else if(password = null){
		alert("Canceled");
	}
} else if (login !== "Admin") {
	alert("I don't know you");
} else if(login = null){
	alert("Canceled");
}