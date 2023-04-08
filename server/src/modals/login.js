
const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://jithindaswritebox:writebox@cluster0.88ramux.mongodb.net/WRITEBOX_DB?retryWrites=true&w=majority')
const schema = mongoose.Schema
const loginSchema = new schema({
    role: { type: String, required: true },
    email: { type: String },
    password: { type: String },
	verified: { type: Boolean, default: false }
})
const login_tb = mongoose.model('login_tb', loginSchema)
module.exports = login_tb