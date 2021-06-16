import React, { Component} from "react";
import { hot } from "react-hot-loader";
import { tns } from "../../node_modules/tiny-slider/src/tiny-slider.js";

class Slider extends React.Component {
	componentDidMount() {
		let prev = document.querySelector("#js-prev"),
			next = document.querySelector("#js-next"),
			slide = document.querySelectorAll("#js-slide-1, #js-slide-2, #js-slide-3"),
			title = document.getElementById("js-title"),
			absense = document.getElementById("js-absense"),
			temp = document.createElement("span"),
			slider = tns({
				autoplay: true,
				autoplayButtonOutput: false,
				autoplayTimeout: 4000,
				container: "#js-carousel",
				freezable: false,
				mouseDrag: true,
				nav: false,
				nextButton: next,
				prevButton: prev,
				preventActionWhenRunning: true,
				preventScrollOnTouch: "force",
				speed: 700,
				rewind: true,
				responsive: {
					960: {
						arrowKeys: true
					}
				}
			});
			
		temp.classList.add("slider__absence");
		temp.innerHTML = absense;
			
		let customizedFunctionBefore = () => {
				title.style.animation = "disappear 1s forwards";
			},
			customizedFunction = () => {
				title.style.animation = "appear 1.5s forwards";
								
				slide.forEach((item, i) => {
					if ((item.classList.contains("tns-slide-active")) && (i === 0)) {
						title.innerHTML = "Новая<br>коллекция";
						title.appendChild(temp);
						temp.textContent = "Уже на сайте";
					}
					
					if ((item.classList.contains("tns-slide-active")) && (i === 1)) {
						title.innerHTML = "Летняя<br>коллекция";
						title.appendChild(temp);
						temp.textContent = "Уже доступна к заказу";
					}
					
					if ((item.classList.contains("tns-slide-active")) && (i === 2)) {
						title.innerHTML = "Льняная<br>одежда";
						title.appendChild(temp);
						temp.textContent = "Для жаркого лета";
					}
				});	
			};
			
		slider.events.on("transitionStart", customizedFunctionBefore);
		slider.events.on("transitionEnd", customizedFunction);
	}
	
	render() {
		return(
			<section className="slider" id="js-slider">
				<div className="inner">
					<div className="slider__wrapper">
						<div className="slider__carousel" id="js-carousel">
							<picture className="slider__picture" id="js-slide-1">
								<source srcSet="img/novelty-360-768.webp, img/novelty-360-768-2x.webp 2x" media="(min-width: 360px) and (max-width: 960px)" type="image/webp"></source>
								<source srcSet="img/novelty-960.webp, img/novelty-960-2x.webp 2x" media="(min-width: 961px) and (max-width: 1366px)" type="image/webp"></source>
								<source srcSet="img/novelty-1366-1440.webp, img/novelty-1366-1440-2x.webp 2x" media="(min-width: 1367px) and (max-width: 1440px)" type="image/webp"></source>
								<source srcSet="img/novelty-1920.webp, img/novelty-1920-2x.webp 2x" media="(min-width: 1441px)" type="image/webp"></source>
								<img className="slider__img b-lazy" data-src="img/novelty-1920.webp" src="./tinytrans.gif" alt="Suits" />
							</picture>
							<picture className="slider__picture" id="js-slide-2">
								<source srcSet="img/summer-360-768.webp, img/summer-360-768-2x.webp 2x" media="(min-width: 360px) and (max-width: 960px)" type="image/webp"></source>
								<source srcSet="img/summer-960.webp, img/summer-960-2x.webp 2x" media="(min-width: 961px) and (max-width: 1366px)" type="image/webp"></source>
								<source srcSet="img/summer-1366-1440.webp, img/summer-1366-1440-2x.webp 2x" media="(min-width: 1367px) and (max-width: 1440px)" type="image/webp"></source>
								<source srcSet="img/summer-1920.webp, img/summer-1920-2x.webp 2x" media="(min-width: 1441px)" type="image/webp"></source>
								<img className="slider__img b-lazy" data-src="img/summer-1920.webp" src="./tinytrans.gif" alt="Summer" />
							</picture>
							<picture className="slider__picture" id="js-slide-3">
								<source srcSet="img/linen-360-768.webp, img/linen-360-768-2x.webp 2x" media="(min-width: 360px) and (max-width: 960px)" type="image/webp"></source>
								<source srcSet="img/linen-960.webp, img/linen-960-2x.webp 2x" media="(min-width: 961px) and (max-width: 1366px)" type="image/webp"></source>
								<source srcSet="img/linen-1366-1440.webp, img/linen-1366-1440-2x.webp 2x" media="(min-width: 1367px) and (max-width: 1440px)" type="image/webp"></source>
								<source srcSet="img/linen-1920.webp, img/linen-1920-2x.webp 2x" media="(min-width: 1441px)" type="image/webp"></source>
								<img className="slider__img b-lazy" data-src="img/linen-1920.webp" src="./tinytrans.gif" alt="Linen" />
							</picture>
						</div>
						<div className="slider__control">
							<h2 className="slider__title" id="js-title">Новая<br />коллекция<span className="slider__absence" id="js-absense">Уже на сайте</span></h2>
							<button className="btn">Посмотреть</button>
							<div className="slider__transition" id="js-arrows">
								<a className="slider__arrow" id="js-prev">
									<img className="slider__icon b-lazy" data-src="./icons/arrow.svg" src="./tinytrans.gif" height="9" width="30" alt="Left arrow" />
								</a>
								<a className="slider__arrow" id="js-next">
									<img className="slider__icon b-lazy" data-src="./icons/arrow.svg" src="./tinytrans.gif" height="9" width="30" alt="Right arrow" />
								</a>
							</div>
							<div className="slider__info">
								<div className="slider__notice">Мы не просто бренд!</div>
								<div className="slider__feature">
									У нас собственное<br />производство одежды
									<a className="slider__mini" href="#">
										<img className="slider__details b-lazy" data-src="./icons/arrow-notice.svg" src="./tinytrans.gif" height="9" width="30" alt="Arrow" />
									</a>
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