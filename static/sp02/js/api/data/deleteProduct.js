import { baseUrl } from "../../settings/api.js";
import { getToken } from "../../localStorage/storage.js";
import { deleteImage } from "./deleteImage.js";
import displayFullPageMessage from "../../ui/displayFullPageMessage.js";

// Function to delete the product from the server
export async function deleteProduct(id, imageId) {
	const token = getToken();

	const deleteUrl = `${baseUrl}/products/${id}`;

	const options = {
		method: "DELETE",
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${token}`,
		},
	};

	try {
		// Display a loading message while fetching
		displayFullPageMessage(
			"loading",
			"Removing product…",
			null,
			null,
			true
		);
		const response = await fetch(deleteUrl, options);
		const json = await response.json();

		if (json.error) {
			displayFullPageMessage(
				"error",
				"We are very sorry, but we could not delete the product. We are looking into the issue and hope to have it sorted out shortly",
				null,
				null,
				false
			);
		}

		// If fetch was successful, run the
		// function to delete the image
		deleteImage(imageId, token);
	} catch (error) {
		displayFullPageMessage(
			"error",
			"We are very sorry, but we could not delete the product. We are looking into the issue and hope to have it sorted out shortly",
			null,
			null,
			false
		);
	}
}
