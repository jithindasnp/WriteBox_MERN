const express = require ('express')
const cors = require("cors");
const registerRouter = require('./src/routes/registerRouter');
const loginRouter = require('./src/routes/loginRouter');
const app = express()

const authRoute = require('./src/routes/auth')

const passport = require('passport')
const cookieSession = require("cookie-session");


const passportSetup = require("../server/passportgoogle");


app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static("/public"))

app.use(
    cookieSession({ name: "session", keys: ["lama"], maxAge: 24 * 60 * 60 * 100 })
  );


app.use(passport.initialize());
app.use(passport.session());

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);


app.use('/api/register',registerRouter)
app.use('/api/login',loginRouter)
app.use("/auth",authRoute)

app.listen('3001',()=>{
    console.log("Server is running at port 3001");
})