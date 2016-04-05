var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
var users = require('./users.js')

var activeUser = users[2];
var activeUserFriends = [];

app.use(express.static('./public/'));


app.post('/timeline/', jsonParser, function(req, res) {
  var theID = req.body.click;
  var theText = req.body.text;
    for (var i = 0; i < users.length; i++) {
      for (var x = 0; x < users[i].posts.length; x++) {
        if (parseInt(theID) === users[i].posts[x].postID) {
          users[i].posts[x].userLiked.push(activeUser.image);
          var likes = users[i].posts[x].userLiked.length
          users[i].posts[x].likes = likes
        }
        res.json(users[i].posts[x]);
      }
    }
})

app.post('/add_friend/', jsonParser, function(req, res) {
  //The active user
  for (var i = 0; i < users.length; i++){
    if (users[i].name === req.body.active.name) {
      var userFriends = users[i].friends;
    }
  }
  //The friend in question
  for (var i = 0; i < users.length; i++) {
    if (users[i].id == req.body.button) {
      var friendInQuestion = {
        name: users[i].name,
        image: users[i].image
      };
    }
  }
  //Add or remove friends
  if (req.body.text === 'Kill Friend') {
    for (var i = 0; i < userFriends.length; i++) {
      if (userFriends[i].name === friendInQuestion.name) {
        console.log(userFriends[i]);
        userFriends.splice(i, 1);
      }
    }
    res.json(userFriends);
  }
  if (req.body.text === 'Add Friend') {
    userFriends.push(friendInQuestion);
    res.json(userFriends);
  }
});

app.post('/search/', jsonParser, function(req, res) {
  var matched = [];

  for (var i = 0; i < users.length; i++) {
    if (users[i].name == req.body.search) {
      matched.push(users[i]);
    }
  }

  if (matched.length > 0) {
    res.json({matched: matched[0], active: users[2]});
  }
  else {
    res.json({message: 'No matches found'});
  }
});

app.listen(8080, function() {
  console.log('Listening on 8080');
})
