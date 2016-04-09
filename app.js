var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
var users = require('./users.js');
var port = process.env.PORT || 1337;
var activeUser = users[2];
var activeUserFriends = [];

app.use(express.static('./public/'));

///////////////////////////////////////////////////////////////////////////////////////////
//Home Page Route
///////////////////////////////////////////////////////////////////////////////////////////

app.get('/home/', function(req, res) {
  res.send();
});

///////////////////////////////////////////////////////////////////////////////////////////
//Active User Route
///////////////////////////////////////////////////////////////////////////////////////////

app.post('/profile/', jsonParser, function(req, res) {
  var matched = [];
  console.log(req.body.ID)
  if (req.body.ID != null) {
    for (var i = 0; i < users.length; i++) {
      if (users[i].id == req.body.ID) {
        matched.push(users[i]);
      }
    }
    res.json({matched: matched[0], active: activeUser});
  }
});

///////////////////////////////////////////////////////////////////////////////////////////
//Timeline Route
///////////////////////////////////////////////////////////////////////////////////////////

app.post('/timeline/', jsonParser, function(req, res) {
  var matched = [];
  var theID = req.body.click;
  var theText = req.body.text;
  var theUser = {
    name: activeUser.name,
    image: activeUser.image,
    id: activeUser.id
  };
  if (theID != null) {
    if (theText === 'Palm') {
      for (var i = 0; i < users.length; i++) {
        for (var x = 0; x < users[i].posts.length; x++) {
          if (parseInt(theID) === users[i].posts[x].postID) {
            users[i].posts[x].userLiked.push(theUser);
            var likes = users[i].posts[x].userLiked.length;
            var userLiked = users[i].posts[x].userLiked;
          }
        }
      }
      res.json({likes: likes, userLiked: userLiked, palm: true})
    }
    else if (theText === 'UnPalm') {
      for (var i = 0; i < users.length; i++) {
        for (var x = 0; x < users[i].posts.length; x++) {
          if (parseInt(theID) === users[i].posts[x].postID) {
            users[i].posts[x].userLiked.pop(theUser);
            var likes = users[i].posts[x].userLiked.length;
            var userLiked = users[i].posts[x].userLiked;
          }
        }
      }
      res.json({likes: likes, userLiked: userLiked, palm: true})
    }
    else if (theText === 'back to profile') {
      for (var i = 0; i < users.length; i++) {
        if (theID == users[i].id) {
          matched.push(users[i])
        }
      }
      res.json({matched: matched[0], active: activeUser, back: true});
    }
    else {
      for (var p = 0; p < users.length; p++) {
        if (theID == users[p].id) {
          matched.push(users[p])
        }
      }
      res.json({matched: matched[0], active: activeUser});
    }
  }
});

///////////////////////////////////////////////////////////////////////////////////////////
//Friend Navigation Route
///////////////////////////////////////////////////////////////////////////////////////////

app.post('/view-friend/', jsonParser, function(req, res) {
  var matched = [];
  if (req.body.friend != null) {
    for (var i = 0; i< users.length; i++) {
      if (req.body.friend == users[i].id ) {
        matched.push(users[i]);
      }
    }
    res.json({matched: matched[0], active: activeUser});
  }
});

app.post('/add-friend/', jsonParser, function(req, res) {
  var theUser = {
    name: activeUser.name,
    image: activeUser.image,
    id: activeUser.id
  };
  for (var i = 0; i < users.length; i++) {
    if (users[i].id == req.body.button) {
      var friendInQuestion = users[i];
      var friend = {
        name: users[i].name,
        image: users[i].image,
        id: users[i].id
      }
    }
  }
  if (req.body.text === 'Photos') {
    for (var i = 0; i < users.length; i++) {
      if (req.body.button == users[i].id) {
        var friendPhotos = users[i].photos;
        var friend = users[i];
      }
    }
    if (friend === activeUser) {
      res.json({targetClick: 'Photos', profile: friend, photos: friendPhotos, friends: false, activeUser: true});
    }
    else {
      res.json({targetClick: 'Photos', profile: friend, photos: friendPhotos, friends: false, activeUser: false});
    }
  }
  else if (req.body.text === 'Kill Friend') {
    for (var i = 0; i < friendInQuestion.friends.length; i++) {
      if (friendInQuestion.friends[i].name === activeUser.name) {
        friendInQuestion.friends.splice(i, 1);
      }
    }
    for (var i = 0; i < activeUser.friends.length; i++) {
      if (activeUser.friends[i].name === friend.name) {
        activeUser.friends.splice(i, 1);
      }
    }
    res.json({targetFriends: friendInQuestion.friends, userFriends: activeUser.friends, friends: true});
  }
  else if (req.body.text === 'Add Friend') {
    friendInQuestion.friends.push(theUser);
    activeUser.friends.push(friend);
    res.json({targetFriends: friendInQuestion.friends, userFriends: activeUser.friends, friends: true});
  }
});

///////////////////////////////////////////////////////////////////////////////////////////
//Search Route
///////////////////////////////////////////////////////////////////////////////////////////

app.post('/search/', jsonParser, function(req, res) {
  var matched = [];
  for (var i = 0; i < users.length; i++) {
    if (users[i].name == req.body.search) {
      matched.push(users[i]);
    }
  }
  if (matched.length > 0) {
    res.json({matched: matched[0], active: activeUser, locate: true});
  }
  else {
    res.json({locate: false, search: req.body.search});
  }
});

app.listen(port, function() {
 console.log("listening on port " + port);
});
