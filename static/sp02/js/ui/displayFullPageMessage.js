// This function will display a full page message
// with different content an behaviour based on
// arguments passed when invoking it

export default function displayFullPageMessage(
	type,
	message,
	redirectLink,
	redirectName,
	loader
) {
	// Select the full page message container
	const fullPageMsg = document.querySelector(".full-page-message-container");

	// Set message title colors
	let color = "#25292c";

	switch (type) {
		case "message":
			color = "#25292c";
			break;

		case "loading":
			color = "#aa00ff";
			break;

		case "success":
			color = "#8ab300";
			break;

		case "warning":
			color = "rgb(255, 153, 0)";
			break;

		case "errir":
			color = "rgb(171, 0, 0)";
			break;

		default:
			color = "#25292c";
			break;
	}

	// Initialize the conent
	let redirectHtml = "";

	// Add paragraph with link if redirecting
	if (redirectLink && redirectName) {
		redirectHtml = `
			<p>
				Redirecting you to the
				<a href="${redirectLink}">${redirectName}</a>
			</p>
		`;
		redirectToPage(redirectLink);
	}

	// Initialize loader
	let loaderHtml = "";

	// Show loader if wanted
	if (loader) {
		loaderHtml = `
			<div class="loader">
				<div class="loader__dot"></div>
				<div class="loader__dot"></div>
				<div class="loader__dot"></div>
				<div class="loader__dot"></div>
				<div class="loader__dot"></div>
			</div>
		`;
	}

	// Set the HTML of the message
	fullPageMsg.innerHTML = `
		<div class="full-page-message">
			<h3 style="color: ${color}">${message}</h3>
			${redirectHtml}
			${loaderHtml}
		</div>
	`;

	// display the message
	fullPageMsg.style.display = "flex";

	// Redirect to page after 2 seconds
	function redirectToPage(redirectLink) {
		setTimeout(() => {
			document.location.href = redirectLink;
		}, 2200);
	}
}
