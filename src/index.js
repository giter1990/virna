import React, { Component} from "react";
import ReactDOM from "react-dom";
// import 'normalize.css';
import "../node_modules/normalize.css/normalize.css"
// import "./App.css";

import "./pug/index.pug";
import "../public/index.html";
import html from "../public/index.html";
import "./sass/style.sass";
import "../public/style.min.css";
import "./fonts/CeraPro-Bold.woff";
import "./fonts/CeraPro-Light.woff";
import "./fonts/CeraPro-Medium.woff";
import "./fonts/CeraPro-Regular.woff";
import "./fonts/Montserrat-Regular.woff";
import arrowIcon from './icons/catalog/like-active.svg';

import "./img/promo/bg-360.jpg";
import bg from "./img/promo/bg-360.jpg";
import "./img/promo/bg-360-2x.jpg";
import "./img/promo/bg-768.jpg";
import "./img/promo/bg-768-2x.jpg";
import "./img/promo/bg-960.jpg";
import "./img/promo/bg-960-2x.jpg";
import "./img/promo/bg-1366.jpg";
import "./img/promo/bg-1366-2x.jpg";
import "./img/promo/bg-1440.jpg";
import "./img/promo/bg-1440-2x.jpg";
import "./img/promo/bg-1920.jpg";
import "./img/promo/bg-1920-2x.jpg";

import "./img/main/collection-360-768.jpg";
import "./img/main/collection-960.jpg";
import "./img/main/collection-1366-1440.jpg";
import "./img/main/collection-1920.jpg";

import "./img/main/production-360.jpg";
import "./img/main/production-360-2x.jpg";
import "./img/main/production-768-960.jpg";
import "./img/main/production-768-960-2x.jpg";
import "./img/main/production-1366-1440.jpg";
import "./img/main/production-1366-1440-2x.jpg";
import "./img/main/production-1920.jpg";
import "./img/main/production-1920-2x.jpg";

import "./icons/promo/logo.svg";
import "./icons/promo/bonum.svg";

import "./icons/promo/menu.svg";
import "./icons/promo/like.svg";
import "./icons/promo/instagram.svg";
import "./icons/promo/cart.svg";
import "./icons/promo/arrow-language.svg";
import "./icons/collection/arrow.svg";
import "./icons/collection/arrow-active.svg";
import "./icons/collection/arrow-notice.svg";
import "./icons/collection/cart-collection.svg";
import "./icons/collection/face.svg";
import "./icons/collection/like-collection.svg";
import "./icons/target/checkmark.svg";
import "./icons/collection/facebook.svg";
import "./icons/collection/youtube.svg";

import "./img/target/target-360.jpg";
import "./img/target/target-360-2x.jpg";
import "./img/target/target-768.jpg";
import "./img/target/target-768-2x.jpg";
import "./img/target/target-960.jpg";
import "./img/target/target-960-2x.jpg";
import "./img/target/target-1366-1440.jpg";
import "./img/target/target-1366-1440-2x.jpg";
import "./img/target/target-1920.jpg";
import "./img/target/target-1920-2x.jpg";

import "./img/target/fashion-360-768.jpg";
import "./img/target/fashion-360-768-2x.jpg";
import "./img/target/fashion-960.jpg";
import "./img/target/fashion-960-2x.jpg";
import "./img/target/fashion-1366-1440.jpg";
import "./img/target/fashion-1366-1440-2x.jpg";
import "./img/target/fashion-1920.jpg";
import "./img/target/fashion-1920-2x.jpg";

import "./img/target/leg-360.jpg";
import "./img/target/leg-360-2x.jpg";
import "./img/target/leg-768-960.jpg";
import "./img/target/leg-768-960-2x.jpg";
import "./img/target/leg-1366-1440.jpg";
import "./img/target/leg-1366-1440-2x.jpg";
import "./img/target/leg-1920.jpg";
import "./img/target/leg-1920-2x.jpg";

const rendered = `<svg viewBox=${arrowIcon.viewBox}><use xlink:href=${arrowIcon.id} /></svg>`;

class SuperGreatIconComponent extends React.Component {
	render() {
		return (
			<div>
				{rendered}
			</div>
		)
	}
}

