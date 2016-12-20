function  Products (place , price ,weight){
	this.place =place;
	this.price = price;
	this.weight = weight;
}
Products.prototype.getPrice= function(){
	return  this.price;
}

var product1= new Products("shelf1", 10 ,2);
var product2= new Products("shelf2", 20 ,3);
var product3= new Products("shelf4", 30 ,2);
var product4= new Products("shelf5", 40 ,3);
var product5= new Products("shelf1", 10 ,2);
var product6= new Products("shelf2", 20 ,3);
var product7= new Products("shelf4", 30 ,2);
var product8= new Products("shelf5", 40 ,3);
var product9= new Products("shelf1", 10 ,2);
var product10= new Products("shelf2", 20 ,3);
var product11= new Products("shelf4", 30 ,2);
var product12= new Products("shelf5", 40 ,3);
var product13= new Products("shelf1", 10 ,2);
var product14= new Products("shelf2", 20 ,3);
var product15= new Products("shelf4", 30 ,2);
