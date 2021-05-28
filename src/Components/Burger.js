import React, { Component} from "react";
import { hot } from "react-hot-loader";

class Burger extends React.Component {
	constructor(props) {
		super(props);
		this.toggleBurger = this.toggleBurger.bind(this);
	}
	
	toggleBurger(e) {
		let showed = this.props.showed,
			target = e.target.parentNode,
			burger = document.getElementById("js-burger-promo"),
			background = document.getElementById("js-background"),
			line1 = document.querySelectorAll("#js-line-promo-1, #js-line-header-1"),
			line2 = document.querySelectorAll("#js-line-promo-2, #js-line-header-2"),
			line3 = document.querySelectorAll("#js-line-promo-3, #js-line-header-3");
			
		if (target === burger) {
			burger.scrollIntoView({
				behavior: "smooth",
				block: "end"
			});
		}
		
		if (background) {
			background.classList.toggle("promo__background_visible");
			background.style.animation = "opacity 1s forwards";
		}
					
		function changeLines(line, classLine) {
			line.forEach((item, i) => {
				switch (i) {
					case 0:
					case 1:
						item.classList.toggle(classLine);
						break;
				}
			});
		}
		
		changeLines(line1, "menu__line_rotate-down");
		changeLines(line2, "menu__line_none");
		changeLines(line3, "menu__line_rotate-up");
		
		this.props.onChangeBurger(showed);
	}
	
	render() {
		const section = this.props.section,
			view = this.props.view,
			line1 = this.props.line1,
			line2 = this.props.line2,
			line3 = this.props.line3;

		return (
			<div className={section}>
				<div className="menu__signif">Menu</div>
				<div className="menu__burger" id={view} onClick={this.toggleBurger}>
					<span className="menu__line" id={line1}>Line</span>
					<span className="menu__line" id={line2}>Line</span>
					<span className="menu__line" id={line3}>Line</span>
				</div>
			</div>
		)
	}
}

export default hot(module)(Burger);