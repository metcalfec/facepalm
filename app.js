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

  //Checks who active user is

  for (var i = 0; i < users.length; i++){
    if (users[i].name === req.body.active.name) {
      var theFriend =  users[i];
      var theFriends = users[i].friends;
    }
  }
  // console.log(theFriends.name)

  //Checks which users you want to add/delete

  for (var i = 0; i < users.length; i++) {
    if (users[i].id == req.body.button) {
      var friend = {
        name: users[i].name,
        image: users[i].image
      };
    }
  }
  console.log(theFriends)
  if (req.body.text === 'Kill Friend') {
    for (var i = 0; i < theFriends.length; i++) {
      if (theFriends[i].name === friend.name) {
        theFriends.splice(theFriends[i], 1);
      }
    }
    res.json(theFriends);
  }
  if (req.body.text === 'Add Friend') {
    theFriends.push(friend);
    res.json(theFriends);
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
