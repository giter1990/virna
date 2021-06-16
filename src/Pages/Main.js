import React, { Component} from "react";
import { hot } from "react-hot-loader";
import ReactDOM from "react-dom";
import loadable from "@loadable/component";

const Promo = loadable(() => import("../Components/Promo.js")),
	Header = loadable(() => import("../Components/Header.js")),
	Slider = loadable(() => import("../Components/Slider.js")),
	Production = loadable(() => import("../Components/Production.js"));

class Main extends React.Component {
	constructor(props) {
		super(props);
	}
	
	componentDidMount() {
		let metaDescr = document.head.querySelector("[name][content]").content;
		
		metaDescr = "Virna - бренд украинской одежды с собственным производством";
		document.head.querySelector("[name][content]").content = metaDescr;
		document.title = "Virna | Главная";
		
		window.addEventListener("scroll", e => {
			if (document.getElementById("js-promo")) {
				import("../js/drop-header.js")
					.then(module => {
						module.default();
					});
			}
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
export default hot(module)(Main);