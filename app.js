var express = require('express');
var app = express();

var myLogger = function(req, res, next) {
  console.log('Logged');
  next();
};
var requestTime = function(req, res, next) {
  req.requestTime = Date.now();
  next();
};
app.set('view engine', 'jade');
app.use(requestTime);
app.use(myLogger);

app.get('/', function(req, res) { //req == request from browser, res = =response from server
  res.render('index', {
    title: 'Hey',
    message: 'Hello There!'
  });
});
app.get('/about', function(req, res) { //req == request from browser, res = =response from server
    res.render('/test', {
    title: 'Hey | About',
    message: 'About | Hello There!'
  });
  //res.send('about');
});

var server = app.listen(3000, function(){
  var host = server.address().address;
  var port = server.address().port;

  console.log('example app listening at http://%s:%s', host, port);
});
