import React, { Component} from "react";
import { hot } from "react-hot-loader";
import loadable from "@loadable/component";

const Header = loadable(() => import("../Components/Header.js")),
	Catalog = loadable(() => import("../Components/Catalog.js")),
	Production = loadable(() => import("../Components/Production.js"));

class Sample extends React.Component {
	constructor(props) {
		super(props);
	}
	
	componentDidMount() {
		let metaDescr = document.head.querySelector("[name][content]").content;
		
		metaDescr = "Virna - бренд украинской одежды с каталогом товаров";
		document.head.querySelector("[name][content]").content = metaDescr;
		document.title = "Virna | Каталог";
	}
	
	render() {
		return (
			<div>
				<Header value={this.props.value} />
				<Catalog />
				<Production />
			</div>
		)
	}
}

export default hot(module)(Sample);