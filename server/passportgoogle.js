const GoogleStrategy = require("passport-google-oauth20").Strategy;
const passport = require("passport");

const GOOGLE_CLIENT_ID ="96485342555-0dt6scoc2jev55p0a7nhf53e6m0ndimj.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET = "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";



passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: "https://writebox.co/DashBoard",
    },
    function (accessToken, refreshToken, profile, done) {
      done(null, profile);
    }
  )
);


passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});
