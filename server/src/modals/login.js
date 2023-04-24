
const mongoose = require('mongoose')

mongoose.connect(process.env.DB)
const schema = mongoose.Schema
const loginSchema = new schema({
    role: { type: String, required: true },
    email: { type: String },
    password: { type: String },
	verified: { type: Boolean, default: false }
})
const login_tb = mongoose.model('login_tb', loginSchema)
module.exports = login_tb