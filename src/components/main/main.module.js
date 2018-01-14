import angular from "angular";
import uiRouter from "@uirouter/angularjs";
import ngAnimate from "angular-animate";
import uiBootstrap from "angular-ui-bootstrap";

import mainRouting from "./configs/main.routing";

import MainComponent from "./main.component";
import ProductList from "./product-list/product-list.component";
import ProductDetail from "./product-detail/product-detail.component";

import ProductService from "./product.service";

export default angular
  .module("mainModule",[uiRouter, ngAnimate, uiBootstrap])
	.component("main", MainComponent)
	.component("productList", ProductList)
	.component("productDetail", ProductDetail)
	.service("productService", ProductService)
	.config(mainRouting);
