
// Exercise 6

	// validaciones usuario
function validate() {
	let error = 0;

	// Get the input fields
	const fName = document.getElementById("fName");
	const fLastN = document.getElementById("fLastN");
	const fAddress = document.getElementById("fAddress");
	const fPhone = document.getElementById("fPhone");
	const fEmail = document.getElementById("fEmail");
	const fPassword = document.getElementById("fPassword");
	

	// Get the error elements
	let errorName = document.getElementById("errorName");
	let errorLastN = document.getElementById("errorLastN");
	let errorAddress = document.getElementById("errorAddress");
	let errorPhone = document.getElementById("errorPhone");
	let errorEmail = document.getElementById("errorEmail");
	let errorPassword = document.getElementById("errorPassword");
	

	// Validate fields entered by the user: name, phone, password, and email
	const isValidName = fName.checkValidity()
	const isValidLastN = fLastN.checkValidity()
	const isValidAdress = fAddress.checkValidity()
	const isValidPhone = fPhone.checkValidity()
	const isValidEmail = fEmail.checkValidity()
	const isValidPassword = fPassword.checkValidity()
		

	if(fName.value == "" || isValidName == false){
		return error++;
	}

	if(fLastN.value == "" || isValidLastN == false){
		return error++;
	}

	if(fEmail.value == "" || isValidEmail == false){
		return error++;
	}

	if(fAddress.value == "" || isValidAdress == false){
		return error++;
	}



	if(fPassword.value == "" || isValidPassword == false){
		return error++;
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
