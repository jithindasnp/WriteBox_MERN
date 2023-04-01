
const mongoose = require('mongoose')

const connectDatabase = async () => {
    try {      
       await mongoose.connect('mongodb+srv://jithindaswritebox:writebox@cluster0.88ramux.mongodb.net/WRITEBOX_DB?retryWrites=true&w=majority')
        const schema = mongoose.Schema
        const loginSchema = new schema({
            role:{type: String, required: true},
            email: { type: String },
            password: { type: String }
        })
        const login_tb = mongoose.model('login_tb', loginSchema)
        module.exports = login_tb
        
        console.log('Connected to mongodb database successfully!')
    } catch (err) {
        console.log(err)
    }
}
connectDatabase()