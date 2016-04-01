var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
var users = require('./users.js')

app.use(express.static('./public/'));

app.post('/current_user/', jsonParser, function(req, res) {

  console.log(req.body.profile)
  for (var i = 0; i < users.length; i++) {
    if (users[i].name == req.body.profile) {
      console.log('hi');
    }
  }
})

app.post('/profile/', jsonParser, function(req, res) {

  console.log(req.body.profile)
  for (var i = 0; i < users.length; i++) {
    if (users[i].name == req.body.profile) {
      console.log('test');
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
    res.json(matched[0]);
  }
  else {
    console.log('nope');
  }
});

app.listen(8080, function() {
  console.log('Listening on 8080');
})


// function isFriend(friends, friend) {
//   if (friends[i].indexOf(friend) === -1) {
//     friends.push(friend);
//     console.log(friends.indexOf(friend));
//     // console.log('Not there, ADDED! ' + friends.indexOf(friend));
//     }
//
//     else if (friends.indexOf(friend) > -1) {
//       // console.log('Already a friend.' + friends.indexOf(friend));
//     }
//   }
// }
