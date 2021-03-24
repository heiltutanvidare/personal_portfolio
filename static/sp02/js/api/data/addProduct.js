import { getToken } from "../../localStorage/storage.js";
import { baseUrl } from "../../settings/api.js";
import displayFullPageMessage from "../../ui/displayFullPageMessage.js";
import displayMessage from "../../ui/displayMessage.js";

export async function addProduct(
	title,
	price,
	description,
	featured,
	imageToUpload
) {
	// Add the product to the API
	// and get the ID to use on image upload
	const productUrl = baseUrl + "/products";
	const file = imageToUpload.files[0];
	const formData = new FormData();
	formData.append("files.image", file, file.name);

	// Data object with new product information
	const data = {
		title: title,
		price: price,
		description: description,
		featured: featured,
	};

	formData.append("data", JSON.stringify(data));

	// Get the JSON Web Token from localStorage
	const token = getToken();

	// Options object withe the method, data and
	// the authorization needed to upload to the API
	const options = {
		method: "POST",
		body: formData,
		headers: {
			Authorization: `Bearer ${token}`,
		},
	};

	try {
		// During the fetch, display a loading message
		displayFullPageMessage(
			"loading",
			"Please wait while we transfer the data to the server",
			null,
			null,
			true
		);
		const response = await fetch(productUrl, options);
		const json = await response.json();

		// If the fetch was successful, display a message saying so
		if (json.created_at) {
			displayFullPageMessage(
				"success",
				"Product was added to the server 🥳",
				`details.html?id=${json.id}`,
				"the details page",
				false
			);
		}

		// Display error if json returns an error
		if (json.error) {
			displayMessage(
				"error",
				"Failed at adding the product to the server. We apologize for the inconvenience, and are working on repairing the issue.",
				".message-container"
			);
		}
	} catch (error) {
		console.error(error);
		displayMessage(
			"error",
			"Failed at contacting the server. We apologize for the inconvenience, and are working on repairing the issue.",
			".message-container"
		);
	}
}
