// Her velge eg headeren – du kan selecta header-tag
// eller class (då må du hugsa .namnet)
const header = document.querySelector("header");

// Her finne eg ut kor høg header er i px
const headerHeight = header.clientHeight;

// Du kan logga den variabelen for å sjå høgden
console.log(headerHeight);

// onscroll køyrer ein funksjon når du scrollar
window.onscroll = function () {
	if (
		// sjekkar om body og document har scrolla
		// lenger ned enn header sin høgde
		document.body.scrollTop > headerHeight ||
		document.documentElement.scrollTop > headerHeight
	) {
		// legger til ein class med styling for scrolla header
		header.classList.add("scrolled");
	} else {
		// fjernar classen igjen dersom if-statementen ikkje
		//blir møtt (når du ikkje er scrolla lenger enn høgda på header)
		header.classList.remove("scrolled");
	}
};
