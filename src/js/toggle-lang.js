export default () => {
	document.addEventListener("click", e => {
		let listLang = document.querySelectorAll("#js-list-promo, #js-list-header, #js-list-screen"),
			arrow = document.querySelectorAll("#js-arrow-lang-promo, #js-arrow-lang-header, #js-arrow-lang-screen"),
			target = e.target.parentNode;
			
		arrow.forEach(item => {
			if (e.target === item) {
				target = target.parentNode;
			}
		});
		
		listLang.forEach((item, i) => {
			if ((item.classList.contains("language__list_visible")) && (item.parentNode !== target)) {
				item.classList.remove("language__list_visible");
				arrow[i].style.animation = "rotate-close 1.5s forwards";
				arrow[i].classList.toggle("language__arrow_active");
			}
		});
	});
}