class Promo extends React.Component {
	render() {
		return (
			<div className="inner">
				<header className="promo__header" role="banner">
					<a className="logo" href="index.html">
						<img className="logo__icon b-lazy" src="./logo.svg" height="16" width="120" alt="Logo" />
					</a>
					<a className="bonum" id="js-bonum" href="https://bonum-studio.com/" target="_blank" rel="noopener">
						<img className="bonum__icon b-lazy" src="./bonum.svg" height="7" width="45" alt="Bonum" />
					</a>
				</header>
				<h1 className="promo__title">Ukrainian<br />brand
					<span className="promo__income">of women’s<br />clothing</span>
				</h1>
				<aside className="promo__aside">
					<div>Online store</div>
					<div className="promo__year">2020</div>
				</aside>
				<div className="promo__control">
					<div className="menu" id="js-burger">Burger</div>
					<ul className="interact interact_promo">
						<li className="interact__item interact__item_promo">
							<a className="interact__link" href="#"></a>
						</li>
						<li className="interact__item interact__item_promo">
							<a className="interact__link" href="#" target="_blank" rel="noopener"></a>
						</li>
						<li className="interact__item interact__item_promo">
							<a className="interact__link" href="#"></a>
						</li>
					</ul>
					<select className="promo__language" value="ru">
						<option className="promo__choice" value="ru">ru</option>
						<option className="promo__choice" value="ua">ua</option>
						<option className="promo__choice" value="en">en</option>
					</select>
				</div>
			</div>
		)
	}
}

class Collection extends React.Component {
	render() {
		return(
			<div className="inner">
				<div className="collection__top">
					<div className="collection__menu">
						<div className="collection__signif">Menu</div>
						<div className="menu menu_collection" id="js-burger">Burger</div>
					</div>
					<a className="logo logo_collection" href="index.html">
						<img className="logo__icon b-lazy" src="./logo.svg" height="16" width="120" alt="Logo" />
					</a>
					<a className="collection__like" href="#"></a>
					<div className="collection__shopping">
						<a className="collection__cart" href="#"></a>
						<div className="collection__count">99</div>
					</div>
					<a className="collection__face" href="#"></a>
				</div>
				<div className="collection__wrapper">
					<picture className="collection__picture">
						<source srcSet="collection-360-768.jpg, collection-360-768-2x.jpg 2x" media="(min-width: 360px) and (max-width: 960px)" type="image/jpg"></source>
						<source srcSet="collection-960.jpg, collection-960-2x.jpg 2x" media="(min-width: 961px) and (max-width: 1366px)" type="image/jpg"></source>
						<source srcSet="collection-1366-1440.jpg, collection-1366-1440-2x.jpg 2x" media="(min-width: 1367px) and (max-width: 1440px)" type="image/jpg"></source>
						<source srcSet="collection-1920.jpg, collection-1920-2x.jpg 2x" media="(min-width: 1441px)" type="image/jpg"></source>
						<img className="collection__img b-lazy" src="collection-1920.jpg" alt="Suit" />
					</picture>
					<div className="collection__slider b-lazy" id="js-slider">
						<div className="collection__control">
							<h2 className="collection__title">Новая<br />коллекция<span className="collection__absence">Уже на сайте</span></h2>
							<button className="btn">Посмотреть</button>
							<div className="collection__transition">
								<img className="collection__arrow" src="./arrow.svg" height="9" width="30" alt="Left arrow" />
								<img className="collection__arrow" src="./arrow-active.svg" height="9" width="30" alt="Right arrow" />
							</div>
							<div className="collection__info">
								<div className="collection__notice">Мы не просто бренд!</div>
								<div className="collection__feature">
									У нас собственное<br />производство одежды
									<img className="collection__mini" src="./arrow-notice.svg" height="9" width="30" alt="Arrow" />
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="collection__manage">
					<nav className="collection__nav">
						<ul className="collection__list">
							<li className="collection__chapter">
								<a className="collection__link" href="#">Каталог</a>
							</li>
							<li className="collection__chapter">
								<a className="collection__link" href="#">О нас</a>
							</li>
							<li className="collection__chapter">
								<a className="collection__link" href="#">Sale</a>
							</li>
						</ul>
					</nav>
					<a className="collection__phone" href="tel:0800332512">
						0 800
						<span className="collection__number"> 332 512</span>
					</a>
				</div>
				<ul className="interact interact_collection">
					<li className="interact__item interact__item_collection">
						<a className="interact__link" href="#" target="_blank" rel="noopener"></a>
					</li>
					<li className="interact__item interact__item_collection">
						<a className="interact__link" href="#" target="_blank" rel="noopener"></a>
					</li>
					<li className="interact__item interact__item_collection">
						<a className="interact__link" href="#" target="_blank" rel="noopener"></a>
					</li>
				</ul>
			</div>
		)
	}
}

