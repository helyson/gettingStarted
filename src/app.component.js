import AppTemplate from "./app.component.html";

class AppComponent {
	/* @ngInject */
	constructor( ) {
		this.pageTitle="Rkm-test";
	}

	$onInit() {	
   
	}

}
export default {
	template: AppTemplate,
	controller: AppComponent
}