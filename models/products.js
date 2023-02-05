const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
	{
		brand: { type: String },
		name: { type: String, required: true },
		desc: { type: String, required: true },
		image: { type: String, required: true },
		category: { type: Array },
		size: { type: Array },
		colour: { type: Array },
		price: { type: Number, required: true },
	},
	{ timestamps: true, collection: "products" }
);
module.exports = mongoose.model("products", productSchema);
