const express = require ('express')
const cors = require("cors")
const app = express()

app.use(cookieSession(
    {
        name:"session",
        keys:["arun"],
        maxAge:24*60*60*100,
    }
))

app.use(passport.initialize());
app.use(passport.session());


app.use(
    cors({
        origin:"http://localhost:3001",
        methods:"GET,POST,PUT,DELETE",
        Credentials:true,
    })
);


app.listen('3001',()=>{
    console.log("server is running");
})