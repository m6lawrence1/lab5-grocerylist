var items = [
{
	name: "orange",
	price: 0.90,
},
{
	name: "apple",
	price: 0.75,
},
{
	name: "carrot",
	price: 0.80,
},
{
	name: "lemon",
	price: 1,
},
{
	name: "kale",
	price: 2,
},
{
	name: "milk",
	price: 3,
},
{
	name: "eggs",
	price: 3,
}
]


items.forEach (function(product) {
   console.log("Item - " + product.name + ", price = " + product.price);
});


var sum = 0;
  for (var j = 0; j < items.length; j++) {
    sum += items[j].price;
  }
  console.log("Total cost = $" + sum);