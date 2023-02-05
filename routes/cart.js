const router = require("express").Router();
const cart = require("../models/cart");
const { verifyAdmin, authorization } = require("./security");

router.get("/", verifyAdmin, async (req, res) => {
	try {
		const data = await cart.find();
		res.status(200).json(data);
	} catch (err) {
		res.status(500).json(err);
	}
});

//get cart by id router ========================================>

router.get("/:id", authorization, async (req, res) => {
	try {
		const data = await cart.findById(req.params.id);
		res.status(200).json(data);
	} catch (err) {
		res.status(500).json(err);
	}
});

//create cart route ===========================================>

router.post("/create", authorization, async (req, res) => {
	const newCart = new cart(req.body);
	try {
		const data = await newCart.save();
		res.status(200).json(data);
	} catch (err) {
		res.status(500).json(err);
	}
});

// router for updating the cart details using findByIdAndUpdate() function ======>

router.put("/:id", authorization, async (req, res) => {
	try {
		const data = await cart.findByIdAndUpdate(
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

//router for deleting cart from the data base using findByIdAndDelete() function =======>

router.delete("/:id", authorization, async (req, res) => {
	try {
		await cart.findByIdAndDelete(req.params.id);
		res.status(200).json("successfully deleted the cart from data base");
	} catch (err) {
		res.status(200).json(err);
	}
});
module.exports = router;
