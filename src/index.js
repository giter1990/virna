import React, { Component} from "react";
import { hot } from "react-hot-loader";
import ReactDOM from "react-dom";
import Blazy from "../node_modules/blazy/blazy.min.js";
import "normalize.css";
import Main from "./Pages/Main.js";

import "./sass/style.sass";
import "../public/style.min.css";
import "./fonts/CeraPro-Bold.woff";
import "./fonts/CeraPro-Light.woff";
import "./fonts/CeraPro-Medium.woff";
import "./fonts/CeraPro-Regular.woff";
import "./fonts/montserrat-v15-latin-regular.woff";

import "../tiles/browserconfig.xml";
import "../tiles/small.svg";
import "../tiles/medium.svg";
import "../tiles/large.svg";
import "../favicon.png";
import "../favicon-ios.svg";

import "./img/promo/bg-360.jpg";
import "./img/promo/bg-360-2x.jpg";
import "./img/promo/bg-768.jpg";
import "./img/promo/bg-768-2x.jpg";
import "./img/promo/bg-960.jpg";
import "./img/promo/bg-960-2x.jpg";
import "./img/promo/bg-1366.jpg";
import "./img/promo/bg-1366-2x.jpg";
import "./img/promo/bg-1440.jpg";
import "./img/promo/bg-1440-2x.jpg";
import "./img/promo/bg-1920.jpg";
import "./img/promo/bg-1920-2x.jpg";

import "./img/main/slider/collection-360-768.jpg";
import "./img/main/slider/collection-360-768-2x.jpg";
import "./img/main/slider/collection-960.jpg";
import "./img/main/slider/collection-960-2x.jpg";
import "./img/main/slider/collection-1366-1440.jpg";
import "./img/main/slider/collection-1366-1440-2x.jpg";
import "./img/main/slider/collection-1920.jpg";
import "./img/main/slider/collection-1920-2x.jpg";

import "./img/main/production-360.jpg";
import "./img/main/production-360-2x.jpg";
import "./img/main/production-768-960.jpg";
import "./img/main/production-768-960-2x.jpg";
import "./img/main/production-1366-1440.jpg";
import "./img/main/production-1366-1440-2x.jpg";
import "./img/main/production-1920.jpg";
import "./img/main/production-1920-2x.jpg";

import "./img/catalog/dresses-360-768.jpg";
import "./img/catalog/dresses-360-768-2x.jpg";
import "./img/catalog/dresses-960.jpg";
import "./img/catalog/dresses-960-2x.jpg";
import "./img/catalog/dresses-1366-1440.jpg";
import "./img/catalog/dresses-1366-1440-2x.jpg";
import "./img/catalog/dresses-1920.jpg";
import "./img/catalog/dresses-1920-2x.jpg";

import "./img/catalog/costumes-360-768.jpg";
import "./img/catalog/costumes-360-768-2x.jpg";
import "./img/catalog/costumes-960.jpg";
import "./img/catalog/costumes-960-2x.jpg";
import "./img/catalog/costumes-1366-1440.jpg";
import "./img/catalog/costumes-1366-1440-2x.jpg";
import "./img/catalog/costumes-1920.jpg";
import "./img/catalog/costumes-1920-2x.jpg";

import "./img/catalog/outwear-360-768.jpg";
import "./img/catalog/outwear-360-768-2x.jpg";
import "./img/catalog/outwear-960.jpg";
import "./img/catalog/outwear-960-2x.jpg";
import "./img/catalog/outwear-1366-1440.jpg";
import "./img/catalog/outwear-1366-1440-2x.jpg";
import "./img/catalog/outwear-1920.jpg";
import "./img/catalog/outwear-1920-2x.jpg";

import "./img/target/target-360.jpg";
import "./img/target/target-360-2x.jpg";
import "./img/target/target-768.jpg";
import "./img/target/target-768-2x.jpg";
import "./img/target/target-960.jpg";
import "./img/target/target-960-2x.jpg";
import "./img/target/target-1366-1440.jpg";
import "./img/target/target-1366-1440-2x.jpg";
import "./img/target/target-1920.jpg";
import "./img/target/target-1920-2x.jpg";

