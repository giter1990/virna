import React, { Component} from "react";
import { hot } from "react-hot-loader";
import Blazy from "../../node_modules/blazy/blazy.min.js";
import "../icons/tinytrans.gif";

class Slider extends React.Component {
	render() {
		return(
			<section className="slider" id="js-slider">
				<div className="inner">
					<div className="slider__wrapper">
						<picture className="slider__picture">
							<source srcSet="img/collection-360-768.webp, img/collection-360-768-2x.webp 2x" media="(min-width: 360px) and (max-width: 960px)" type="image/webp"></source>
							<source srcSet="img/collection-960.webp, img/collection-960-2x.webp 2x" media="(min-width: 961px) and (max-width: 1366px)" type="image/webp"></source>
							<source srcSet="img/collection-1366-1440.webp, img/collection-1366-1440-2x.webp 2x" media="(min-width: 1367px) and (max-width: 1440px)" type="image/webp"></source>
							<source srcSet="img/collection-1920.webp, img/collection-1920-2x.webp 2x" media="(min-width: 1441px)" type="image/webp"></source>
							<img className="slider__img b-lazy" data-src="img/collection-1920.webp" src="./tinytrans.gif" alt="Suit" />
						</picture>
						<div className="slider__carousel b-lazy" id="js-carousel">
							<div className="slider__control">
								<h2 className="slider__title">Новая<br />коллекция<span className="slider__absence">Уже на сайте</span></h2>
								<button className="btn">Посмотреть</button>
								<div className="slider__transition">
									<img className="slider__arrow b-lazy" data-src="./arrow.svg" src="./tinytrans.gif" height="9" width="30" alt="Left arrow" />
									<img className="slider__arrow b-lazy" data-src="./arrow.svg" src="./tinytrans.gif" height="9" width="30" alt="Right arrow" />
								</div>
								<div className="slider__info">
									<div className="slider__notice">Мы не просто бренд!</div>
									<div className="slider__feature">
										У нас собственное<br />производство одежды
										<img className="slider__mini b-lazy" data-src="./arrow-notice.svg" src="./tinytrans.gif" height="9" width="30" alt="Arrow" />
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

export default hot(module)(Slider);