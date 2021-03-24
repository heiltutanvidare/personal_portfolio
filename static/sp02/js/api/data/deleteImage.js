import { baseUrl } from "../../settings/api.js";
import displayFullPageMessage from "../../ui/displayFullPageMessage.js";
import displayMessage from "../../ui/displayMessage.js";

// Function to delete the image based on the
// ID passed in from the delete products function
export async function deleteImage(imageId, token) {
	const deleteImgUrl = baseUrl + "/upload/files/" + imageId;

	const options = {
		method: "DELETE",
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${token}`,
		},
	};

	try {
		const response = await fetch(deleteImgUrl, options);
		const json = await response.json();
		if (json.error) {
			displayMessage(
				"error",
				"Could not delete the image. We are looking into the issue and hope to have it sorted out shortly",
				".message-container"
			);
		} else {
			displayFullPageMessage(
				"message",
				"The product has been removed from the server",
				"products.html",
				"products overview page",
				false
			);
		}
	} catch (error) {
		console.error(error);
		displayMessage(
			"error",
			"Could not delete the image. We apologize for the inconvenience, and are working on repairing the issue.",
			".message-container"
		);
	}
}
