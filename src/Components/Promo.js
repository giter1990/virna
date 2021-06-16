import React, { Component} from "react";
import { hot } from "react-hot-loader";
import loadable from "@loadable/component";

const Burger = loadable(() => import("./Burger.js")),
	Interact = loadable(() => import("./Interact.js")),
	Language = loadable(() => import("./Language.js")),
	Screen = loadable(() => import("./Screen.js"));

class Promo extends React.Component {
	constructor(props) {
		super(props);
		this.state = {isScreenShowed: false};
		this.toggleBurger = this.toggleBurger.bind(this);
	}
	
	toggleBurger() {
		this.setState(prevState => ({
			isScreenShowed: !prevState.isScreenShowed
		}))
	}
	
	render() {
		return (
			<section className="promo b-lazy" id="js-promo" data-src="./tinytrans.gif">
				<div className="promo__background" id="js-background">Background</div>
				<div className="inner">
					<header className="promo__header" role="banner">
						<a className="logo" href="index.html">
							<img className="logo__icon b-lazy" data-src="./icons/logo.svg" src="./tinytrans.gif" height="16" width="120" alt="Logo" />
						</a>
						<a className="bonum" id="js-bonum" href="https://bonum-studio.com/" disabled target="_blank" rel="noopener">
							<img className="bonum__icon b-lazy" data-src="./icons/bonum.svg" src="./tinytrans.gif" height="7" width="45" alt="Bonum" />
						</a>
					</header>
					<h1 className="promo__title">Ukrainian<br />brand
						<span className="vert vert_promo">of women’s<br />clothing</span>
					</h1>
					<aside className="promo__aside">
						<div>Online store</div>
						<div className="promo__year">2020</div>
					</aside>
					<div className="promo__control" id="js-promo-control">
						<Burger section="menu" view="js-burger-promo" line1="js-line-promo-1" line2="js-line-promo-2" line3="js-line-promo-3" showed={this.state.isScreenShowed} onChangeBurger={this.toggleBurger} />
						<Interact section="interact interact_promo" li="interact__item interact__item_promo" target="" rel="" icon1="Like" icon2="Instagram" icon3="Cart" />
						<Language lang="language language_promo" idLang="js-lang-promo" arrow="js-arrow-lang-promo" list="js-list-promo" />
					</div>
					{this.state.isScreenShowed ? <Screen section="js-screen-promo" li="js-catalog-promo" /> : null}
				</div>
			</section>
		)
	}
}

export default hot(module)(Promo);