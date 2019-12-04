const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const Lady = require('../models/lady');

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_SECRET,
    callbackURL: process.env.GOOGLE_CALLBACK
  },
  function(accessToken, refreshToken, profile, cb) {
    Lady.findOne({ 'googleId': profile.id }, function(err, lady) {
      if (err) return cb(err);
      if (lady) {
        return cb(null, lady);
      } else {
        // we have a new student via OAuth!
        var newLady = new Lady({
          name: profile.displayName,
          email: profile.emails[0].value,
          googleId: profile.id
        });
        newLady.save(function(err) {
          if (err) return cb(err);
          return cb(null, newLady);
        });
      }
    });
  }
));

passport.serializeUser(function(lady, done) {
    done(null, lady.id);
});

passport.deserializeUser(function(id, done) {
    Lady.findById(id, function(err, lady) {
      done(err, lady);
    });
  });
