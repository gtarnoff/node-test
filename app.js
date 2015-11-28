var express = require('express');
var app = express();

app.get('/', function(req, res) { //req == request from browser, res = =response from server
  res.send('Hello World!');
});

app.post('/', function(req, res) {
  res.send('Got a post');
});

app.put('/user', function (req, res) {
  res.send('got a PUT request at /user');
});

app.delete('/user', function(req, res){
  res.send('Got a delete request at /user');
});

var server = app.listen(3000, function(){
  var host = server.address().address;
  var port = server.address().port;

  console.log('example app listening at http://%s:%s', host, port);
});
