import { clearUser } from "../localStorage/storage.js";

// Log out functionality
export default function logOut() {
	const logOutButton = document.querySelector("#logOutButton");

	if (logOutButton) {
		logOutButton.addEventListener("click", () => {
			const confirmLogOut = confirm("Do you want to log out?");

			if (confirmLogOut) {
				clearUser();
				location.href = "index.html";
			}
		});
	}
}
