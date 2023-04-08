const router = require("express").Router();
const passport = require("passport");

const CLIENT_URL = "http://localhost:3000/login";


try {

  router.get("/login/success", (req, res) => {
    if (req.user) {
      res.status(200).json({
        success: true,
        message: "successfull",
        user: req.user,
        //   cookies: req.cookies
      });
    }
  });

  router.get("/login/failed", (req, res) => {
    res.status(401).json({
      success: false,
      message: "failure",
    });
  });


  router.get("/logout", (req, res) => {
    req.logout();
    res.redirect(CLIENT_URL);
  });

  router.get("/google", passport.authenticate("google", { scope: ["profile"] }))

  router.get(
    "/google/callback",
    passport.authenticate("google", {
      successRedirect: "http://localhost:3000/profile",
      failureRedirect: "/login/failed",
    })
  );

  router.get("/linkedin", passport.authenticate("linkedin", { scope: ['r_liteprofile'] }));

  router.get(
    "/linkedin/callback",
    passport.authenticate("linkedin", {
      successRedirect: 'http://localhost:3000/profile',
      failureRedirect: "/login/failed",
    })
  );

  
} catch (error) {
  console.log(error);
}


module.exports = router;