const passport = require("passport")
const GoogleStrategy = require("passport-google-oauth20").Strategy

passport.serializeUser(function (user, done) {
  done(null, user)
})

passport.deserializeUser(function (user, done) {
  done(null, user)
})

passport.use(
  new GoogleStrategy(
    {
      clientID:
        "794457509269-habhfnqfptddch8upqur2kieqg5reue8.apps.googleusercontent.com",
      clientSecret: "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",
      callbackURL: "http://localhost:5000/auth/google/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      return done(null, profile)
    }
  )
)
