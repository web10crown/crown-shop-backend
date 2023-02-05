const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
	const authHeader = req.headers.token;

	if (authHeader) {
		const token = authHeader.split(" ")[1];
		jwt.verify(token, process.env.JWT_KEY, (err, user) => {
			if (err) {
				res.status(403).json("token has been expired or not valid");
			} else {
				req.user = user;
				next();
			}
		});
	} else {
		res.status(401).json("Login First");
	}
};
const authorization = (req, res, next) => {
	verifyToken(req, res, () => {
		if (req.params.id === req.user._id || req.user.isAdmin) {
			next();
		} else {
			res.status(403).json("you dont have Admin authority");
		}
	});
};
const verifyAdmin = (req, res, next) => {
	verifyToken(req, res, () => {
		if (req.user.isAdmin === true) {
			next();
		} else {
			res.status(403).json("you are not admin");
		}
	});
};

module.exports = { authorization, verifyAdmin };
