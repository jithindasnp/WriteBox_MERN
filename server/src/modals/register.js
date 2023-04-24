const mongoose = require('mongoose')

mongoose.connect(process.env.DB)
const Schema = mongoose.Schema
const registerSchema = new Schema({
    loginId: { type: Schema.Types.ObjectId, ref: "login" }
})
let register = mongoose.model('register', registerSchema)
module.exports = register