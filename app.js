var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
var users = require('./users.js')

app.use(express.static('./public/'));

app.post('/users/:name', jsonParser, function(req, res) {
  for (var i = 0; i < users.length; i++) {
    if (users[i].name == req.body.user) {
      console.log(req.body)
      res.send(users[i]);
    }
    // else {
    //   res.send('No Matches')
    // }
  }
});

app.listen(8080, function() {
  console.log('Listening on 8080');
})
