const GoogleStrategy = require("passport-google-oauth20").Strategy;
const LinkedinStrategy = require("passport-linkedin-oauth2").Strategy;
const passport = require("passport");
const express = require('express');
const authRegister = require("./src/modals/authRegister");
const authRouter = express.Router()

const GOOGLE_CLIENT_ID = "96485342555-0dt6scoc2jev55p0a7nhf53e6m0ndimj.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET = "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";

const LINKEDIN_CLIENT_ID = "8607i5jrxkkh89";
const LINKEDIN_CLIENT_SECRET = "ytAPx9yoXkHYsWGD";



passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: "/auth/google/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      done(null, profile);
    }
  )
);





passport.use(
  new LinkedinStrategy(
    {
      clientID: LINKEDIN_CLIENT_ID,
      clientSecret: LINKEDIN_CLIENT_SECRET,
      callbackURL: "/auth/linkedin/callback",
    },
    async function (accessToken, refreshToken, profile, done) {
      const user = await authRegister.findOne({
        id: profile.id,
        provider: 'linkedin',
      })
      if (!user) {
        console.log('Adding new linkedin user to DB..');
        const user = await authRegister.create({ id: profile.id, name: profile.displayName, provider: profile.provider })
        res.status(200).json({ message: "success" })
        return done(null, profile);
      } else {
        console.log('Facebook User already exist in DB..');
        res.status(400).json({ message: "already exist" })
        return done(null, profile);
      }

    }
  )
)



passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});


module.exports = authRouter