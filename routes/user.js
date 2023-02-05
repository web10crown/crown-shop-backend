const users = require("../models/user");
const router = require("express").Router();
const { verifyAdmin, authorization } = require("./security");

// getting all user with admins id nd authentication ==========================>

router.get("/", verifyAdmin, async (req, res) => {
	const query = req.query.new;
	try {
		const data = query
			? await users.find().sort({ _id: -1 }).limit(10)
			: await users.find();
		res.status(200).json(data);
	} catch (err) {
		res.status("500").json("err");
	}
});

// get user details router ===============================>

router.get("/:id", verifyAdmin, async (req, res) => {
	try {
		const data = await users.find({ _id: req.params.id });
		res.status(200).json(data);
	} catch (err) {
		res.status(500).json(err);
	}
});

// update router to update user details =====================================>

router.put("/:id", authorization, async (req, res) => {
	if (req.body.password) {
		req.body.password = cryptoJs.AES.encrypt(
			req.body.password,
			process.env.PASS_KEY
		).toString;
	}
	try {
		const data = await users.findByIdAndUpdate(
			req.params.id,
			{
				$set: req.body,
			},
			{ new: true }
		);
		res.status(200).json(data);
	} catch (err) {
		res.status(500).json(err);
	}
});

// delete router to delete user details and id from server ===================>

router.delete("/:id", authorization, async (req, res) => {
	try {
		await users.findByIdAndDelete(req.params.id);
		res.status(200).json("user deleted successfully");
	} catch (err) {
		res.status(500).json(err);
	}
});

// user stats for admin getting 1 year data of subscribed users ===================>

router.get("/stats", verifyAdmin, async (req, res) => {
	const date = new Date();
	const lastYear = new Date(date.setFullYear(date.getFullYear() - 1));
	try {
		const data = await users.aggregate([
			{ $match: { createdAt: { $gte: lastYear } } },
			{ $project: { $month: "$createdAt" } },
			{ $group: { _id: "$month" }, total: { $sum: 1 } },
		]);
		res.status(200).json(data);
	} catch (err) {
		res.status(500).json(err);
	}
});
module.exports = router;
