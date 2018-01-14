export default  class  StarRatingController{
	/* @ngInject */
	constructor( ) {
		this.myStyle="";
	}

	calculatedWidth(xwidth){
	 let widthRating=xwidth*76/5;
	 this.myStyle="width:"+widthRating.toString()+"px";
	}
}