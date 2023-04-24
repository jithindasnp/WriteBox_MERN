const mongoose = require("mongoose");
const Schema = mongoose.Schema;

mongoose.connect(process.env.DB)
const tokenSchema = new Schema({
	userId: {
		type: Schema.Types.ObjectId,
		required: true,
		ref: "login"
	},
	token: { type: String, required: true },
	createdAt: { type: Date, default: Date.now, expires: 3600 },
});

const token_tb = mongoose.model("token", tokenSchema);
module.exports=token_tb
