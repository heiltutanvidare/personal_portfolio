// Function to remove the full page message overlay

export default function removeFullPageMessage() {
	// Select the full page message container
	const fullPageMsg = document.querySelector(".full-page-message-container");

	// hide the message overlay
	fullPageMsg.style.display = "none";
}
