const express = require ('express')
const cors = require("cors");
const registerRouter = require('./src/routes/registerRouter');
const loginRouter = require('./src/routes/loginRouter');
const app = express()

// app.use(cookieSession(
//     {
//         name:"session",
//         keys:["arun"],
//         maxAge:24*60*60*100,
//     }
// ))

// app.use(passport.initialize());
// app.use(passport.session());

app.use('/api/register',registerRouter)
app.use('/api/login',loginRouter)


// app.use(
//     cors({
//         origin:"http://localhost:3001",
//         methods:"GET,POST,PUT,DELETE",
//         Credentials:true,
//     })
// );


app.listen('3001',()=>{
    console.log("Server is running at port 3001");
})