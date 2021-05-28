import React, { Component} from "react";
import { hot } from "react-hot-loader";

class Target extends React.Component {
	render() {
		return (
			<section className="target" id="js-target">
				<div className="inner">
					<div className="intro">
						<h3 className="intro__title">Main target</h3>
						<p className="intro__description">Основная деятельность заказчика такая. У него есть такие проблемы. При создании нового дизайна учитывались такие факторы - фактор1, фактор2 и фактор3.</p>
					</div>
					<div className="vertical">1920</div>
					<div className="target__wrapper">
						<picture className="target__picture">
							<source srcSet="img/target-360.jpg, img/target-360-2x.jpg 2x" media="(min-width: 360px) and (max-width: 767px)" type="image/jpg"></source>
							<source srcSet="img/target-768.jpg, img/target-768-2x.jpg 2x" media="(min-width: 768px) and (max-width: 960px)" type="image/jpg"></source>
							<source srcSet="img/target-960.jpg, img/target-960-2x.jpg 2x" media="(min-width: 961px) and (max-width: 1366px)" type="image/jpg"></source>
							<source srcSet="img/target-1366-1440.jpg, img/target-1366-1440-2x.jpg 2x" media="(min-width: 1367px) and (max-width: 1440px)" type="image/jpg"></source>
							<source srcSet="img/target-1920.jpg, img/target-1920-2x.jpg 2x" media="(min-width: 1441px)" type="image/jpg"></source>
							<img className="target__img b-lazy" data-src="img/target-1920.jpg" src="./tinytrans.gif" alt="Model" />
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
			</section>	
		)
	}
}

export default hot(module)(Target);