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
  var yourFriends =[];
  // console.log(yourFriends);
  for (var i = 0; i < users.length; i++){
    if (users[i].name === req.body.active.name) {
      var activeUser = users[i];  //Rick Sunderland
      // console.log(activeUser);
    }
  }
  //Checks which users you want to add/delete
  for (var i = 0; i < users.length; i++) {
    if (users[i].id == req.body.button) {
      var userInQuestion = {
        name: users[i].name,
        image: users[i].image   //Lloyd Bonafide
      };
    }
  }
  console.log(userInQuestion);
  console.log(activeUser.friends)

  isFriend(activeUser.friends, userInQuestion);

  //Checks if that user is already in your friends
  //     var friendsArray = users[i].friends   //Lloyd
  //     console.log(theFriend.friends); //Lloyd's friends
  //     for (var x = 0; x < friendsArray.length; x++) {
  //       if (users[x].name !== rick.name) {
      //     yourFriends.push(users[i]);
      //     console.log(yourFriends)
      //   }
      // }
  //   }
  // }

  // for (var j = 0; j < users.length; j++) {
  //
  //     // users[j].friends.push(friendToAdd);
  //     // res.json(users[j].friends);
  //   }
  //   // else if (users[j].name === activeUser.name && req.body.text !== 'Add Friend') {
  //   //   users[j].friends.pop(friendToAdd);
  //   //   // res.json(users[j].friends);
  //   // }
  // }
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


function isFriend(friends, friend) {
  // console.log(friends.indexOf(friend));
  if (friends.indexOf(friend) === -1) {
    friends.push(friend);
    // console.log('Not there, ADDED! ' + friends.indexOf(friend));
  }
  else if (friends.indexOf(friend) > -1) {
    // console.log('Already a friend.' + friends.indexOf(friend));
  }
}
