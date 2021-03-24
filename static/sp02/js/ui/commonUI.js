import hamburgerNav from "./hamburgerNav.js";
import createFooter from "./createFooter.js";
import createHeader from "./createHeader.js";
import showOnline from "./showOnline.js";

// This function will apply common UI
// elements that will be used on all pages
export default function commonUI() {
	// Create the header and nav content
	createHeader();

	// Create the footer content
	createFooter();

	// Enable hamburgerNav
	hamburgerNav();

	// Show badge if user is online
	showOnline();
}
