const router = require("express").Router();
const { verifyAdmin, authorization } = require("./security");
const products = require("../models/products");

//geting all products route ==========================================>

router.get("/", async (req, res) => {
	try {
		const data = await products.find();
		res.status(200).json(data);
	} catch (err) {
		res.status(500).json(err);
	}
});

//get product by id router ========================================>

router.get("/:id", async (req, res) => {
	try {
		const data = await products.findById(req.params.id);
		res.status(200).json(data);
	} catch (err) {
		res.status(500).json(err);
	}
});

//create product route ===========================================>

router.post("/create", verifyAdmin, async (req, res) => {
	const newProduct = new products(req.body);

	try {
		const data = await newProduct.save();
		res.status(200).json(data);
	} catch (err) {
		res.status(500).json(err);
	}
});

// router fro updating the product details using findByIdAndUpdate() function ======>

router.put("/:id", verifyAdmin, async (req, res) => {
	try {
		const data = await products.findByIdAndUpdate(
			req.params.id,
			{
				$set: req.body,
			},
			{ new: true }
		);
		res.status(200).json(data);
	} catch (err) {
		res.status(200).json(err);
	}
});

//router fro deleting product fromthe data base using findByIdAndDelete() function =======>

router.delete("/:id", verifyAdmin, async (req, res) => {
	try {
		await products.findByIdAndDelete(req.params.id);
		res.status(200).json("successfully deleted the product from data base");
	} catch (err) {
		res.status(200).json(err);
	}
});

module.exports = router;