class Production extends React.Component {
	render() {
		return (
			<div className="inner">
				<h2 className="title">
					Our own<br />production
					<span className="title__post">Of women’s<br />clothing</span>
				</h2>
				<div className="production__wrapper">
					<div className="production__conditions">
						<div className="production__discount">
							Sale
							<img className="production__arrow" src="./arrow-active.svg" height="9" width="30" alt="Arrow" />
							<span className="production__scale">Up to 50 %</span>
						</div>
						<ul className="production__service">
							<li className="production__feature">Exchange</li>
							<li className="production__feature">Return</li>
							<li className="production__feature">Free delivery</li>
						</ul>
						<div className="vert">Suits</div>
					</div>
					<picture className="production__picture">
						<source srcSet="production-360.jpg, production-360-2x.jpg 2x" media="(min-width: 360px) and (max-width: 767px)" type="image/jpg"></source>
						<source srcSet="production-768-960.jpg, production-768-960-2x.jpg 2x" media="(min-width: 768px) and (max-width: 1366px)" type="image/jpg"></source>
						<source srcSet="production-1366-1440.jpg, production-1366-1440-2x.jpg 2x" media="(min-width: 1367px) and (max-width: 1440px)" type="image/jpg"></source>
						<source srcSet="production-1920.jpg, production-1920-2x.jpg 2x" media="(min-width: 1441px)" type="image/jpg"></source>
						<img className="production__img b-lazy" src="production-1920.jpg" alt="Suit" />
					</picture>
				</div>
			</div>
		)
	}
}

