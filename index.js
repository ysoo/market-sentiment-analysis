var express = require("express");
var app = express();
var io = require('socket.io')();
const db = require('./server/db/db.js');

db.connect();

var PORT = process.env.PORT || 3000


/* GET home page. */
app.get('/', function(req, res, next) {
  let dict = {
    title: 'Express'
  }
  res.json(dict);
});

io.on('connection', (client) => {
  console.log("Client connected");
  client.on('subscribeToTimer', (interval) => {
    console.log('client is subscribing to timer with interval ', interval);
    setInterval(() => {
      client.emit('timer', new Date());
    }, interval);
  });
});

app.listen(PORT, process.env.IP, function() {
  console.log("Market Sentiment Analysis has started at port: " + PORT);
});
