var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
var users = require('./users.js')

app.use(express.static('./public/'));

app.post('/users/', jsonParser, function(req, res) {
  var matched = [];

  for (var i = 0; i < users.length; i++) {
    if (users[i].name == req.body.user) {
      console.log(req.body)
      matched.push(users[i]);
    }
  }
  if (matched.length > 0) {
    console.log(matched);
    res.json(matched[0]);
  }
});









app.listen(8080, function() {
  console.log('Listening on 8080');
})
