const mongoose = require("mongoose");


mongoose.connect('mongodb+srv://jithindaswritebox:writebox@cluster0.88ramux.mongodb.net/WRITEBOX_DB?retryWrites=true&w=majority')
const userSchema = new mongoose.Schema({
	firstName: { type: String, required: true },
	lastName: { type: String, required: true },
	email: { type: String, required: true },
	password: { type: String, required: true },
	verified: { type: Boolean, default: false },
});


const User = mongoose.model("user", userSchema);
module.exports = User;
