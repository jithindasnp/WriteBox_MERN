const mongoose = require('mongoose')

const connectDatabase = async () => {
    try {      
        mongoose.connect('mongodb+srv://jithindaswritebox:writebox@cluster0.88ramux.mongodb.net/WRITEBOX_DB?retryWrites=true&w=majority')
        const Schema = mongoose.Schema
        const registerSchema = new Schema({
            loginId: { type:Schema.Types.ObjectId,ref:"login"}
        })
        let register = mongoose.model('register', registerSchema)
        module.exports = register
        
        console.log('Connected to mongodb database successfully!')
    } catch (err) {
        console.log(err)
    }
}
connectDatabase()