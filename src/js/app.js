const form = document.querySelector("#registration");
const username = document.querySelector("#username");
const email = document.querySelector("#email");
const idNumber = document.querySelector("#idNumber");
const idError = document.querySelector("#id-error");
const emailError = document.querySelector("#email-error");
const userNameError = document.querySelector("#username-error");
const mobNumber = document.querySelector("#mobileNumber");
const mobNumberError = document.querySelector("#mobile-error");
const inputs = document.querySelectorAll("input");
const jobDesc = document.querySelector("#jobDesc");
const jobDescError = document.querySelector("#jobDescError");
const password = document.querySelector("#password");
const passwordError = document.querySelector("#password-error");
const btn = document.querySelector(".open-sign-in");


function modalAction(selector) {
	const modal = document.querySelector(selector);
	const closeBtn = modal.querySelector(".modal-close");
	modal.classList.add("open");
	closeBtn.addEventListener("click", () => {
		modal.classList.remove("open");
	});
}
function isUserNameValid() {
	if (/^\s*$/.test(username.value)) {
		userNameError.innerText = "username is required";
		username.classList.remove("correct");
		username.classList.add("error");
		return false;
	} else {
		userNameError.innerText = "";
		username.classList.remove("error");
		username.classList.add("correct");
		return true;
	}
}
function idNumberValid() {
	if (/^\s*$/.test(idNumber.value)) {
		idError.innerText = "id number is required";
		idNumber.classList.remove("correct");
		idNumber.classList.add("error");
		return false;
	} else {
		idError.innerText = "";
		idNumber.classList.remove("error");
		idNumber.classList.add("correct");
		return true;
	}
}
function mobNumberValid() {
	if (/^\s*$/.test(mobNumber.value)) {
		mobNumberError.innerText = "id number is required";
		mobNumber.classList.remove("correct");
		mobNumber.classList.add("error");
		return false;
	} else {
		mobNumberError.innerText = "";
		mobNumber.classList.remove("error");
		mobNumber.add("correct");
		return true;
	}
}
function isEmailValid() {

	if (/^\s*$/.test(email.value)) {
		emailError.innerText = "email is required";
		email.classList.remove("correct");
		email.classList.add("error");
		return false;
	} else if (!/@gmail.com$/.test(email.value)) {
		emailError.innerText = "email must be gmail";
		email.classList.remove("correct");
		email.classList.add("error");
		return false;
	} else {
		emailError.innerText = "";
		email.classList.remove("error");
		email.classList.add("correct");
		return true;
	}
}
function isPasswordValid() {
	if (password.value.length < 8) {
		password.classList.remove("correct");
		password.classList.add("error");
		passError.innerText = "password must be at least 8 char";
		return false;
	} else {
		passError.innerText = "";
		password.classList.remove("error");
		password.classList.add("correct");
		return true;
	}
}
username.addEventListener("input", isUserNameValid);
email.addEventListener("input", isEmailValid);
password.addEventListener("input", isPasswordValid);
mobNumber.addEventListener("input", mobNumberValid);
idNumber.dEventListener("input", idNumberValid);




form.addEventListener("submit", (e) => {
	e.preventDefault();
	

	const isUNValid = isUserNameValid();
	const isEValid = isEmailValid();
	const isPValid = isPasswordValid();
    const isMValid = mobNumberValid();
    const isIdValid = idNumberValid();

	// console.log(isUNValid, isEValid, isPValid);

	if (isUNValid && isEValid && isPValid && isMValid && isIdValid ) {
		// console.log("submit form");
		// form.submit();
		form.reset();
		inputs.forEach((el) => el.classList.remove("correct"));
		// modal.classList.add("open");
		modalAction("#sign-up-modal");
	}
});

btn.addEventListener("click", () => {
	modalAction("#sign-up-modal");
});