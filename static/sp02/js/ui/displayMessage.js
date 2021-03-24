// Function to display message in the UI
// Arguments passed in are message type – defining its styling,
// its content and the target container to show it in
export default function displayMessage(msgType, msgContent, msgContainer) {
	const container = document.querySelector(msgContainer);

	container.innerHTML = `
    <div class="message ${msgType}">
      ${msgContent}
    </div>
  `;
}