class Catalog extends React.Component {
	render() {
		return (
			<div className="inner">
				<div className="catalog__path">
					<div className="catalog__chapter">Главная</div>
					&nbsp;/&nbsp;
					<div className="catalog__chapter">Каталог</div>
				</div>
				<div className="catalog__represent">
					<div className="catalog__all">Все товары</div>
					<div className="catalog__view">
						<div className="catalog__rect"></div>
						<div className="catalog__rect catalog__rect_active"></div>
					</div>
				</div>
				<div className="catalog__sorting">
					<div className="catalog__sorting">Категории</div>
					<div className="catalog__sorting">Фильтры</div>
				</div>
				<div className="catalog__products">
					<div className="catalog__card">
						<picture className="catalog__picture">
							<source srcSet="dresses-360-768.jpg, dresses-360-768-2x.jpg 2x" media="(min-width: 360px) and (max-width: 960px)" type="image/jpg"></source>
							<source srcSet="dresses-960.jpg, dresses-960-2x.jpg 2x" media="(min-width: 961px) and (max-width: 1366px)" type="image/jpg"></source>
							<source srcSet="dresses-1366-1440.jpg, dresses-1366-1440-2x.jpg 2x" media="(min-width: 1367px) and (max-width: 1440px)" type="image/jpg"></source>
							<source srcSet="dresses-1920.jpg, dresses-1920-2x.jpg 2x" media="(min-width: 1441px)" type="image/jpg"></source>
							<img className="catalog__img b-lazy" src="dresses-1920.jpg" alt="Dress" />
						</picture>
						<div className="scope">
							<ul className="scope__color">
								<li className="scope__square"></li>
								<li className="scope__square"></li>
								<li className="scope__square"></li>
								<li className="scope__square"></li>
							</ul>
							<div className="scope__name">Название товара может быть длинное и даже в две строки</div>
							<div className="scope__price">
								900 грн
								<span className="scope__price-past">750 грн</span>
							</div>
						</div>
					</div>
					<div className="catalog__card">
						<picture className="catalog__picture">
							<source srcSet="dresses-360-768.jpg, dresses-360-768-2x.jpg 2x" media="(min-width: 360px) and (max-width: 960px)" type="image/jpg"></source>
							<source srcSet="dresses-960.jpg, dresses-960-2x.jpg 2x" media="(min-width: 961px) and (max-width: 1366px)" type="image/jpg"></source>
							<source srcSet="dresses-1366-1440.jpg, dresses-1366-1440-2x.jpg 2x" media="(min-width: 1367px) and (max-width: 1440px)" type="image/jpg"></source>
							<source srcSet="dresses-1920.jpg, dresses-1920-2x.jpg 2x" media="(min-width: 1441px)" type="image/jpg"></source>
							<img className="catalog__img b-lazy" src="dresses-1920.jpg" alt="Dress" />
						</picture>
						<div className="scope">
							<ul className="scope__color">
								<li className="scope__square"></li>
								<li className="scope__square"></li>
								<li className="scope__square"></li>
								<li className="scope__square"></li>
							</ul>
							<div className="scope__name">Название товара может быть длинное и даже в две строки</div>
							<div className="scope__price">
								900 грн
								<span className="scope__price-past">750 грн</span>
							</div>
						</div>
					</div>
					<div className="catalog__card">
						<picture className="catalog__picture">
							<source srcSet="dresses-360-768.jpg, dresses-360-768-2x.jpg 2x" media="(min-width: 360px) and (max-width: 960px)" type="image/jpg"></source>
							<source srcSet="dresses-960.jpg, dresses-960-2x.jpg 2x" media="(min-width: 961px) and (max-width: 1366px)" type="image/jpg"></source>
							<source srcSet="dresses-1366-1440.jpg, dresses-1366-1440-2x.jpg 2x" media="(min-width: 1367px) and (max-width: 1440px)" type="image/jpg"></source>
							<source srcSet="dresses-1920.jpg, dresses-1920-2x.jpg 2x" media="(min-width: 1441px)" type="image/jpg"></source>
							<img className="catalog__img b-lazy" src="dresses-1920.jpg" alt="Dress" />
						</picture>
						<div className="scope">
							<ul className="scope__color">
								<li className="scope__square"></li>
								<li className="scope__square"></li>
								<li className="scope__square"></li>
								<li className="scope__square"></li>
							</ul>
							<div className="scope__name">Название товара может быть длинное и даже в две строки</div>
							<div className="scope__price">
								900 грн
								<span className="scope__price-past">750 грн</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

class Target extends React.Component {
	render() {
		return (
			<div className="inner">
				<div className="intro">
					<h3 className="intro__title">Main target</h3>
					<p className="intro__description">Основная деятельность заказчика такая. У него есть такие проблемы. При создании нового дизайна учитывались такие факторы - фактор1, фактор2 и фактор3.</p>
				</div>
				<div className="vertical">1920</div>
				<div className="target__wrapper">
					<picture className="target__picture">
						<source srcSet="target-360.jpg, target-360-2x.jpg 2x" media="(min-width: 360px) and (max-width: 767px)" type="image/jpg"></source>
						<source srcSet="target-768.jpg, target-768-2x.jpg 2x" media="(min-width: 768px) and (max-width: 960px)" type="image/jpg"></source>
						<source srcSet="target-960.jpg, target-960-2x.jpg 2x" media="(min-width: 961px) and (max-width: 1366px)" type="image/jpg"></source>
						<source srcSet="target-1366-1440.jpg, target-1366-1440-2x.jpg 2x" media="(min-width: 1367px) and (max-width: 1440px)" type="image/jpg"></source>
						<source srcSet="target-1920.jpg, target-1920-2x.jpg 2x" media="(min-width: 1441px)" type="image/jpg"></source>
						<img className="target__img b-lazy" src="target-1920.jpg" alt="Model" />
					</picture>
					<div className="target__scope">
						<div className="target__body">
							<div className="target__inscr">Filters</div>
							<div className="target__count">
								<div id="js-target__over">2</div>
								|
								<div id="js-target__all">4</div>
							</div>
							<ul className="target__filters">
								<li className="target__criterion">Material</li>
								<li className="target__criterion">Color</li>
								<li className="target__criterion">Size</li>
							</ul>
						</div>
						<div className="target__clear">Clear all</div>
					</div>
				</div>
			</div>
		)
	}
}

class Fashion extends React.Component {
	render() {
		return(
			<div className="inner">
				<h2 className="title">The world of fashion</h2>
				<ul className="fashion__features">
					<li className="fashion__param">
						<span className="fashion__entry">Size</span>
						S / M
					</li>
					<li className="fashion__param">
						<span className="fashion__entry">Style</span>
						Casual
					</li>
					<li className="fashion__param">
						<span className="fashion__entry">Color</span>
						Blue
					</li>
				</ul>
				<picture className="fashion__picture">
					<source srcSet="fashion-360-768.jpg, fashion-360-768-2x.jpg 2x" media="(min-width: 360px) and (max-width: 960px)" type="image/jpg"></source>
					<source srcSet="fashion-960.jpg, fashion-960-2x.jpg 2x" media="(min-width: 961px) and (max-width: 1366px)" type="image/jpg"></source>
					<source srcSet="fashion-1366-1440.jpg, fashion-1366-1440-2x.jpg 2x" media="(min-width: 1367px) and (max-width: 1440px)" type="image/jpg"></source>
					<source srcSet="fashion-1920.jpg, fashion-1920-2x.jpg 2x" media="(min-width: 1441px)" type="image/jpg"></source>
					<img className="fashion__img b-lazy" src="fashion-1920.jpg" alt="Woman" />
				</picture>
				<div className="subtitle">Is woven from stories</div>
				<div className="fashion__card">
					<div className="fashion__wrapper">
						<picture className="fashion__preview">
							<source srcSet="leg-360.jpg, leg-360-2x.jpg 2x" media="(min-width: 360px) and (max-width: 767px)" type="image/jpg"></source>
							<source srcSet="leg-768-960.jpg, leg-768-960-2x.jpg 2x" media="(min-width: 768px) and (max-width: 1366px)" type="image/jpg"></source>
							<source srcSet="leg-1366-1440.jpg, leg-1366-1440-2x.jpg 2x" media="(min-width: 1367px) and (max-width: 1440px)" type="image/jpg"></source>
							<source srcSet="leg-1920.jpg, leg-1920-2x.jpg 2x" media="(min-width: 1441px)" type="image/jpg"></source>
							<img className="fashion__img b-lazy" src="leg-1920.jpg" alt="Woman" />
						</picture>
						<div className="scope">
							<ul className="scope__color">
								<li className="scope__square"></li>
								<li className="scope__square"></li>
								<li className="scope__square"></li>
							</ul>
							<div className="scope__name">Название товара может быть длинное</div>
							<div className="scope__price">
								1150 грн
								<span className="scope__price-past"></span>
							</div>
						</div>
					</div>
					<div className="fashion__incsr">Product card</div>
				</div>
			</div>
		)
	}
}

ReactDOM.render(<Promo />, document.getElementById("js-promo"));
ReactDOM.render(<Collection />, document.getElementById("js-collection"));
ReactDOM.render(<Production />, document.getElementById("js-production"));
ReactDOM.render(<Catalog />, document.getElementById("js-catalog"));

ReactDOM.render(<Target />, document.getElementById("js-target"));
ReactDOM.render(<Fashion />, document.getElementById("js-fashion"));

// import preHtml from './pug/index.pug';
// console.log(preHtml);

// const createBlurb = (featureObject) => {
	// return (
		// require("pug")
	// )
// };

// console.log(createBlurb);

// let req = require.context("../node_modules/pug/lib", true, /index.js$/),
	// tableTemplate = req("./index.js");
	
// console.log(tableTemplate);

// function loadData(param) {
	// return require(param);
// }

// let data = loadData("pug"),

// let	html = createBlurb.renderFile('./src/pug/index.pug');
// let	html = tableTemplate.renderFile('./src/pug/index.pug');
	
// console.log(createBlurb);
// console.log(html);

// let link = require("file-loader!pug-loader!./pug/index.pug");

// let template = require("pug-loader!./pug/index.pug");
// console.log(template);

// let html = template();
// console.log(html);

// let html = pug.renderFile('./pug/index.pug');

// console.log(html);

// console.log(html);

// import App from "./App.js";

// ReactDOM.render(<App />, document.getElementById("root"));

// function tick() {
	// const element = (
		// <div>
			// <h1>Hello, world!</h1>
			// <h2>It is {new Date().toLocaleTimeString()}</h2>
		// </div>
	// );
	
	// ReactDOM.render(element, document.getElementById("root"));
// }

// setInterval(tick, 1000);

const user = {
	name: "Piter"
};

const comment = {
	date: new Date(),
	text: "I hope you enjoy learning React!",
	author: {
		avatarUrl: "http://placekitten.com/g/64/64",
		name: "Hello Kitty"
	}
}

function Welcome(props) {
	return(
		<h1>Hello, {props.name}</h1>
	)
}

// class Welcome extends React.Component {
	// render() {
		// return (
			// <h1>Hello, {this.props.person}</h1>
		// )
	// }
// }

function App(props) {
	return(
		<div>
			<Welcome name="Sara" />
			<Welcome name="Michael" />
			<Welcome name="Anthony" />
		</div>
	)
}

function formatDate(date) {
	return date.toLocaleDateString();
}

function Avatar(props) {
	return (
		<img className="Avatar" 
			src={props.user.avatarUrl}
			alt={props.user.name}
		/>
	)
}

function UserInfo(props) {
	return (
		<div className="UserInfo">
			<Avatar user={props.user} />
			<div className="UserInfo-name">
				{props.user.name}
			</div>
		</div>
	)
}

function Comment(props) {
	return (
		<div className="Comment">
			<UserInfo user={props.author} />
			<div className="Comment-text">
				{props.text}
			</div>
			<div className="Comment-date">
				{formatDate(props.date)}
			</div>
		</div>
	)
}

function sum(a, b) {
	return a + b;
}

const INTERVAL = 100;

class Timer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {value: 0};
	}
	
	increment() {
		this.setState({value: this.state.value + 1});
	}
	
	componentDidMount() {
		this.timerID = setInterval(() => this.increment(), 1000 / INTERVAL)
	}
	
	componentWillUnmount() {
		clearInterval(this.timerID);
	}
	
	render() {
		const value = this.state.value;
	
		return (
			<div>
				<p>Таймер: </p>			
				<ClockFace value={this.state.value} />
			</div>
		);
	}
}

function ClockFace(props) {
	const value = props.value;
	
	return(
		<p>
			<span>{Math.round(value / INTERVAL / 60 / 60)} : </span>
			<span>{Math.round(value / INTERVAL / 60)} : </span>
			<span>{Math.round(value / INTERVAL)} . </span>
			<span>{value % INTERVAL}</span>
		</p>
	)
}

function DeleteUserLink(props) {
	function onClick(e) {
		e.preventDefault();
		
		console.log("Пользователь был удалён.");
	}
	
	return(
		<a href="#" onClick={onClick}>Удалить пользователя</a>
	)
}

class Conditioner extends React.Component {
	constructor(props) {
		super(props);
		this.state = {temperature: 0};
		
		this.onIncrease = this.onIncrease.bind(this);
		this.onDecrease = this.onDecrease.bind(this);
	}
	
