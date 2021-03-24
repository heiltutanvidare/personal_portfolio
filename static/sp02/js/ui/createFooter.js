// This function will create and add all footer html
// and add footer as class for styling with sass

export default function createFooter() {
	const footer = document.querySelector("footer");
	footer.innerHTML = `
  <div class="footer__inner">
  <div class="footer__part footer__part--logos">
    <a href="index.html" class="footer__logo">
      <img
        src="img/graphics/site-logo.svg"
        alt="ShoeBox logo link to home page"
        class="footer__logo__img"
      />
    </a>
    <div class="footer__social-links">
      <a href="" class="footer__social-links__link"
        ><img
          src="img/graphics/some-fb.svg"
          alt="Link to our Facebook page"
      /></a>
      <a href="" class="footer__social-links__link"
        ><img
          src="img/graphics/some-insta.svg"
          alt="Link to our Instagram profile"
      /></a>
      <a href="" class="footer__social-links__link"
        ><img
          src="img/graphics/some-twitter.svg"
          alt="Link to our Twitter profile"
      /></a>
      <a href="" class="footer__social-links__link"
        ><img
          src="img/graphics/some-youtube.svg"
          alt="Link to our YouTube page"
      /></a>
    </div>
  </div>

  <div class="footer__part">
    <h3 class="footer__title">Support</h3>
    <a href="#" class="footer__link">Contact Us</a>
    <a href="#" class="footer__link">FAQ</a>
    <a href="#" class="footer__link">Locate a store</a>
    <a href="#" class="footer__link">Warranty</a>
    <a href="#" class="footer__link">Spare Laces</a>
    <a href="#" class="footer__link">Maintenance</a>
  </div>

  <div class="footer__part">
    <h3 class="footer__title">ShoeBox</h3>
    <a href="#" class="footer__link">About ShoeBox</a>
    <a href="#" class="footer__link">Design</a>
    <a href="#" class="footer__link">Careers</a>
    <a href="#" class="footer__link">Newsroom</a>
    <a href="#" class="footer__link">Membership</a>
  </div>

  <div class="footer__part footer__part--full-width">
    <p>
      This website is my submission to a student assignement,
      and is in no way, shape or form a real ecommerce
      website. The text and images used are borrowed from
      different sources.
    </p>
  </div>
</div>
  `;

	footer.classList.add("footer");
}
