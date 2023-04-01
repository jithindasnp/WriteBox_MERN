const GoogleStrategy = require("passport-google-oauth20").Strategy;
const LinkedinStrategy = require("passport-linkedin-oauth2").Strategy;
const passport = require("passport");
const express = require('express')
const authRouter = express.Router()

const GOOGLE_CLIENT_ID = "96485342555-0dt6scoc2jev55p0a7nhf53e6m0ndimj.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET = "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";

const LINKEDIN_CLIENT_ID = "8607i5jrxkkh89";
const LINKEDIN_CLIENT_SECRET = "ytAPx9yoXkHYsWGD";

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
    new LinkedinStrategy(
      {
        clientID: LINKEDIN_CLIENT_ID,
        clientSecret: LINKEDIN_CLIENT_SECRET,
        callbackURL: "/auth/linkedin/callback",
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