const myForm = document.querySelector("#book-form");
const firstNameInput = document.querySelector("#firstName");
const lastNameInput = document.querySelector("#lastName");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const confirmPasswordInput = document.querySelector("#confirmPassword");
const msg = document.querySelector(".display-msg");

document
	.getElementById("email")
	.addEventListener("keyup", checkEmailIfValidFunction);

function validatePassword() {
	if (password.value != confirmPassword.value) {
		confirmPasswordInput.setCustomValidity("Passwords Don't Match");
	} else {
		confirmPasswordInput.setCustomValidity("");
	}
}

password.onchange = validatePassword;
confirmPassword.onkeyup = validatePassword;

myForm.addEventListener("submit", onSubmit);

function onSubmit(e) {
	e.preventDefault();

	if (
		firstNameInput.value === "" ||
		lastNameInput.value === "" ||
		emailInput.value === "" ||
		passwordInput.value === "" ||
		confirmPasswordInput.value === ""
	) {
		displayError("Please fill all fields");

		setTimeout(() => msg.remove(), 3000);
	} else {
		if (!validateEmail(emailInput.value)) {
			emailInput.classList.add("error-input");
			displayError("Invalid Email");
			return;
		}

		myForm.classList.add("success");
		msg.innerHTML = "Sent! We will get back to you shortly";
		setTimeout(() => msg.remove(), 3000);
		setTimeout(() => myForm.classList.remove("success"), 2000);
		//clear value
		firstNameInput.value = "";
		lastNameInput.value = "";
		emailInput.value = "";
		passwordInput.value = "";
		confirmPasswordInput.value = "";
	}
}

function validateEmail(email) {
	const re =
		/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(String(email).toLowerCase());
}

function displayError(message) {
	msg.classList.add("error");
	msg.innerHTML = message;
}

function removeError() {
	msg.classList.remove("error");
	msg.innerHTML = "";
}

function checkEmailIfValidFunction() {
	if (!validateEmail(emailInput.value)) {
		emailInput.classList.add("error-input");
		displayError("Email format invalid");
	} else {
		emailInput.classList.remove("error-input");
		removeError();
	}
}
