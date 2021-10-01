const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth2').Strategy;

const GOOGLE_CLIENT_ID = '836045876460-9g7gcg0k7vffm1b0ibm4osmateoqifud.apps.googleusercontent.com';
const GOOGLE_CLIENT_SECRET = 'E3Xgi7_cOY-o97mU1kVyYm4w';

passport.use(new GoogleStrategy({
  clientID: GOOGLE_CLIENT_ID,
  clientSecret: GOOGLE_CLIENT_SECRET,
  callbackURL: "http://localhost:5000/auth/google/callback",
  passReqToCallback: true,
},
  
/*
//for db,
//use profile id to check if user is present in db or not
  function (request, accessToken, refreshToken, profile, done) {
    User.findOrCreate({ googleId: profile.id }, function (err, user) {
      return done(err, profile);
    });
  }
));
*/
  
function(request, accessToken, refreshToken, profile, done) {
  return done(null, profile);
}));

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});
