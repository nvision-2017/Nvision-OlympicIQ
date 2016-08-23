const passport = require("passport");
const Strategy = require("passport-facebook").Strategy;
const config = require("./config");
const User = require('./models/us;er');

passport.use(new Strategy({
    clientID: config.facebook.clientID,
    clientSecret: config.facebook.clientSecret,
    callbackURL: "https://olympics.nvision.org.in/auth/facebook/callback",
    profileFields: ['id', 'displayName', 'name', 'email', 'picture']
}, function (accessToken, refreshToken, profile, cb) {
    process.nextTick(function () {
        var email;
        if (!profile.emails || !profile.emails.length) {
            email = profile.id;
        } else {
            email = profile.emails[0].value;
        }

        User.findOne({
            email: email
        }, function (err, user) {
            if (err) return cb(err);
            else if (user) return cb(null, user);
            else {
                console.log(profile);
                const user = new User();
                if (!profile.emails || !profile.emails.length) {
                    user.id = profile.id;
                    user.email = profile.id;
                } else {
                    user.id = profile.emails[0].value;
                    user.email = profile.emails[0].value;
                }
                user.facebook.id = profile.id;
                user.facebook.token = accessToken;
                user.displayName = profile.displayName;
                // user.email = profile.emails[0].value;
                user.picture = profile.photos[0].value;
                user.games = [];
                user.questions = [];
                for (var i=0; i<Questions.length; i++) {
                    user.questions.push(i);
                }
                for (var i=0; i<Questions.length; i++) {
                    var r = Math.floor(Math.random()*Questions.length);
                    var temp = user.questions[r];
                    user.questions[r] = user.questions[i];
                    user.questions[i] = temp;
                }
                user.save(function (err, user) {
                    if (err) return cb(err);
                    else return cb(null, user);
                });
            }
        });
    });
}));

passport.serializeUser(function (user, cb) {
    return cb(null, user.id);
});

passport.deserializeUser(function (id, cb) {
    User.findOne({id:id}, function (err, user) {
        if (err) return cb(err);
        else return cb(null, user);
    });
});

module.exports = passport;