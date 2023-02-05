const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema(
	{
		userId: { type: String, unique: true, required: true },
		products: [
			{
				productId: { type: String, required: true },
				quantity: { type: Number, default: 1 },
			},
		],
	},
	{ timestamps: true, collection: "cart" }
);
module.exports = new mongoose.model("cart", cartSchema);