	onIncrease() {
		this.setState(prevState => ({
			temperature: prevState.temperature + 1
		}))
	}
	
	onDecrease() {
		this.setState(prevState => ({
			temperature: prevState.temperature - 1
		}))
	}
	
	render() {
		return(
			<div>
				<h2>Текущая температура: {this.state.temperature}</h2>
				<button onClick={this.onDecrease}>-</button>
				<button onClick={this.onIncrease}>+</button>
			</div>
		)
	}
}

class Logger extends React.Component {
	onLog = () => {
		console.log("Объект: ", this);
	}
	
	// onLog() {
		// console.log("Объект: ", this);
	// }
	
	render() {
		return(
			<button onClick={this.onLog}>Лог</button>
		)
	}
}

function ErrorMessage(props) {
	return <h3>Произошла ошибка на сервере. Не удалось сохранить Ваши данные.</h3>;
}

function SuccessMessage(props) {
	return <h3>Ваши данные успешно сохранены.</h3>
}

function Response(props) {
	const isSuccess = props.isSuccess;
	
	// if (isSuccess) {
		// return <SuccessMessage />;
	// }
	
	// return <ErrorMessage />;
	
	return isSuccess ? <SuccessMessage /> : <ErrorMessage />
}

function SetFireButton(props) {
	return(
		<button className="orange" onClick={props.onClick}>Зажечь</button>
	)
}

function SnufOutButton(props) {
	return(
		<button className="blue" onClick={props.onClick}>Потушить</button>
	)
}

function SetFireMessage(props) {
	return <h3>Камин горит!</h3>;
}

function SnuffOutMessage(props) {
	return <h3>Камин не горит</h3>;
}

function Indicator(props) {
	const isBurning = props.isBurning;
	
	if (isBurning) {
		<SetFireMessage />
	}
	
	return <SnuffOutMessage />
}

class FirePlace extends React.Component {
	constructor(props) {
		super(props);
		this.onSetFire = this.onSetFire.bind(this);
		this.onSnuffOut = this.onSnuffOut.bind(this);
		this.state = {isBurning: false};
	}
	
