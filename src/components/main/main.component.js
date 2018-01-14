import MainTemplate from "./main.component.html";

class MainComponent {
	/* @ngInject */
	constructor($log) {
		//'ngInject';
    //this.DataService = DataService;
		this.$log = $log;
	/*	this.$uibModal = $uibModal;
		this.count=120;
		this.$location=$location;
		 console.log("en el del principio");*/
	}

	$onInit() {
	/*	this.$uibModal.open({
			component: "forceModal",
			backdrop: "static"
		});
			this.DataService.getModel(1)
			.then(response=>this.model=(response.data));*/
	}

	save() {
		 alert("save");
  this.DataService.postModel(this.model)
						.then( response=>console.log(JSON.stringify(response.data)))
						.catch(function(err) {
         console.log(err)
        });
	}
  cancelEvent(){
		console.log(JSON.stringify(this.$location));
		this.$location.replace();
		this.$location.url('../');
  }
	navigateEvent(){
   
  }
}
export default {
	template: MainTemplate,
	controller: MainComponent
}