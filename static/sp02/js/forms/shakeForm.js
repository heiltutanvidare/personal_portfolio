// This function will apply and remove a class on the form element.
// The class contains styling for "shaking" the form in the ui

export default function shakeForm() {
	const form = document.querySelector("form");
	form.classList.add("shake");
	setTimeout(() => {
		form.classList.remove("shake");
	}, 1000);
}