	onSetFire() {
		this.setState({isBurning: true})
	}
	
	onSnuffOut() {
		this.setState({isBurning: false})
	}
	
	render() {
		const isBurning = this.state.isBurning;
		let button = null;
		
		if (isBurning) {
			button = <SnufOutButton onClick={this.onSnuffOut} />
		} else {
			button = <SetFireButton onClick={this.onSetFire} />
		}
		
		return(
			<div>
				<Indicator isBurning={isBurning} />
				{button}
			</div>
		)
	}
}

const errors = [
	'Failed to load resource: net::ERR_INSECURE_RESPONSE',
	'TypeError: e is undefined',
	'Uncaught ReferenceError: calculate is not defined'
];

function Console(props) {
	const errors = props.errors;
	
	return(
		<div>
			<h3>Attention!</h3>
			{errors.length > 0 && 
				<p>You have <b>{errors.length}</b> errors.</p>
			}
		</div>
	);
}

function DangerAlert(props) {
	return(
		<h3 className="alert alert-danger">{props.text}</h3>
	)
}

class Application extends React.Component {
	constructor(props) {
		super(props);
		this.state = {isDangerAlertShowed: true};
		this.toggleDangerAlert = this.toggleDangerAlert.bind(this)
	}
	
	toggleDangerAlert() {
		this.setState(prevState => ({
			isDangerAlertShowed: !prevState.isDangerAlertShowed
		}))
	}
	
	render() {
		return(
			<div>
				{this.state.isDangerAlertShowed ? <DangerAlert text={"Внимание! В приложении возникли некоторые проблемы!"} /> : null}
				<button onClick={this.toggleDangerAlert}>
					{this.state.isDangerAlertShowed ? "Скрыть" : "Показать"}
				</button>
			</div>
		)
	}
}

// const users = ["Вася", "Петя", "Максим", "Егор"];

// function UserList(props) {
	// function getKey(str) {
		// let key = 0;
		
		// for (let i = 0; i < str.length; i++) {
			// key += str.charCodeAt(i);
		// }
		
		// return key.toString();
	// }
	
	// const users = props.users,
		// items = users.map((user) => {
			// const key = getKey(user);
			
			// return <li key={key}>{user}</li>;
		// });
	
	// return (<ul>{items}</ul>);
// }

const users = [
	{id: 1, name: "Вася"}, 
	{id: 2, name: "Петя"}, 
	{id: 3, name: "Максим"}, 
	{id: 4, name: "Егор"}
];

const messages = [
	{id: 1, message: "Всем привет!", authorId: 1},
	{id: 2, message: "И тебе привет!", authorId: 2},
	{id: 3, message: "Привет, Вася :)", authorId: 3}
];

function Chat(props) {
	const users = props.users,
		userList = (
			<p>	Пользователи чата:
				{users.map((user) => {
					<b key={user.id}> {user.name}; </b>
				})}
			</p>
		),
		messageList = props.messages.map((message) => {
			let author = null;
			
			users.forEach((user) => {
				if (user.id === message.authorId) {
					author = user;
				}
			});
			
			return (
				<p key={message.id}>
					<b>{author.name}: </b>
					<span>{message.message}</span>
				</p>
			)
		});
		
	return (
		<div>
			{userList}
			{messageList}
		</div>
	)
}

// function UserItem(props) {
	// const user = props.user;
		
