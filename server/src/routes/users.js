const router = require("express").Router();
const { User, validate } = require("../models/user");
const crypto = require("crypto");
const sendEmail = require("../utils/sendEmail");
const bcrypt = require("bcrypt");
const token_tb = require("../models/token");

router.post("/", async (req, res) => {
	try {
		const { error } = validate(req.body);
		if (error)
			return res.status(400).send({ message: error.details[0].message });

		let user = await User.findOne({ email: req.body.email });
		if (user)
			return res
				.status(409)
				.send({ message: "User with given email already Exist!" });

		const salt = await bcrypt.genSalt(Number(process.env.SALT));
		const hashPassword = await bcrypt.hash(req.body.password, salt);

		user = await new User({ ...req.body, password: hashPassword }).save();

		const token = await new token_tb({
			userId: user._id,
			token: crypto.randomBytes(32).toString("hex"),
		}).save();
		const url = `${process.env.BASE_URL}/api/users/${user.id}/verify/${token.token}/`;
		await sendEmail(user.email, "Verify Email", url);
		return res.status(201).send({ message: "An Email sent to your account please verify" });
	} catch (error) {
		console.log(error);
		res.status(500).send({ message: "Internal Server Error" });
	}
});

router.get("/:id/verify/:token/", async (req, res) => {
	console.log(123445);
	try {
		const user = await User.findOne({ _id: req.params.id });
		console.log("user===>", user);
		if (!user) {
			return res.status(400).send({ message: "Invalid link" });
		} else {
			const Token = await token_tb.findOne({
				userId: user._id,
				token: req.params.token,
			});
			console.log("token===>", Token);
			
			if (!Token) {
				res.status(400).send({ message: "Invalid link" });
			}
			
			const upd = await User.updateOne({ _id: user._id, verified: true });
			console.log("UPD===>", upd);
			if (!upd) {
				res.status(400).send({ message: "Update error" });
			} else {
				console.log("test================>");
				const removeDel = await token_tb.findOneAndRemove({ userId: user._id });
				console.log("remove===>", removeDel);
				res.status(200).send({ message: "Email verified successfully" });
			}
		}


	} catch (error) {
		res.status(500).send({ message: "Internal Server Error" });
	}
});

module.exports = router;
