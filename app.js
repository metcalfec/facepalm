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
  console.log(req.body.button);
  console.log(req.body.text);
  var activeUser = req.body.active;
  for (var i = 0; i < users.length; i++) {
    if (users[i].id == req.body.button) {
      var friendToAdd = {
        name: users[i].name,
        image: users[i].image
      };
    }
  }
  for (var j = 0; j < users.length; j++) {
    if (users[j].name === activeUser.name && req.body.text === 'Add Friend') {
      users[j].friends.push(friendToAdd);
      res.json(users[j].friends);
    }
    else if (users[j].name === activeUser.name && req.body.text !== 'Add Friend') {
      users[j].friends.pop(friendToAdd);
      res.json(users[j].friends);
    }
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
