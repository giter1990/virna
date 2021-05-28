import React, { Component} from "react";
import { hot } from "react-hot-loader";
import ReactDOM from "react-dom";
import Promo from "../Components/Promo.js";
import Header from "../Components/Header.js";
import Slider from "../Components/Slider.js";
import Production from "../Components/Production.js";

let promoControl,
	header;

class Main extends React.Component {
	constructor(props) {
		super(props);
	}
	
	componentDidMount() {
		let metaDescr = document.head.querySelector("[name][content]").content;
		
		metaDescr = "Virna - бренд украинской одежды с собственным производством";
		document.head.querySelector("[name][content]").content = metaDescr;
		document.title = "Virna | Главная";
		
		promoControl = document.getElementById("js-promo-control");
		header = document.getElementById("js-header");
			
		window.addEventListener("scroll", () => {
			import("../js/drop-header.js")
				.then(module => {
					module.default();
				});
		});
	}
	
	render() {
		return (
			<div>
				<Promo />
				<Header />
				<Slider />
				<Production />
			</div>
		)
	}
}

ReactDOM.render(<Main />, document.getElementById("js-container"));
export { promoControl, header };
export default hot(module)(Main);