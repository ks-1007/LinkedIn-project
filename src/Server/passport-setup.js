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
        "493953240158-k97tech5957lhc4f5ilkb7upoq9idfpj.apps.googleusercontent.com",
      clientSecret: "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",
      callbackURL: "http://localhost:5000/auth/google/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      return done(null, profile)
    }
  )
)
