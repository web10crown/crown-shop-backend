const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/user");
const productRoute = require("./routes/products");
const cartRouter = require("./routes/cart");
const orderRouter = require("./routes/orders");
const stripeRouter = require("./routes/stripe");
const compression = require("compression");

dotenv.config();
app.use(cors());
app.use(express.json());
app.use(compression());

let setCache = function (req, res, next) {
	const period = 60 * 60 * 12;

	if (req.method == "GET") {
		res.set("Cache-control", `public, max-age=${period}`);
	} else {
		res.set("Cache-control", `no-store`);
	}

	next();
};

app.use(setCache);

//mongoose connection==============================>

mongoose.set("strictQuery", true);
mongoose
	.connect(process.env.MONGO_URL)
	.then(() => console.log("db conected"))
	.catch((err) => console.log(err));

//routes start from here ============================>

app.use("/api/auth", authRoute);
app.use("/api/user", userRoute);
app.use("/api/products", productRoute);
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);
app.use("/api/payment/", stripeRouter);

//app listening code ==================================>

app.listen(5000, () => {
	console.log("running 5000");
});
