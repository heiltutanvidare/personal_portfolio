// Function to clear any message
// based on target passed in as argument

export default function clearMessage(msgContainer) {
	const container = document.querySelector(msgContainer);

	container.innerHTML = "";
}
