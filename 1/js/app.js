function Products(place, price, weight) {
  this.place = place;
  this.price = price;
  this.weight = weight;
}
Products.prototype.getPrice = function() {
  return this.price;
}
var products = [];
var product1 = new Products("shelf1", 10, 2);
var product2 = new Products("shelf2", 20, 3);
var product3 = new Products("shelf4", 30, 2);
var product4 = new Products("shelf5", 40, 3);
var product5 = new Products("shelf1", 10, 2);
var product6 = new Products("shelf2", 20, 3);
var product7 = new Products("shelf4", 30, 2);
var product8 = new Products("shelf5", 40, 3);
var product9 = new Products("shelf1", 10, 2);
var product10 = new Products("shelf2", 20, 3);
var product11 = new Products("shelf4", 30, 2);
var product12 = new Products("shelf5", 40, 3);
var product13 = new Products("shelf1", 10, 2);
var product14 = new Products("shelf2", 20, 3);
var product15 = new Products("shelf4", 30, 2);
products.push(product1, product2, product3, product4, product5,
  product6, product7, product8, product9, product10,
  product11, product12, product13, product14, product15);
var sum = 0;
for (var i = 0; i < products.length; i++) {
  console.log(products[i].place, products[i].price, products[i].weight);
  sum += products[i].weight;
}
console.log("Total weight=" + sum);