	// return (<li>{user.name}</li>)
// }

// function UserList(props) {
	// const users = props.users,
		// items = users.map((user) => {
			// return <UserItem key={user.id} user={user} />;
		// });
	
	// return (<ul>{items}</ul>);
// }

class LoginForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {login: "", password: ""};
		
		this.onChangeLogin = this.onChangeLogin.bind(this);
		this.onChangePassword = this.onChangePassword.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}
	
	onSubmit(event) {
		alert(`${this.state.login}, добро пожаловать!`);
		event.preventDefault();
	}
	
	onChangePassword(event) {
		this.setState({password: event.target.value});
	}
	
	onChangeLogin(event) {
		this.setState({login: event.target.value.toUpperCase()});
	}
	
	render() {
		return (
			<form onSubmit={this.onSubmit}>
				<p><label> Логин: <input name="login" type="text" value={this.state.login} onChange={this.onChangeLogin} /></label></p>
				<p><label> Пароль: <input name="password" type="password" value={this.state.password} onChange={this.onChangePassword} /></label></p>
				<p><input type="submit" value="Submit" /></p>
			</form>
		)
	}
}

class MessageForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {email: "", message: "Текст сообщения"};
		
		this.onChangeEmail = this.onChangeEmail.bind(this);
		this.onChangeMessage = this.onChangeMessage.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}
	
	onSubmit() {
		alert(`Сообщение успешно отправлено получателю ${this.state.email}`);
		event.preventDefault();
	}
	
	onChangeMessage() {
		this.setState({message: event.target.value});
	}
	
	onChangeEmail() {
		this.setState({email: event.target.value});
	}
	
	render() {
		return (
			<form onSubmit={this.onSubmit}>
				<p><label>
					Email получателя:&nbsp; 
					<input name="email" type="text" value={this.state.email} onChange={this.onChangeEmail} />
				</label></p>
				<p><label>
					Текст сообщения:&nbsp;
					<textarea name="message" type="text" value={this.state.message} onChange={this.onChangeMessage}></textarea>
				</label></p>
				<p><label><input type="submit" value="Submit" /></label></p>
			</form>
		)
	}
}

class LanguageForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {language: ""};
		
		this.onChangeSelect = this.onChangeSelect.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}
	
	onChangeSelect(event) {
		this.setState({language: event.target.value})
	}
	
	onSubmit(event) {
		alert(`Вы выбрали язык ${this.state.language}`);
		event.preventDefault();
	}
	
	render() {
		return (
			<form onSubmit={this.onSubmit}>		
				<label>
					Выберите язык программирования:
					<select style={{margin: "0 10px"}} value={this.state.language} onChange={this.onChangeSelect}>
						<option value="C++">C++</option>
						<option value="Java">Java</option>
						<option value="C#">C#</option>
						<option value="JavaScript">JavaScript</option>
						<option value="Scala">Scala</option>
					</select>
				</label>
				<input type="submit" value="Submit" />				
			</form>
		)
	}
}

class PersonForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {sex: "female", firstname: "", lastname: "", email: "", phone: ""};
		
		this.onChangeInput = this.onChangeInput.bind(this);
	}
	
	onChangeInput(event) {
		const name = event.target.name;
		
		this.setState({[name]: event.target.value});
	}
	
	render() {
		return (
			<form className="form-data">
				<label>
					First Name:
					<input name="firstname" type="text" value={this.state.firstname} onChange={this.onChangeInput} />
				</label>
				<label>
					Last Name:
					<input name="lastname" type="text" value={this.state.lastname} onChange={this.onChangeInput} />
				</label>
				<label>
					Email:
					<input name="email" type="email" value={this.state.email} onChange={this.onChangeInput} />
				</label>
				<label>
					Phone:
					<input name="phone" type="tel" value={this.state.phone} onChange={this.onChangeInput} />
				</label>
				<label>
					Sex:
					<select name="sex" value={this.state.sex} onChange={this.onChangeInput}>
						<option value="male">Male</option>
						<option value="female">Female</option>
					</select>
				</label>
			</form>
		)
	}
}

function SpeedDetector(props) {
	if (props.speed >= props.maxSpeed) {
		return (<div>Скорость превышена.</div>)
	}
	
	return (<div>Скорость не превышена.</div>)
}

const MAX_SPEED_IN_CITY_IN_KPH = 60;

