// Hamburger navigation toggle

export default function hamburgerNav() {
	const hamburger = document.querySelector(".header__burger");
	hamburger.addEventListener("click", () => {
		hamburger.classList.toggle("menu-open");
	});
}
