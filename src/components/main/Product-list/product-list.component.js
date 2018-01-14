import ProductListTemplate from "./product-list.component.html";


class ProductListComponent {
	/* @ngInject */
	constructor( productService) {
        'ngInject';
        this.productService = productService;
		this.pageTitle='Product List';
		this.showImage=true;
		this.products=productService.getAllProduct();
        	/*
		 this.productService.getAllProduct()
			.then(response=>this.products=(response.data));
		 */
	}

	$onInit() {	
        this.filteredProducts=this.products;
	}
	toggleImage(){
		 this.showImage = !this.showImage;
	}
     performFilter(filterBy){
        filterBy = filterBy.toLocaleLowerCase();
        return this.products.filter((product) =>
              product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
    }
    get listFilter() {
        return this._listFilter;
    }
    set listFilter(value) {
        this._listFilter = value;
        this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
    }

}
export default {
	template: ProductListTemplate,
	controller: ProductListComponent
}