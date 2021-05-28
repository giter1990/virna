import React, { Component} from "react";
import { hot } from "react-hot-loader";

class Interact extends React.Component {
	render() {
		const section = this.props.section,
			li = this.props.li,
			target = this.props.target,
			rel = this.props.rel,
			icon1 = this.props.icon1,
			icon2 = this.props.icon2,
			icon3 = this.props.icon3;
			
		return (
			<ul className={section}>
				<li className={li}>
					<a className="interact__link" href="#" target={target} rel={rel}>{icon1}</a>
				</li>
				<li className={li}>
					<a className="interact__link" href="#" target="_blank" rel="noopener">{icon2}</a>
				</li>
				<li className={li}>
					<a className="interact__link" href="#" target={target} rel={rel}>{icon3}</a>
				</li>
			</ul>
		)
	}
}

export default hot(module)(Interact);