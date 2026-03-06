//use('ecommerce');

 //db.sales.insertMany([

//{ _id: 8, item: "Apple", price: 10, quantity: 5, category: "Fruit" },
//{ _id: 6, item: "Banana", price: 5, quantity: 10, category: "Fruit" },
//{ _id: 3, item: "Carrot", price: 8, quantity: 6, category: "Vegetable" },
//{ _id: 4, item: "Tomato", price: 6, quantity: 8, category: "Vegetable" },
//{ _id: 5, item: "Mango", price: 15, quantity: 3, category: "Fruit" }
// ]);

//db.sales.aggregate([
{ $match:{category:"Fruits"} }

//]);

use('ecommerce');

db.sales.aggregate([
{ $match: { category: "Fruit" } }
]);

use('ecommerce');


db.sales.aggregate([
{ $match: {category: "Fruit" } },
{ $project: {_id:0, item:1, price:1 } }

]);
