import React, { Component} from "react";
import { hot } from "react-hot-loader";

class Phone extends React.Component {
	render() {
		return (
			<a className="phone" id="js-phone" href="tel:0800332512">
				0 800
				<span className="phone__number"> 332 512</span>
			</a>
		)
	}
}

export default hot(module)(Phone);