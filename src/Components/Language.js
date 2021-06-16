import React, { Component} from "react";
import { hot } from "react-hot-loader";

class Language extends React.Component {
	constructor(props) {
		super(props);
		this.state = {lang: "ru"};
		this.onChangeSelect = this.onChangeSelect.bind(this);
		this.onListActive = this.onListActive.bind(this);
		this.onItemActive = this.onItemActive.bind(this);
	}
	
	onChangeSelect(e) {
		this.setState({lang: e.target.value});
	}
	
	onListActive(e) {
		const listId = this.props.list,
			arrowId = this.props.arrow;
		let list = document.getElementById(listId),
			arrow = document.getElementById(arrowId),
			target = e.target.parentNode;
			
		if (e.target === arrow) {
			target = target.parentNode;
		}
		
		list.classList.toggle("language__list_visible");
		list.style.animation = "opacity 1.5s forwards";
		
		if (!arrow.classList.contains("language__arrow_active")) {
			arrow.style.animation = "rotate-open 1.5s forwards";
			arrow.classList.toggle("language__arrow_active"); 
		} else {
			arrow.style.animation = "rotate-close 1.5s forwards";
			arrow.classList.toggle("language__arrow_active");
		}
	}
	
	onItemActive(e) {
		this.setState({lang: e.target.textContent});
	}
		
	render() {
		const lang = this.props.lang,
			idLang = this.props.idLang,
			arrow = this.props.arrow,
			list = this.props.list;
		
		return (
			<div className={lang} id={idLang} onClick={this.onListActive}>
				<div className="language__pseudo" onChange={this.onItemActive}>
					{this.state.lang}
					<span className="language__arrow b-lazy" id={arrow} data-src="./tinytrans.gif">Arrow</span>
				</div>
				<select className="language__select">
					<option className="language__choice" value="ru">ru</option>
					<option className="language__choice" value="ua">ua</option>
					<option className="language__choice" value="en">en</option>
				</select>
				<ul className="language__list" id={list}>
					<li className="language__item" value="ru" onClick={this.onItemActive}>ru</li>
					<li className="language__item" value="uah" onClick={this.onItemActive}>ua</li>
					<li className="language__item" value="en" onClick={this.onItemActive}>en</li>
				</ul>
			</div>
		)
	}
}

export default hot(module)(Language);