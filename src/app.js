import angular from "angular";
import uiRouter from "@uirouter/angularjs";
import ngAnimate from "angular-animate";
import uiBootstrap from "angular-ui-bootstrap";

import MainModule from "./components/main/main.module";

import "./assets/less/main.less";

import AppRouting from "./configs/app.routing";

import AppComponent from "./app.component";
import WelcomeComponent from "./components/home/welcome.component";

import toSpace from "./filter/convert-to-space.filter";

import StarRatingDirective from "./directive/star-rating/star-rating.directive";

angular.module("rankmi", [uiRouter, ngAnimate, uiBootstrap,'mainModule'])
	.component("appRoot", AppComponent)
	.component("welcome", WelcomeComponent)
	.filter( "convertToSpace", () => toSpace)
	.directive("starRating", () => new StarRatingDirective())
	.config(AppRouting);