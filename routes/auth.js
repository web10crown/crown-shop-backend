const user = require("../models/user");
const router = require("express").Router();
const cryptoJs = require("crypto-js");
const jwt = require("jsonwebtoken");

//registration code =======================================>

router.post("/register", async (req, res) => {
	const newUser = new user({
		username: req.body.username,
		email: req.body.email,
		password: cryptoJs.AES.encrypt(
			req.body.password,
			process.env.PASS_KEY
		).toString(),
	});
	try {
		const savedUser = await newUser.save();
		res.status(201).json(savedUser);
	} catch (err) {
		res.status(500).json(err);
	}
});

//login code ===========================================================================>

router.post("/login", async (req, res) => {
	try {
		const foundUser = await user.findOne({
			email: req.body.email
		});
		if (!foundUser) {
			res.status(401).json("user notfound");
		} else {
			const hashedPassword = cryptoJs.AES.decrypt(
				foundUser.password,
				process.env.PASS_KEY
			);
			const originalPassword = hashedPassword.toString(cryptoJs.enc.Utf8);
			const inputPassword = req.body.password;
			if (inputPassword !== originalPassword) {
				res.status(401).json("password not matched");
			} else {
				const token = jwt.sign({
						_id: foundUser._id,
						isAdmin: foundUser.isAdmin
					},
					process.env.JWT_KEY, {
						expiresIn: "5d"
					}
				);
				const {
					password,
					...others
				} = foundUser._doc;
				res.status(200).json({
					...others,
					token
				});
			}
		}
	} catch (err) {
		console.log(err);
		res.status(500).json(err);
	}
});
module.exports = router;