import clearMessage from "../ui/clearMessage.js";
import displayMessage from "../ui/displayMessage.js";
import validateLength from "./validateLength.js";

// Validate the value of the input
export default function validateInput(value, minLength, inputType) {
	if (validateLength(value, minLength)) {
		clearMessage(`.${inputType}-message`);
		return true;
	} else {
		displayMessage(
			"error",
			`Please enter at least ${minLength} characters`,
			`.${inputType}-message`
		);
	}
}
