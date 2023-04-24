const mongoose = require("mongoose");


mongoose.connect(process.env.DB)
const userSchema = new mongoose.Schema({
	firstName: { type: String, required: true },
	lastName: { type: String, required: true },
	email: { type: String, required: true },
	password: { type: String, required: true },
	verified: { type: Boolean, default: false },
});


const User = mongoose.model("user", userSchema);
module.exports = User;
