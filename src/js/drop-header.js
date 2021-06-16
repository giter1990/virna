export default () => {
	let promoControl = document.getElementById("js-promo-control"),
		header = document.getElementById("js-header");
		
	function isElementInViewport(elem) {
		let rect = elem.getBoundingClientRect();

		return (
			(rect.top >= 0) &&
			(rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)) 
		);
	}
	
	if (!(isElementInViewport(promoControl)) && !(header.classList.contains("header_active"))) {
		header.classList.add("header_active");
		header.style.animation = "drop 1.5s forwards";
	}
	
	if ((isElementInViewport(promoControl)) && (header.classList.contains("header_active"))) {
		header.classList.remove("header_active");
	}
}