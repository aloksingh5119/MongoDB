use('ecommerce');


db.sales.aggregate([
{ $match: {category: "Fruit" } },
{ $project: {_id:0, item:1, price:1 } }

]);

