const GoogleStrategy = require("passport-google-oauth20").Strategy;
const FacebookStrategy = require("passport-facebook").Strategy;
const passport = require("passport");
const express = require('express')
const authRouter = express.Router()

const GOOGLE_CLIENT_ID = "96485342555-0dt6scoc2jev55p0a7nhf53e6m0ndimj.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET = "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";

const FACEBOOK_CLIENT_ID = "1353476188840744";
const FACEBOOK_CLIENT_SECRET = "78eb185baa84b1be98e1185e6d8fc211";

let data

passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: "/auth/google/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      data=profile
      done(null, profile);
    }
  )
);

authRouter.get('/data', (req, res) => {
  return res.status(200).json({data})
})


  passport.use(
    new FacebookStrategy(
      {
        clientID: FACEBOOK_CLIENT_ID,
        clientSecret: FACEBOOK_CLIENT_SECRET,
        callbackURL: "/auth/facebook/callback",
      },
      function (accessToken, refreshToken, profile, done) {
      console.log("PROFILE==>", profile);
        done(null, profile);
      }
    )
  )


passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});


module.exports=authRouter