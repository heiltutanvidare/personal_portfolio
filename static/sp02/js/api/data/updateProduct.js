import { getToken } from "../../localStorage/storage.js";
import { baseUrl } from "../../settings/api.js";
import displayFullPageMessage from "../../ui/displayFullPageMessage.js";
import displayMessage from "../../ui/displayMessage.js";
import removeFullPageMessage from "../../ui/removeFullPageMessage.js";

// Function to update the product
export async function updateProduct(
	title,
	price,
	description,
	featured,
	imageToUpload,
	productId
) {
	const productUrl = `${baseUrl}/products/${productId}`;
	const token = getToken();

	const data = JSON.stringify({
		title: title,
		price: price,
		description: description,
		featured: featured,
	});

	const options = {
		method: "PUT",
		body: data,
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${token}`,
		},
	};

	try {
		const response = await fetch(productUrl, options);
		const json = await response.json();

		if (json.updated_at) {
			if (!imageToUpload) {
				displayFullPageMessage(
					"success",
					"Product details has been updated",
					`details.html?id=${json.id}`,
					"the details page",
					false
				);
			} else {
				uploadImage(json.id, imageToUpload);
				displayFullPageMessage(
					"loading",
					"Please wait while we transfer the data to the server",
					null,
					null,
					true
				);
			}
		}

		if (json.error) {
			removeFullPageMessage();
			displayMessage(
				"error",
				"Failed at updating the product. We apologize for the inconvenience, and are working on repairing the issue.",
				".message-container"
			);
		}
	} catch (error) {
		console.error(error);
		removeFullPageMessage();
		displayMessage(
			"error",
			"Failed contacting the server. We apologize for the inconvenience, and are working on repairing the issue.",
			".message-container"
		);
	}
}

// Upload the image and assign it to the product ID
async function uploadImage(id, imageToUpload) {
	const uploadUrl = baseUrl + "/upload";
	const formData = new FormData();
	formData.append("files", imageToUpload[0]);
	formData.append("refId", id);
	formData.append("ref", "products");
	formData.append("field", "image");

	const options = {
		method: "POST",
		body: formData,
	};

	try {
		const response = await fetch(uploadUrl, options);
		const json = await response.json();

		if (json[0].created_at) {
			displayFullPageMessage(
				"success",
				"Product details and image has been updated 🥳",
				`details.html?id=${id}`,
				"the details page",
				false
			);
		}

		if (json[0].error) {
			removeFullPageMessage();
			displayMessage(
				"error",
				"Failed at uploading the image to the server. We apologize for the inconvenience, and are working on repairing the issue.",
				".message-container"
			);
		}
	} catch (error) {
		console.error(error);
		removeFullPageMessage();
		displayMessage(
			"error",
			"Failed contacting the server. We apologize for the inconvenience, and are working on repairing the issue.",
			".message-container"
		);
	}
}
