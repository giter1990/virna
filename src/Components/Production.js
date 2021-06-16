import React, { Component} from "react";
import { hot } from "react-hot-loader";

class Production extends React.Component {
	render() {
		return (
			<section className="production" id="js-production">
				<div className="inner">
					<h2 className="title">
						Our own<br />production
						<span className="title__post">Of women’s<br />clothing</span>
					</h2>
					<div className="production__wrapper">
						<div className="production__conditions">
							<div className="production__discount">
								Sale
								<a className="production__arrow" href="#">
									<img className="production__icon b-lazy" data-src="./icons/arrow.svg" src="./tinytrans.gif" height="9" width="30" alt="Arrow" />
								</a>
								<span className="production__scale">Up to 50 %</span>
							</div>
							<ul className="production__service">
								<li className="production__feature b-lazy" id="js-feature-1" data-src="./tinytrans.gif">Exchange</li>
								<li className="production__feature b-lazy" id="js-feature-2" data-src="./tinytrans.gif">Return</li>
								<li className="production__feature b-lazy" id="js-feature-3" data-src="./tinytrans.gif">Free delivery</li>
							</ul>
							<div className="vert vert_production">Suits</div>
						</div>
						<picture className="production__picture">
							<source srcSet="img/production-360.webp, img/production-360-2x.webp 2x" media="(min-width: 360px) and (max-width: 767px)" type="image/webp"></source>
							<source srcSet="img/production-768-960.webp, img/production-768-960-2x.webp 2x" media="(min-width: 768px) and (max-width: 1366px)" type="image/webp"></source>
							<source srcSet="img/production-1366-1440.webp, img/production-1366-1440-2x.webp 2x" media="(min-width: 1367px) and (max-width: 1440px)" type="image/webp"></source>
							<source srcSet="img/production-1920.webp, img/production-1920-2x.webp 2x" media="(min-width: 1441px)" type="image/webp"></source>
							<img className="production__img b-lazy" data-src="img/production-1920.webp" src="./tinytrans.gif" alt="Suit" />
						</picture>
					</div>
				</div>
			</section>
		)
	}
}

export default hot(module)(Production);