// class SpeedRadar extends React.Component {
	// constructor(props) {
		// super(props);
		// this.state = {speed: null};
		
		// this.onChangeSpeed = this.onChangeSpeed.bind(this);	
	// }
	
	// onChangeSpeed(event) {
		// this.setState({speed: event.target.value});
	// }
	
	// render() {
		// const speed = this.state.speed;
		
		// return (
			// <div>
				// <div>Введите скорость в км/ч:</div>
				// <input value={speed} type="text" onChange={this.onChangeSpeed} />
				// <SpeedDetector speed={parseFloat(speed)} maxSpeed={MAX_SPEED_IN_CITY} />
			// </div>
		// )
	// }
// }

const UNIT = {
    KPH: 'Км/ч',
    MPH: 'Миль/ч'
};

function convertToKph(mph) {
	return mph * 1.61;
}

function convertToMph(kph) {
	return kph / 1.61;
}

function isValidSpeed(value) {
	if ((value !== null) && (value !== "") && (value !== undefined)) {
		let intValue = parseInt(value);
		
		return !(isNaN(intValue) || !isFinite(intValue));
	}
	
	return false;
}

function convertSpeed(value, convertor) {
	if (isValidSpeed(value)) {
		const intValue = parseInt(value);
		let converted = convertor(intValue),
			rounded = Math.round(converted * 100) / 100;
			
		return rounded.toString();
	}
	
	return "";
}

class SpeedSetter extends React.Component {
	constructor(props) {
		super(props);
		// this.state = {speed: ""};
		
		this.onChange = this.onChange.bind(this);
	}
	
	onChange(event) {
		// this.setState({speed: event.target.value});
		this.props.onChangeSpeed(event.target.value);
	}
	
	render() {
		const speed = this.props.speed;
		let	unit = this.props.unit;
			
		return (
			<p>
				<span>Введите скорость в {UNIT[unit]}: </span>
				<input value={speed} onChange={this.onChange} />
			</p>
		);
	}
}

class SpeedRadar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {speed: 0, unit: "KPH"};
		
		this.onChangeSpeedInKph = this.onChangeSpeedInKph.bind(this);
		this.onChangeSpeedInMph = this.onChangeSpeedInMph.bind(this);
	}
	
	onChangeSpeedInKph(speed) {
		this.setState({unit: "KPH", speed})
	}
	
	onChangeSpeedInMph(speed) {
		this.setState({unit: "MPH", speed})
	}
	
	render() {
		const unit = this.state.unit,
			speed = this.state.speed,
			kph = unit == "MPH" ? convertSpeed(speed, convertToKph) : speed,
			mph = unit == "KPH" ? convertSpeed(speed, convertToMph) : speed;
			
		return (
			<div>
				<SpeedSetter unit="KPH" speed={kph} onChangeSpeed={this.onChangeSpeedInKph} />
				<SpeedSetter unit="MPH" speed={mph} onChangeSpeed={this.onChangeSpeedInMph} />
				<SpeedDetector speed={kph} unit="KPH" maxSpeed={MAX_SPEED_IN_CITY_IN_KPH} />
			</div>
		)
	}
}

// ReactDOM.render(<Timer />, document.getElementById("root"));
// ReactDOM.render(<DeleteUserLink />, document.getElementById("root"));
// ReactDOM.render(<Logger />, document.getElementById("root"));
// ReactDOM.render(<Response isSuccess={true} />, document.getElementById("root"));
// ReactDOM.render(<FirePlace />, document.getElementById("root"));
// ReactDOM.render(<Console errors={errors} />, document.getElementById("root"));
// ReactDOM.render(<Application />, document.getElementById("root")); 
// ReactDOM.render(<UserList users={users} />, document.getElementById("root"));
// ReactDOM.render(<Chat users={users} messages={messages} />, document.getElementById("root"));
// ReactDOM.render(<LoginForm />, document.getElementById("root"));
// ReactDOM.render(<MessageForm />, document.getElementById("root"));
// ReactDOM.render(<LanguageForm />, document.getElementById("root"));
// ReactDOM.render(<PersonForm />, document.getElementById("root"));

// ReactDOM.render(<input value="hi" />, document.getElementById("root"));

// setTimeout(function() {
	// ReactDOM.render(<input value={null} />, document.getElementById("root"))
// }, 5000);

// ReactDOM.render(<SpeedRadar />, document.getElementById("root"));

// ReactDOM.render(<SuperGreatIconComponent />, document.getElementById("root"))

// setInterval(increment, 1000 / INTERVAL);

// ReactDOM.render(
	// <Comment 
		// date = {comment.date}  
		// text = {comment.text}
		// author = {comment.author} />, 
	// document.getElementById("root"));
	
// export { preHtml };
// if (module.hot) {
	// module.hot.accept(function (err) {
		// console.log('An error occurred while accepting new version');
	// });
// }