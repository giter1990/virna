import React, { Component} from "react";
import { hot } from "react-hot-loader";
import Header from "../Components/Header.js";
import Catalog from "../Components/Catalog.js";
import Production from "../Components/Production.js";

class Sample extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			header: document.getElementById("js-header")
		}
	}
	
	componentDidMount(){
		let metaDescr = document.head.querySelector("[name][content]").content;
		
		metaDescr = "Virna - бренд украинской одежды с каталогом товаров";
		document.head.querySelector("[name][content]").content = metaDescr;
		document.title = "Virna | Каталог";
	}
	
	render() {
		return (
			<div>
				<Header value={this.state.header} />
				<Catalog />
				<Production />
			</div>
		)
	}
}

export default hot(module)(Sample);