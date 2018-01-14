import WelcomeTemplate from "./welcome.component.html";

class WelcomeComponent {
	/* @ngInject */
	constructor( ) {
		this.pageTitle="Transformando la app de product de ng2 a ngJS";
	}

	$onInit() {	
   
	}

}
export default {
	template: WelcomeTemplate,
	controller: WelcomeComponent
}