
// Exercise 6
function validate() {
	var error = 0;
	// Get the input fields
	var fName = document.getElementById("fName");
	var fEmail = document.getElementById("fEmail");

	// Get the error elements
	var errorName = document.getElementById("errorName");
	var errorEmail = document.getElementById("errorEmail");  
	
	// Validate fields entered by the user: name, phone, password, and email
	if(fName.value == ""){
		error++;
	}

	if(fEmail.value == ""){
		error++;
	}
	 
	if(error>0){
		alert("Error");
	}else{
		alert("OK");
	}

}

	// validaciones usuario
function validate() {
	let error = 0;

	// Get the input fields
	const fEmail = document.getElementById("fEmail");
	const fAddress = document.getElementById("fAddress");
	const fLastN = document.getElementById("fLastN");
	const fPassword = document.getElementById("fPassword");
	const fPhone = document.getElementById("fPhone");

	// Get the error elements
	let errorName = document.getElementById("errorName");
	let errorEmail = document.getElementById("errorEmail");
	let errorAddress = document.getElementById("errorAddress");
	let errorLastN = document.getElementById("errorLastN");
	let errorPassword = document.getElementById("errorPassword");
	let errorPhone = document.getElementById("errorPhone");

	// Validate fields entered by the user: name, phone, password, and email
	debugger

	const isValidPassword = fPassword.checkValidity()
	const isValidPhone = fPhone.checkValidity()
	const isValidLastN = fLastN.checkValidity()
	const isValidEmail = fEmail.checkValidity()
	const isValidName = fName.checkValidity()
	const isValidAdress = fAddress.checkValidity()


	if(fName.value == "" || isValidName == false){
		return error++;
	}

	if(fLastN.value == "" || isValidLastN == false){
		error++;
	}

	if(fEmail.value == "" || isValidEmail == false){
		error++;
	}

	if(fAddress.value == "" || isValidAdress == false){
		error++;
	}



	if(fPassword.value == "" || isValidPassword == false){
		error++;
	}

	if(fPhone.value == "" || isValidPhone == false){
		error++;
	}

	if(error>0){
		alert("Error");
	}else{
		alert("OK");
	}

}
