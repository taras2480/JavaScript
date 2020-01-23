'use strict'

userAgeGet.onblur= function() {

	if (isNaN(this.value)||(this.value <1) || (this.value > 100)) {

		userAgeGet.value = 'Only Number from 1 to 100';
		userAgeGet.focus();

	} else {

		this.classList.remove('error');
		this.classList.add('accepted');
		userAddressGet.focus();

	}
}
userAgePost.onblur= function() {

	if (isNaN(this.value)||(this.value <1) || (this.value > 100)) {

		userAgePost.value = 'Only Number from 1 to 100';
		userAgePost.focus();

	} else {

		this.classList.remove('error');
		this.classList.add('accepted');
		userAddressPost.focus();

	}
}


function sendDataByGetMethod() {
	let userData = {
			lName:document.getElementById('userLastNameGet').value,
			fName:document.getElementById('userFirstNameGet').value,	
		    age:document.getElementById('userAgeGet').value,
		    address:document.getElementById('userAddressGet').value
	};
	
	let xhr = new XMLHttpRequest();
	xhr.open("GET", "/formGet?lName="+userData.lName+"&fName="+userData.fName+"&age="+userData.age+"&address="+userData.address);
	xhr.setRequestHeader("Content-type","application/json");
	xhr.send();
}

function sendDataByPostMethod() {
	let userData = {
			lName:document.getElementById('userLastNamePost').value,
			fName:document.getElementById('userFirstNamePost').value,	
		    age:document.getElementById('userAgePost').value,
		    address:document.getElementById('userAddressPost').value
	};
	
	let xhr = new XMLHttpRequest();
	xhr.open("POST", "/formPost");
	xhr.setRequestHeader("Content-type","application/json");
	xhr.send(userData);
}

