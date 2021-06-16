import React, { Component} from "react";
import { hot } from "react-hot-loader";
import ReactDOM from "react-dom";
import loadable from "@loadable/component";

const Sample = loadable(() => import("../Pages/Sample.js")),
	Language = loadable(() => import("./Language.js")),
	Phone = loadable(() => import("./Phone.js"));

class Screen extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			header: document.getElementById("js-header")
		};
		this.showCatalog = this.showCatalog.bind(this);
	}
	
	componentDidMount() {
		let promo = document.getElementById("js-promo"),
			screen = document.querySelector(".screen");
		const section = this.props.section;	
		
		switch (section) {
			case "js-screen-promo":
				promo.classList.toggle("promo_screen");
				screen.style.animation = "opacity 1.5s forwards";
				break;
			case "js-screen-header":
				screen.style.animation = "opacity 1.5s forwards";
				screen.classList.toggle("screen_header");
				break;	
		}
		
		document.documentElement.style.overflow = "hidden";
	}
	
	componentWillUnmount() {
		let promo = document.getElementById("js-promo");
		const section = this.props.section;
		
		switch (section) {
			case "js-screen-promo":
				promo.classList.toggle("promo_screen");
				break;	
		}
		
		document.documentElement.style.overflow = "";
	}
	
	showCatalog() {
		console.log(this.state.header);
		
		ReactDOM.render(<Sample value={this.state.header} />, document.getElementById("js-container"));
	}
	
	render() {
		const section = this.props.section,
			li = this.props.li;
		
		return (
			<div className="screen" id={section}>
				<nav className="screen__nav">
					<ul className="screen__menu">
						<li className="screen__item" id={li} onClick={this.showCatalog}>
							<a className="screen__link" id="js-link-screen-1" href="#">Каталог</a>
						</li>
						<li className="screen__item">
							<a className="screen__link" id="js-link-screen-2" href="#">О нас</a>
						</li>
						<li className="screen__item">
							<a className="screen__link" id="js-link-screen-3" href="#">Sale</a>
						</li>
					</ul>
				</nav>
				<footer className="screen__footer">
					<Language lang="language language_screen" idLang="js-lang-screen" arrow="js-arrow-lang-screen" list="js-list-screen" />
					<Phone />
				</footer>
			</div>
		)
	}
}

export default hot(module)(Screen);