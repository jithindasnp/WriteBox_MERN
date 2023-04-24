
const mongoose = require('mongoose')

mongoose.connect(process.env.DB)
const schema = mongoose.Schema
const authSchema = new schema({
    id: { type: String, required: true },
    name: { type: String, required: true },
    provider: { type: String, required: true }
})
const authRegister = mongoose.model('authRegister', authSchema)
module.exports = authRegister
