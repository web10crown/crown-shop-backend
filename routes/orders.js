const router = require("express").Router();
const { verifyAdmin, authorization } = require("./security");
const orders = require("../models/orders");

router.get("/", verifyAdmin, async (req, res) => {
	try {
		const data = await orders.find();
		res.status(200).json(data);
	} catch (err) {
		res.status(500).json(err);
	}
});

//get orders by id router ========================================>

router.get("/:id", authorization, async (req, res) => {
	try {
		const data = await orders.findById(req.params.id);
		res.status(200).json(data);
	} catch (err) {
		res.status(500).json(err);
	}
});

//create orders route ===========================================>

router.post("/create", authorization, async (req, res) => {
	const newOrders = new orders(req.body);
	try {
		const data = await newOrders.save();
		res.status(200).json(data);
	} catch (err) {
		res.status(500).json(err);
	}
});

// router for updating the orders details using findByIdAndUpdate() function ======>

router.put("/:id", authorization, async (req, res) => {
	try {
		const data = await orders.findByIdAndUpdate(
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

//router for deleting orders from the data base using findByIdAndDelete() function =======>

router.delete("/:id", authorization, async (req, res) => {
	try {
		await orders.findByIdAndDelete(req.params.id);
		res.status(200).json("successfully deleted the orders from data base");
	} catch (err) {
		res.status(200).json(err);
	}
});
module.exports = router;
