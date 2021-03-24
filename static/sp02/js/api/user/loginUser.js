import { baseUrl } from "../../settings/api.js";
import displayMessage from "../../ui/displayMessage.js";
import { saveUser, saveToken } from "../../localStorage/storage.js";
import displayFullPageMessage from "../../ui/displayFullPageMessage.js";
import removeFullPageMessage from "../../ui/removeFullPageMessage.js";

// Function to do log in to the API using the
// username and password provided by the user

export async function loginUser(username, password) {
	const loginUrl = baseUrl + "/auth/local";

	// The data object that contains the user credentials
	const data = JSON.stringify({
		identifier: username,
		password: password,
	});

	// Options to send in the fetch
	const options = {
		method: "POST",
		body: data,
		headers: {
			"Content-Type": "application/json",
		},
	};

	try {
		displayFullPageMessage(
			"loading",
			"Sending user data",
			null,
			null,
			true
		);
		const res = await fetch(loginUrl, options);
		const json = await res.json();

		// Display error if fetch returns an error
		// like if credentials is wrong
		if (json.error) {
			removeFullPageMessage();
			displayMessage(
				"error",
				"The username or password is wrong",
				".message-container"
			);
			// Shake the form for that added "woops"-effect
			form.style.animationName = "shake";
		}

		// If the fetch returns a user, save the
		// user and the web token to local storage
		if (json.user) {
			saveUser(json.user);
			saveToken(json.jwt);
			displayFullPageMessage(
				"success",
				`Welcome, ${json.user.username}!`,
				"index.html",
				"the home page",
				false
			);
		}
	} catch (error) {
		removeFullPageMessage();
		displayMessage(
			"error",
			"The username or password is wrong",
			".message-container"
		);
	}
}
