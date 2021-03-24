import { baseUrl } from "../../settings/api.js";
import displayMessage from "../../ui/displayMessage.js";

// Function to get data from API
// based on endpoint passed in
export async function getApiData(endPoint) {
	try {
		const res = await fetch(baseUrl + endPoint);
		const data = await res.json();

		// Return the data fetched,
		// to be used in other functions
		return data;
	} catch (error) {
		console.error(error);
		displayMessage(
			"error",
			"Could not load the products from the server. We apologize for the inconvenience, and are working on repairing the issue.",
			".message-container"
		);
	}
}
