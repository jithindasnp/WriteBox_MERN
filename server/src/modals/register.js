const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://jithindaswritebox:writebox@cluster0.88ramux.mongodb.net/WRITEBOX_DB?retryWrites=true&w=majority')
const Schema = mongoose.Schema
const registerSchema = new Schema({
    loginId: { type:Schema.Types.ObjectId,ref:"login"}
})
let register = mongoose.model('register', registerSchema)
module.exports = register