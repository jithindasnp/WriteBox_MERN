const express = require ('express')
require("dotenv").config();
const cors = require("cors");
const registerRouter = require('./src/routes/registerRouter');
const loginRouter = require('./src/routes/loginRouter');
const app = express()
const connection = require("./db");
const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");


const authRoute = require('./src/routes/auth')

const passport = require('passport')
const cookieSession = require("cookie-session");


const passportSetup = require("../server/passport.js");
const authRouter = require('../server/passport.js');


app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static("/public"))

// database connection
connection();




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

// routes
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use('/api/register',registerRouter)
app.use('/api/login',loginRouter)
app.use("/auth",authRoute)
app.use("/api",authRouter)

app.listen('3001',()=>{
    console.log("Server is running at port 3001");
})