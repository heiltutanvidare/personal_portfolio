import { getUserName } from "../localStorage/storage.js";

// Display badge on website
// if user is logged in
export default function showOnline() {
	const userName = getUserName();
	if (userName) {
		const onlineBadge = document.createElement("div");
		onlineBadge.innerHTML = `Logged in as ${userName}`;
		onlineBadge.classList.add("online-badge");

		document.querySelector("body").appendChild(onlineBadge);
	}
}
