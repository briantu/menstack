const mongoose = require("mongoose");
const Product = require("./models/product");

mongoose
	.connect("mongodb://localhost:27017/farmStand", { useNewUrlParser: true, useUnifiedTopology: true })
	.then(() => {
		console.log("MONGO CONNECTED");
	})
	.catch((err) => {
		console.log("MONGO CONNNECTION ERROR");
		console.log(err);
	});

// const p = new Product({
// 	name: "Grapefruit",
// 	price: 1.99,
// 	category: "fruit"
// });
// p
// 	.save()
// 	.then((p) => {
// 		console.log(p);
// 	})
// 	.catch((err) => {
// 		console.log(err);
// 	});

const seedProducts = [
	{
		name: "eggplant",
		price: 1.0,
		category: "vegetable"
	},
	{
		name: "watermelon",
		price: 4.99,
		category: "fruit"
	},
	{
		name: "milk",
		price: 2.69,
		category: "dairy"
	}
];

Product.insertMany(seedProducts)
	.then((res) => {
		console.log(res);
	})
	.catch((err) => {
		console.log(err);
	});
