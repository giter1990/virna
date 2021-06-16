import React, { Component} from "react";
import { hot } from "react-hot-loader";
import ReactDOM from "react-dom";
import loadable from "@loadable/component";

const Main = loadable(() => import("../Pages/Main.js"));

class Catalog extends React.Component {
	constructor(props) {
		super(props);
		this.showMain = this.showMain.bind(this);
		this.toggleView = this.toggleView.bind(this);
	}
	
	showMain(e) {
		e.preventDefault();
		ReactDOM.render(<Main />, document.getElementById("js-container"));
	}
	
	toggleView(e) {
		let	target = e.target,
			squares = document.querySelectorAll("#js-tile, #js-grid"),
			products = document.getElementById("js-products"),
			card = document.querySelectorAll("#js-card-1, #js-card-2, #js-card-3, #js-card-4");
		
		if (!target.classList.contains("catalog__rect_active")) {
			squares.forEach(item => {
				item.classList.toggle("catalog__rect_active");
			});
			products.classList.toggle("catalog__products_tile");
			products.classList.toggle("catalog__products_grid");
			card.forEach(item => {
				item.classList.toggle("catalog__card_tile");
				item.classList.toggle("catalog__card_grid");
			});
		}
	}
	
	render() {
		return (
			<section className="catalog" id="js-catalog">
				<div className="inner">
					<div className="catalog__path">
						<a className="catalog__chapter" id="js-main" href="#" onClick={this.showMain}>Главная</a>
						&nbsp;/&nbsp;
						<div className="catalog__chapter">Каталог</div>
					</div>
					<div className="catalog__represent">
						<div className="catalog__all">Все товары</div>
						<div className="catalog__view">
							<div className="catalog__rect catalog__rect_active" id="js-tile" onClick={this.toggleView}>Rect</div>
							<div className="catalog__rect" id="js-grid" onClick={this.toggleView}>Rect</div>
						</div>
					</div>
					<div className="catalog__sorting">
						<div className="catalog__categories b-lazy" id="js-categories" data-src="./tinytrans.gif">Категории</div>
						<div className="catalog__filters b-lazy" id="js-filters" data-src="./tinytrans.gif">Фильтры</div>
					</div>
					<ul className="catalog__size">
						<li className="catalog__item">XS</li>
						<li className="catalog__item">S</li>
						<li className="catalog__item">M</li>
						<li className="catalog__item">L</li>
					</ul>
					<div className="catalog__products catalog__products_tile" id="js-products">
						<div className="catalog__card catalog__card_tile" id="js-card-1">
							<div className="catalog__landmark">
								<div className="vert vert_catalog">Dressess</div>
								<img className="catalog__arrow b-lazy" data-src="./icons/arrow-catalog.svg" src="./tinytrans.gif" height="30" width="9" alt="Down arrow" />
							</div>
							<div className="catalog__body">
								<div className="ux">
									<button className="ux__purchase">Sale</button>
									<img className="ux__like b-lazy" data-src="./icons/like-catalog.svg" src="./tinytrans.gif" height="19" width="21" alt="Like" />
								</div>
								<picture className="catalog__picture">
									<source srcSet="img/dresses-360-768.webp, img/dresses-360-768-2x.webp 2x" media="(min-width: 360px) and (max-width: 960px)" type="image/webp"></source>
									<source srcSet="img/dresses-960.webp, img/dresses-960-2x.webp 2x" media="(min-width: 961px) and (max-width: 1366px)" type="image/webp"></source>
									<source srcSet="img/dresses-1366-1440.webp, img/dresses-1366-1440-2x.webp 2x" media="(min-width: 1367px) and (max-width: 1440px)" type="image/webp"></source>
									<source srcSet="img/dresses-1920.webp, img/dresses-1920-2x.webp 2x" media="(min-width: 1441px)" type="image/webp"></source>
									<img className="catalog__img b-lazy" data-src="img/dresses-1920.webp" src="./tinytrans.gif" alt="Dress" />
								</picture>
								<div className="scope">
									<ul className="scope__color">
										<li className="scope__square">Square</li>
										<li className="scope__square">Square</li>
										<li className="scope__square">Square</li>
										<li className="scope__square">Square</li>
									</ul>
									<div className="scope__name">
										Название товара может<br />быть длинное<span className="scope__ellipsis">...</span><span className="scope__ending"> и даже в две строки</span>
									</div>
									<div className="scope__price">
										750 грн
										<span className="scope__price-past">900 грн</span>
									</div>
								</div>
							</div>
						</div>
						<div className="catalog__card catalog__card_tile" id="js-card-2">
							<div className="catalog__landmark">
								<div className="vert vert_catalog">Suits</div>
								<img className="catalog__arrow b-lazy" data-src="./icons/arrow-catalog.svg" src="./tinytrans.gif" height="30" width="9" alt="Down arrow" />
							</div>
							<div className="catalog__body">
								<div className="ux">
									<button className="ux__purchase ux__purchase_new">New</button>
									<img className="ux__like b-lazy" data-src="./icons/like-catalog.svg" src="./tinytrans.gif" height="19" width="21" alt="Like" />
								</div>
								<picture className="catalog__picture">
									<source srcSet="img/production-360.webp, img/production-360-2x.webp 2x" media="(min-width: 360px) and (max-width: 960px)" type="image/webp"></source>
									<source srcSet="img/production-768-960.webp, img/production-768-960-2x.webp 2x" media="(min-width: 961px) and (max-width: 1366px)" type="image/webp"></source>
									<source srcSet="img/production-1366-1440.webp, img/production-1366-1440-2x.webp 2x" media="(min-width: 1367px) and (max-width: 1440px)" type="image/webp"></source>
									<source srcSet="img/production-1920.webp, img/production-1920-2x.webp 2x" media="(min-width: 1441px)" type="image/webp"></source>
									<img className="catalog__img b-lazy" data-src="img/production-1920.webp" src="./tinytrans.gif" alt="Suit" />
								</picture>
								<div className="scope">
									<ul className="scope__color">
										<li className="scope__square">Square</li>
										<li className="scope__square">Square</li>
									</ul>
									<div className="scope__name">
										Название товара может<br />быть длинное<span className="scope__ellipsis">...</span><span className="scope__ending"> и даже в две строки</span>
									</div>
									<div className="scope__price">
										1750 грн
										<span className="scope__price-past">Price</span>
									</div>
								</div>
							</div>
						</div>
						<div className="catalog__card catalog__card_tile" id="js-card-3">
							<div className="catalog__landmark">
								<div className="vert vert_catalog">Outwear</div>
								<img className="catalog__arrow b-lazy" data-src="./icons/arrow-catalog.svg" src="./tinytrans.gif" height="30" width="9" alt="Down arrow" />
							</div>
							<div className="catalog__body">
								<div className="ux">
									<button className="ux__purchase">Sale</button>
									<img className="ux__like b-lazy" data-src="./icons/like-catalog.svg" src="./tinytrans.gif" height="19" width="21" alt="Like" />
								</div>
								<picture className="catalog__picture">
									<source srcSet="img/outwear-360-768.webp, img/outwear-360-768-2x.webp 2x" media="(min-width: 360px) and (max-width: 960px)" type="image/webp"></source>
									<source srcSet="img/outwear-960.webp, img/outwear-960-2x.webp 2x" media="(min-width: 961px) and (max-width: 1366px)" type="image/webp"></source>
									<source srcSet="img/outwear-1366-1440.webp, img/outwear-1366-1440-2x.webp 2x" media="(min-width: 1367px) and (max-width: 1440px)" type="image/webp"></source>
									<source srcSet="img/outwear-1920.webp, img/outwear-1920-2x.webp 2x" media="(min-width: 1441px)" type="image/webp"></source>
									<img className="catalog__img b-lazy" data-src="img/outwear-1920.webp" src="./tinytrans.gif" alt="Outwear" />
								</picture>
								<div className="scope">
									<ul className="scope__color">
										<li className="scope__square">Square</li>
										<li className="scope__square">Square</li>
									</ul>
									<div className="scope__name">
										Название товара может<br />быть длинное<span className="scope__ellipsis">...</span><span className="scope__ending"> и даже в две строки</span>
									</div>
									<div className="scope__price">
										1900 грн
										<span className="scope__price-past">1235 грн</span>
									</div>
								</div>
							</div>
						</div>
						<div className="catalog__card catalog__card_tile" id="js-card-4">
							<div className="catalog__landmark">
								<div className="vert vert_catalog">Costumes</div>
								<img className="catalog__arrow b-lazy" data-src="./icons/arrow-catalog.svg" src="./tinytrans.gif" height="30" width="9" alt="Down arrow" />
							</div>
							<div className="catalog__body">
								<div className="ux">
									<button className="ux__purchase ux__purchase_new">New</button>
									<img className="ux__like b-lazy" data-src="./icons/like-catalog.svg" src="./tinytrans.gif" height="19" width="21" alt="Like" />
								</div>
								<picture className="catalog__picture">
									<source srcSet="img/costumes-360-768.webp, img/costumes-360-768-2x.webp 2x" media="(min-width: 360px) and (max-width: 960px)" type="image/webp"></source>
									<source srcSet="img/costumes-960.webp, img/costumes-960-2x.webp 2x" media="(min-width: 961px) and (max-width: 1366px)" type="image/webp"></source>
									<source srcSet="img/costumes-1366-1440.webp, img/costumes-1366-1440-2x.webp 2x" media="(min-width: 1367px) and (max-width: 1440px)" type="image/webp"></source>
									<source srcSet="img/costumes-1920.webp, img/costumes-1920-2x.webp 2x" media="(min-width: 1441px)" type="image/webp"></source>
									<img className="catalog__img b-lazy" data-src="img/costumes-1920.webp" src="./tinytrans.gif" alt="Costume" />
								</picture>
								<div className="scope">
									<ul className="scope__color">
										<li className="scope__square">Square</li>
										<li className="scope__square">Square</li>
									</ul>
									<div className="scope__name">
										Название товара может<br />быть длинное<span className="scope__ellipsis">...</span><span className="scope__ending"> и даже в две строки</span>
									</div>
									<div className="scope__price">
										2300 грн
										<span className="scope__price-past">1600 грн</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		)
	}
}

export default hot(module)(Catalog);