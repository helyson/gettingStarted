export default class DataService {
	constructor($http) {
		'ngInject';
	this.$http = $http;
	this.url="http://localhost:56775/api";
	}
	getModel(id) {
		console.log("aqui");

		 return this.$http.get(`${this.url+"/model"}?id=${id}`);
	}
		postModel(model) {
		console.log("aqui");

		 return this.$http.post(`${this.url+"/model"}`,model);
	}
	
}
