
const mongoose = require('mongoose')

const connectDatabase = async () => {
    try {
        await mongoose.connect('mongodb+srv://jithindaswritebox:writebox@cluster0.88ramux.mongodb.net/WRITEBOX_DB?retryWrites=true&w=majority')
        const schema = mongoose.Schema
        const authSchema = new schema({
            id: { type: String, required: true },
            name: { type: String, required: true },
            provider: { type: String, required: true }
        })
        const authRegister = mongoose.model('authRegister', authSchema)
        module.exports = authRegister

    } catch (err) {
        console.log(err)
    }
}
connectDatabase()