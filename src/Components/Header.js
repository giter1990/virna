import React, { Component} from "react";
import { hot } from "react-hot-loader";
import loadable from "@loadable/component";

const Burger = loadable(() => import("./Burger.js")),
	Phone = loadable(() => import("./Phone.js")),
	Interact = loadable(() => import("./Interact.js")),
	Language = loadable(() => import("./Language.js")),
	Screen = loadable(() => import("./Screen.js"));

class Header extends React.Component {
	constructor(props) {
		super(props);
		this.state = {isScreenShowed: false};
		this.toggleBurger = this.toggleBurger.bind(this);
	}
	
	componentDidMount() {
		let items = document.querySelectorAll("#js-item-1, #js-item-2, #js-item-3, #js-phone"),
			links = document.querySelectorAll("#js-link-1[disabled], #js-link-2[disabled], #js-link-3[disabled], #js-phone[disabled]"),
			disableds = [];
			
		links.forEach((item, i) => {
			if (item) {
				disableds.push(item);
			}
						
			for (let item of disableds) {
				switch (item) {
					case items[0].childNodes[0]:
						items[0].classList.add("header__chapter_disabled");
						break;
					case items[1].childNodes[0]:
						items[1].classList.add("header__chapter_disabled");
						break;
					case items[2].childNodes[0]:
						items[2].classList.add("header__chapter_disabled");
						break;
					case items[3]:
						items[3].classList.add("phone_disabled");
						break;
				}
			}
		});
	}
	
	toggleBurger() {
		this.setState(prevState => ({
			isScreenShowed: !prevState.isScreenShowed
		}))
	}
	
	render() {
		const value = this.props.value;
			
		function addProp() {
			if (value) {
				return "header header_active";
			} else {
				return "header";
			}
		}
		
		return (
			<section className={addProp()} id="js-header">
				<div className="inner">
					<Burger section="menu menu_header" view="js-burger-header" line1="js-line-header-1" line2="js-line-header-2" line3="js-line-header-3" showed={this.state.isScreenShowed} onChangeBurger={this.toggleBurger} />
					<a className="logo logo_header" href="index.html">
						<img className="logo__icon b-lazy" data-src="./icons/logo.svg" src="./tinytrans.gif" height="16" width="120" alt="Logo" />
					</a>
					<div className="header__manage">
						<nav className="header__nav">
							<ul className="header__list">
								<li className="header__chapter b-lazy" id="js-item-1" data-src="./tinytrans.gif">
									<a className="header__link" id="js-link-1" href="#">Каталог</a>
								</li>
								<li className="header__chapter" id="js-item-2">
									<a className="header__link" id="js-link-2" href="#">О нас</a>
								</li>
								<li className="header__chapter" id="js-item-3">
									<a className="header__link" id="js-link-3" href="#">Sale</a>
								</li>
							</ul>
						</nav>
						<Phone />
					</div>
					<Interact section="interact interact_header" li="interact__item interact__item_header" target="_blank" rel="noopener" icon1="Instagram" icon2="Facebook" icon3="YouTube" />
					<a className="header__like" href="#">Like</a>
					<div className="header__shopping">
						<a className="header__cart" href="#">Cart</a>
						<div className="header__count">99</div>
					</div>
					<a className="header__face" href="#">
						<img className="header__img b-lazy" data-src="./sprite/face.svg" src="./tinytrans.gif" height="16" width="12" alt="Face" />
					</a>
					<Language lang="language language_header" idLang="js-lang-header" arrow="js-arrow-lang-header" list="js-list-header" />
					{this.state.isScreenShowed ? <Screen section="js-screen-header" li="js-catalog-header" /> : null}
				</div>
			</section>
		)
	}
}

export default hot(module)(Header);