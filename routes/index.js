const express = require('express');
const router = express.Router();
const auth = require("../auth");
const ensureLoggedIn = require("connect-ensure-login");
const User = require('../models/user');

router.get('/login', function (req, res) {
    res.redirect('/');
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

router.get('/', function (req, res) {
    if (req.user) {
        var user = req.user;
        var l = user.games.length;
        var d = 0;
        for (var i=0; i<l; i++) {
            if (user.games[i].questions.length != 0) d++;
        }
        if (d > 5) return res.render('game', {id: req.user.facebook.id, error: "No more games can be played", name: req.user.displayName});
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
            else res.render('game', {id: req.user.facebook.id, game: game,name: req.user.displayName});
        });
    }
    else res.render('login');
});

router.get('/play', function (req, res) {
    res.redirect('/');
});

router.post('/play', ensureLoggedIn.ensureLoggedIn(), function (req, res) {
    var user = req.user;
    var t = Date.now();
    var gameID = Number(req.body.gameID);
    if ((!gameID && gameID != 0) && (gameID < 0 || gameID >= user.games.length )) return res.sendStatus(404);
    var answer = Number(req.body.answer);
    var tl = (user.games[gameID].questions.length > 1) && (Math.abs(user.games[gameID].time-t) > 120000);
    if (tl || answer == 5) {
        return res.send({score: user.games[gameID].score});
    }
    if ((!answer && answer != 0) && (answer < 0 || answer > 4)) return res.sendStatus(404);
    var q = user.games[gameID].questions.length;
    if (q != 0 && user.games[gameID].questions[q-1].response == undefined && !tl) {
        user.games[gameID].questions[q-1].response = answer;
        user.games[gameID].questions[q-1].score = (Questions[user.games[gameID].questions[q-1].id].answer == answer);
        user.games[gameID].score += (user.games[gameID].questions[q-1].score ? 1:0);
    }
    if (q != 8 && !tl) {
        var qno = user.questions.pop();
        user.games[gameID].questions.push({id: qno, time: Date.now(), score: false});
    }
    if (q == 0) {
        user.games[gameID].time = t;
    }
    user.save(function (err, user) {
        if (err) {
            console.log(err);
            res.sendStatus(500);
        }
        else {
            if (q == 8) {
                return res.send({score: user.games[gameID].score});
            }
            else res.send({question: Questions[qno].question, options: Questions[qno].options, time: user.games[gameID].time}); // TODO
        }
    });
});

router.get('/:id/history', function (req, res) {
    var id = req.params.id;
    User.findOne({"facebook.id": id}, function (err, user) {
        if (err) return res.sendStatus(404);
        else if (!user) return res.sendStatus(404);
        else {
            // console.log(user.games);
            res.render("history", {id: id,games: user.games});
        }
    });
});

router.get('/halloffame', function (req, res) {
    User.find({}, function (err, users) {
        if (err) return res.sendStatus(404);
        else {
            var g = [];
            for (var i=0; i<users.length; i++) {
                var user = users[i];
                for (var j=0; j<user.games.length; j++) {
                    var game = user.games[j];
                    if (game.questions.length != 0 && game.score >= 1) {
                        g.push({
                            name : user.displayName,
                            score: game.score,
                            time: game.questions[0].time
                        });
                    }
                }
            }
            g.sort(function (a, b) {
                if (a.score > b.score) return -1;
                if (a.score < b.score) return 1;
                if (a.time > b.time) return 1;
                if (a.time < b.time) return -1;
                return 0;
            });
            //res.send(g);
             res.render("hof", {games: g});
        }
    });
});
//
// router.get('/qazwsxedcrfvtgbyhnujmikolp', function (req, res) {
//     User.find({}, function (err, users) {
//         if (err) return res.sendStatus(404);
//         else {
//             var g = [];
//             for (var i=0; i<users.length; i++) {
//                 var user = users[i];
//                 console.log(user);
//                 var u = {
//                     id : user.id,
//                     name: user.displayName,
//                     games: []
//                 };
//                 for (var j=0; j<user.games.length; j++) {
//                     var game = user.games[j];
//                     if (game.questions.length != 0) {
//                         u.games.push({
//                             id : game.id,
//                             score: game.score,
//                             time: game.time
//                         });
//                     }
//                 }
//                 g.push(u);
//             }
//             // res.render("hof", {games: g});
//             console.log(g);
//             res.send(g);
//         }
//     });
// });

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

router.get('/h',function(req,res){
    res.render('history');
});

module.exports = router;
