import commonUI from "./ui/commonUI.js";
import displayMessage from "./ui/displayMessage.js";
import { loginUser } from "./api/user/loginUser.js";
import { getUserName } from "./localStorage/storage.js";
import validateLength from "./forms/validateLength.js";
import validateInput from "./forms/validateInput.js";
import shakeForm from "./forms/shakeForm.js";

// Apply common UI elements
commonUI();

// Enable breadcrumb navigation
const breadcrumbsContainer = document.querySelector(".breadcrumbs");
breadcrumbsContainer.innerHTML = `
    <a href="index.html">Home</a>
    <p>></p>
    <p>Log in</p>
  `;

// If user is logged in, redirect to home
const user = getUserName();
if (user) {
	document.location.href = "index.html";
}

// select and hide loader
const loader = document.querySelector(".loader");
loader.style.display = "none";

const form = document.querySelector("form");
const message = document.querySelector(".message-container");

const usernameElement = form.querySelector("#username");
const passwordElement = form.querySelector("#password");

let userNameIsValid = false;
let passWordIsValid = false;

usernameElement.addEventListener("input", (e) => {
	validateInput(e.target.value, 3, "username");
});

passwordElement.addEventListener("input", (e) => {
	validateInput(e.target.value, 4, "password");
});

// Validate the login form when submitted
form.addEventListener("submit", (event) => {
	event.preventDefault();
	message.innerHTML = "";

	const username = usernameElement.value.trim();
	const password = passwordElement.value.trim();

	userNameIsValid = validateLength(username, 3) ? true : false;
	passWordIsValid = validateLength(password, 4) ? true : false;

	if (userNameIsValid && passWordIsValid) {
		loginUser(username, password);
	} else if (userNameIsValid) {
		displayMessage(
			"warning",
			"Please enter a password",
			".message-container"
		);
		shakeForm();
	} else if (passWordIsValid) {
		displayMessage(
			"warning",
			"Please enter a username",
			".message-container"
		);
		shakeForm();
	} else {
		displayMessage(
			"warning",
			"Please enter a valid username and password",
			".message-container"
		);
		shakeForm();
	}
});
