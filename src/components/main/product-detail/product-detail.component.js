import ProductDetailTemplate from "./product-detail.component.html";

class ProductDetailComponent {
	/* @ngInject */
	constructor( $stateParams, productService ) {
	   'ngInject';
        this.productService = productService;
	 	this.pageTitle= 'Product Detail';
		this.product=productService.getProduct($stateParams.id);
		/*
		 this.productService.getProduct($stateParams.id)
			.then(response=>this.product=(response.data));
		 */
	}

	$onInit() {	
   
	}

}
export default {
	template: ProductDetailTemplate,
	controller: ProductDetailComponent
}