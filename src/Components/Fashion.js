import React, { Component} from "react";
import { hot } from "react-hot-loader";
import Blazy from "../../node_modules/blazy/blazy.min.js";

class Fashion extends React.Component {
	render() {
		return(
			<section className="fashion" id="js-fashion">
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
						<source srcSet="img/fashion-360-768.jpg, img/fashion-360-768-2x.jpg 2x" media="(min-width: 360px) and (max-width: 960px)" type="image/jpg"></source>
						<source srcSet="img/fashion-960.jpg, img/fashion-960-2x.jpg 2x" media="(min-width: 961px) and (max-width: 1366px)" type="image/jpg"></source>
						<source srcSet="img/fashion-1366-1440.jpg, img/fashion-1366-1440-2x.jpg 2x" media="(min-width: 1367px) and (max-width: 1440px)" type="image/jpg"></source>
						<source srcSet="img/fashion-1920.jpg, img/fashion-1920-2x.jpg 2x" media="(min-width: 1441px)" type="image/jpg"></source>
						<img className="fashion__img b-lazy" data-src="img/fashion-1920.jpg" src="./tinytrans.gif" alt="Woman" />
					</picture>
					<div className="subtitle">Is woven from stories</div>
					<div className="fashion__card">
						<div className="fashion__wrapper">
							<picture className="fashion__preview">
								<source srcSet="img/leg-360.jpg, img/leg-360-2x.jpg 2x" media="(min-width: 360px) and (max-width: 767px)" type="image/jpg"></source>
								<source srcSet="img/leg-768-960.jpg, img/leg-768-960-2x.jpg 2x" media="(min-width: 768px) and (max-width: 1366px)" type="image/jpg"></source>
								<source srcSet="img/leg-1366-1440.jpg, img/leg-1366-1440-2x.jpg 2x" media="(min-width: 1367px) and (max-width: 1440px)" type="image/jpg"></source>
								<source srcSet="img/leg-1920.jpg, img/leg-1920-2x.jpg 2x" media="(min-width: 1441px)" type="image/jpg"></source>
								<img className="fashion__img b-lazy" data-src="img/leg-1920.jpg" src="./tinytrans.gif" alt="Woman" />
							</picture>
							<div className="scope">
								<ul className="scope__color">
									<li className="scope__square"></li>
									<li className="scope__square"></li>
									<li className="scope__square"></li>
								</ul>
								<div className="scope__name">Название товара может<br />быть длинное</div>
								<div className="scope__price">
									1150 грн
									<span className="scope__price-past"></span>
								</div>
							</div>
						</div>
						<div className="fashion__incsr">Product card</div>
					</div>
				</div>
			</section>	
		)
	}
}

export default hot(module)(Fashion);