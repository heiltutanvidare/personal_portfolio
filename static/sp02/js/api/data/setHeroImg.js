import { getApiData } from "./getApiData.js";

// Get hero image from the API
// and mount it in the hero section
export async function setHeroImg() {
	const imageElement = document.querySelector(".hero__image");
	const data = await getApiData("/home");
	const heroBannerTitle = data.hero_banner_alt_text;
	const heroBannerUrl = data.hero_banner.url;
	imageElement.src = heroBannerUrl;
	imageElement.alt = heroBannerTitle;
}