import "./img/target/fashion-360-768.jpg";
import "./img/target/fashion-360-768-2x.jpg";
import "./img/target/fashion-960.jpg";
import "./img/target/fashion-960-2x.jpg";
import "./img/target/fashion-1366-1440.jpg";
import "./img/target/fashion-1366-1440-2x.jpg";
import "./img/target/fashion-1920.jpg";
import "./img/target/fashion-1920-2x.jpg";

import "./img/target/leg-360.jpg";
import "./img/target/leg-360-2x.jpg";
import "./img/target/leg-768-960.jpg";
import "./img/target/leg-768-960-2x.jpg";
import "./img/target/leg-1366-1440.jpg";
import "./img/target/leg-1366-1440-2x.jpg";
import "./img/target/leg-1920.jpg";
import "./img/target/leg-1920-2x.jpg";

import "./icons/social/instagram.svg";
import "./icons/social/instagram-disabled.svg";
import "./icons/social/instagram-hover.svg";
import "./icons/social/instagram-active.svg";

import "./icons/checkmark/checkmark.svg";
import "./icons/checkmark/checkmark-disabled.svg";
import "./icons/checkmark/checkmark-hover.svg";
import "./icons/checkmark/checkmark-active.svg";

import "./icons/language/arrow-language.svg";
import "./icons/language/arrow-language-disabled.svg";
import "./icons/language/arrow-language-hover.svg";
import "./icons/language/arrow-language-active.svg";

import "./icons/promo/logo.svg";

import "./icons/promo/bonum.svg";
import "./icons/promo/bonum-disabled.svg";
import "./icons/promo/bonum-hover.svg";
import "./icons/promo/bonum-active.svg";

import "./icons/promo/like-promo.svg";
import "./icons/promo/like-promo-disabled.svg";
import "./icons/promo/like-promo-hover.svg";
import "./icons/promo/like-promo-active.svg";

import "./icons/promo/cart-promo.svg";
import "./icons/promo/cart-promo-disabled.svg";
import "./icons/promo/cart-promo-hover.svg";
import "./icons/promo/cart-promo-active.svg";

import "./icons/header/facebook.svg";
import "./icons/header/facebook-disabled.svg";
import "./icons/header/facebook-hover.svg";
import "./icons/header/facebook-active.svg";

import "./icons/header/youtube.svg";
import "./icons/header/youtube-disabled.svg";
import "./icons/header/youtube-hover.svg";
import "./icons/header/youtube-active.svg";

import "./icons/header/like-header.svg";
import "./icons/header/like-header-disabled.svg";
import "./icons/header/like-header-hover.svg";
import "./icons/header/like-header-active.svg";

import "./icons/header/cart-header.svg";
import "./icons/header/cart-header-disabled.svg";
import "./icons/header/cart-header-hover.svg";
import "./icons/header/cart-header-active.svg";

import "./icons/header/face.svg";
import "./icons/header/face-disabled.svg";
import "./icons/header/face-hover.svg";
import "./icons/header/face-active.svg";

import "./icons/slider/arrow.svg";
import "./icons/slider/arrow-active.svg";
import "./icons/slider/arrow-notice.svg";

import "./icons/catalog/like-catalog.svg";
import "./icons/catalog/like-catalog-disabled.svg";
import "./icons/catalog/like-catalog-hover.svg";
import "./icons/catalog/like-catalog-active-pseudo.svg";
import "./icons/catalog/like-catalog-active.svg";

import "./icons/catalog/arrow-catalog.svg";
import "./icons/catalog/arrow-catalog-disabled.svg";
import "./icons/catalog/arrow-catalog-hover.svg";
import "./icons/catalog/arrow-catalog-active.svg";

import("./js/toggle-lang.js")
	.then(module => {
		module.default();
	});

let bLazy = new Blazy({
	selector: "img, #js-icon-header, #js-face"
});	

window.addEventListener("scroll", () => {
	let bLazy = new Blazy({
		selector: "#js-icon-header, #js-item-1, #js-face",
		success: element => {
			setTimeout(() => {
				if (/^background.+/i.test(element.getAttribute("style"))) {
					element.removeAttribute("style");
				}
			}, 200);
		}
	});
	
	import("./js/drop-header.js")
		.then(module => {
			module.default();
		});
});