// Function to remove the messages in the header,
// for example the added to cart message

export default function removeHeaderMessage() {
	setTimeout(() => {
		const headerMessage = document.querySelector(
			".header-message-container"
		);
		headerMessage.classList.add("fadout");
		setTimeout(() => {
			headerMessage.classList.remove("fadout");
			headerMessage.innerHTML = "";
		}, 1000);
	}, 1500);
}
