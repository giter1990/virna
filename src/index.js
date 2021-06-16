import React, { Component} from "react";
import { hot } from "react-hot-loader";
import ReactDOM from "react-dom";
import Blazy from "../node_modules/blazy/blazy.min.js";
import "normalize.css";
import Main from "./Pages/Main.js";

import "./sass/style.sass";
import "./fonts/CeraPro-Bold.woff";
import "./fonts/CeraPro-Light.woff";
import "./fonts/CeraPro-Medium.woff";
import "./fonts/CeraPro-Regular.woff";
import "./fonts/montserrat-v15-latin-regular.woff";

import "../tiles/browserconfig.xml";
import "../tiles/small.svg";
import "../tiles/medium.svg";
import "../tiles/large.svg";
import "../favicon/favicon.png";
import "../favicon/favicon-ios.svg";

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

import "./img/main/notice.jpg";
import "./img/main/notice-2x.jpg";

import "./img/main/slider/novelty-360-768.png";
import "./img/main/slider/novelty-360-768-2x.png";
import "./img/main/slider/novelty-960.png";
import "./img/main/slider/novelty-960-2x.png";
import "./img/main/slider/novelty-1366-1440.png";
import "./img/main/slider/novelty-1366-1440-2x.png";
import "./img/main/slider/novelty-1920.png";
import "./img/main/slider/novelty-1920-2x.png";

import "./img/main/slider/summer-360-768.png";
import "./img/main/slider/summer-360-768-2x.png";
import "./img/main/slider/summer-960.png";
import "./img/main/slider/summer-960-2x.png";
import "./img/main/slider/summer-1366-1440.png";
import "./img/main/slider/summer-1366-1440-2x.png";
import "./img/main/slider/summer-1920.png";
import "./img/main/slider/summer-1920-2x.png";

import "./img/main/slider/linen-360-768.png";
import "./img/main/slider/linen-360-768-2x.png";
import "./img/main/slider/linen-960.png";
import "./img/main/slider/linen-960-2x.png";
import "./img/main/slider/linen-1366-1440.png";
import "./img/main/slider/linen-1366-1440-2x.png";
import "./img/main/slider/linen-1920.png";
import "./img/main/slider/linen-1920-2x.png";

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

import "./icons/promo-img/logo.svg";

import "./icons/promo-img/bonum.svg";
import "./icons/promo-img/bonum-disabled.svg";
import "./icons/promo-img/bonum-hover.svg";
import "./icons/promo-img/bonum-active.svg";

import "./icons/promo-bg/like-promo.svg";
import "./icons/promo-bg/like-promo-disabled.svg";
import "./icons/promo-bg/like-promo-hover.svg";
import "./icons/promo-bg/like-promo-active.svg";

import "./icons/promo-bg/cart-promo.svg";
import "./icons/promo-bg/cart-promo-disabled.svg";
import "./icons/promo-bg/cart-promo-hover.svg";
import "./icons/promo-bg/cart-promo-active.svg";

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
import "./icons/slider/arrow-disabled.svg";
import "./icons/slider/arrow-hover.svg";
import "./icons/slider/arrow-active.svg";

import "./icons/slider/arrow-notice.svg";
import "./icons/slider/arrow-notice-disabled.svg";
import "./icons/slider/arrow-notice-hover.svg";
import "./icons/slider/arrow-notice-active.svg";

import "./icons/catalog/like-catalog.svg";
import "./icons/catalog/like-catalog-disabled.svg";
import "./icons/catalog/like-catalog-hover.svg";
import "./icons/catalog/like-catalog-active-pseudo.svg";
import "./icons/catalog/like-catalog-active.svg";

import "./icons/catalog/arrow-catalog.svg";
import "./icons/catalog/arrow-catalog-disabled.svg";
import "./icons/catalog/arrow-catalog-hover.svg";
import "./icons/catalog/arrow-catalog-active.svg";

window.addEventListener("DOMContentLoaded", () => {
	import("./js/toggle-lang.js")
		.then(module => {
			module.default();
		});
});

window.addEventListener("scroll", () => {
	let bLazy = new Blazy({
		selector: "img, #js-promo, #js-item-1, #js-arrow-lang-promo, #js-arrow-lang-screen, #js-arrow-lang-header, #js-feature-1, #js-feature-2, #js-feature-3, #js-categories, #js-filters",
		success: element => {
			setTimeout(() => {
				if (/^background.+/i.test(element.getAttribute("style"))) {
					element.removeAttribute("style");
				}
			}, 200);
		}
	});
});