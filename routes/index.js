const express = require('express');
const router = express.Router();
const auth = require("../auth");
const ensureLoggedIn = require("connect-ensure-login");
const User = require('../models/user');

router.get('/login', function (req, res) {
    res.render('login');
});

router.get('/auth/facebook', auth.authenticate('facebook', {scope: ['email', 'public_profile']}));

router.get('/auth/facebook/callback', auth.authenticate('facebook', {
    successReturnToOrRedirect: '/',
    failureRedirect: '/login'
}), function (req, res) {
    res.redirect('/');
});

router.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/');
});

router.get('/', ensureLoggedIn.ensureLoggedIn(), function (req, res) {
    var user = req.user;
    res.render('index', {
        games: user.games
    });
});

router.get('/play', ensureLoggedIn.ensureLoggedIn(), function (req, res) {
    var user = req.user;
    if (req.query.game == "new") {
        if (user.games.length > 4) return res.render('game', {error: "No more games can be played"});
        var user = req.user;
        var game = {};
        game.id = user.games.length;
        game.questions = [];
        game.time = Date.now();
        game.score = 0;
        user.games.push(game);
        user.save(function (err, user) {
            if (err) {
                console.log(err);
                return res.sendStatus(500);
            }
            else res.render('game', {id: user.games.length-1});
        });
    }
    else {
        var gid = Number(req.query.game);
        res.render('game', {id: gid});
    }
});

router.post('/play', ensureLoggedIn.ensureLoggedIn(), function (req, res) {
    var t = Date.now();
    var gameID = Number(req.body.gameID);
    var answer = Number(req.body.answer);
    // TODO Validate gameID and answer
    var user = req.user;
    var q = user.games[gameID].questions.length;
    if (q != 0 && user.games[gameID].questions[q-1].response == undefined && Math.abs(user.games[gameID].questions[q-1].time-t) < 10000) {
        user.games[gameID].questions[q-1].response = answer;
        user.games[gameID].questions[q-1].score = (Questions[user.games[gameID].questions[q-1].id].answer == answer);
        user.games[gameID].score += (user.games[gameID].questions[q-1].score ? 1:0);
    }
    if (q != 10) {
        var qno = user.questions.pop();
        user.games[gameID].questions.push({id: qno, time: Date.now(), score: false});
    }
    user.save(function (err, user) {
        if (err) {
            console.log(err);
            res.sendStatus(500);
        }
        else {
            if (q == 10) {
                return res.send({score: user.games[gameID].score});
            }
            else res.send({question: Questions[qno].question, options: Questions[qno].options, time: t}); // TODO
        }
    });
});

router.post('/score', ensureLoggedIn.ensureLoggedIn(), function (req, res) {
    var gameID = Number(req.body.gameID);
    User.findOne({id: req.user.id}, function (err, user) {
        if (err) return res.sendStatus(500);
        else if (!user) return res.sendStatus(404);
        else {
            res.send({score: user.games[gameID].score});
        }
    });
});

module.exports = router;
