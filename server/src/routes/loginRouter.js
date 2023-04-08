const express = require('express')
const loginRouter = express.Router()
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const login_tb = require('../modals/login')
const crypto = require("crypto");
const { User } = require('../modals/user')
const token_tb = require('../modals/token')
const sendEmail = require("../utils/sendEmail");




loginRouter.post('/', async (req, res) => {

    const { email, password } = req.body
    // console.log(req.body);

   try {
    const loginDetails = await login_tb.findOne({ email:email })
    // console.log(loginDetails);
    if (!loginDetails) {
        res.status(400).json({
            message: "Email doesn't exists"
        })
    } else {
        const hashed =await bcrypt.compare(password, loginDetails.password)
        // console.log(hashed);
        if (hashed == true) {
            const token = jwt.sign({ loginId: loginDetails._id }, 'secret_007', { expiresIn: "1h" })

            const emailToken = await new token_tb({
                userId: loginDetails._id,
                token: crypto.randomBytes(32).toString("hex"),
            }).save();

            const url = `${process.env.BASE_URL}/users/${loginDetails.id}/verify/${emailToken.token}/`;
            
            const send=await sendEmail(email, "Verify Email", url);

            return res.status(200).json({
                message: "Login successful",
                success: true,
                error: false,
                token: token,
                role: "vendor"
            })
        } else {
            res.status(404).json({
                message: "password error",
                success: false,
                error: true
            })
        }
    }
   } catch (error) {
    console.log("ERROR=====>",error);
   }
})


loginRouter.get("/:id/verify/:token/", async (req, res) => {
	try {
		const user = await login_tb.findOne({ _id: req.params.id });
		console.log("user===>", user);
		if (!user) {
			return res.status(400).json({ message: "Invalid link" });
		} else {
			const Token = await token_tb.findOne({
				userId: user._id,
				token: req.params.token,
			});
			console.log("token===>", Token);
			
			if (!Token) {
				res.status(400).json({ message: "Invalid link" });
			}
			
			const upd = await login_tb.findOneAndUpdate({ _id: user._id, verified: true });
			console.log("UPD===>", upd);
			if (!upd) {
				res.status(400).json({ message: "Update error" });
			} else {
				console.log("test================>");
				const removeDel = await token_tb.findOneAndRemove({ userId: user._id });
				console.log("remove===>", removeDel);               
				return res.status(200).json({ message: "Email verified successfully",verified: true });
			}
		}


	} catch (error) {
        console.log(error);
		res.status(500).send({ message: "Internal Server Error" });
	}
});


module.exports = loginRouter