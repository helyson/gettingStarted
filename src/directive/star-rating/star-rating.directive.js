import StarRatingTemplate from "./star-rating.directive.html";
import StarRatingController from "./star-rating.controller.js";

export default class StarRatingDirective {
  constructor(){
    this.scope = {
      rating: '@'
    };
    this.controller = StarRatingController;
    this.controllerAs = 'starctrl';
    this.bindToController = true; 
    this.restrict = 'EA';
     this.template = StarRatingTemplate;
    this.link = this.linkFunc;
  }
  linkFunc(scope, element, attrs,controller) {

    attrs.$observe('rating',function(newValue){
          	controller.calculatedWidth(newValue);
    });
  }
}
