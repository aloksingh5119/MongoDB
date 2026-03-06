use('ecommerce');

db.names.insertMany([
{
    name: "Wireless Mouse",
    price: 799,
    category: "Electronics",
    stock: 120,
    ratings: 4.5,
    tags: ["computer", "accessory", "wireless"],
    createdAt: new Date()
},
{
    name: "Mechanical Keyboard",
    price: 2499,
    category: "Electronics",
    stock: 80,
    ratings: 4.8,
    tags: ["keyboard", "mechanical"],
    createdAt: new Date()
},
{
    name: "Gaming Laptop",
    price: 85999,
    category: "Computers",
    stock: 30,
    ratings: 4.6,
    tags: ["laptop", "gaming", "high-performance"],
    createdAt: new Date()
},
{
    name: "Smartphone",
    price: 25999,
    category: "Electronics",
    stock: 150,
    ratings: 4.4,
    tags: ["phone", "android", "mobile"],
    createdAt: new Date()
},
{
    name: "Bluetooth Headphones",
    price: 1999,
    category: "Electronics",
    stock: 200,
    ratings: 4.3,
    tags: ["audio", "wireless", "headphones"],
    createdAt: new Date()
}
]);