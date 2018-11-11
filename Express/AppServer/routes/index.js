var express = require('express');
var router = express.Router();
var io = require('socket.io')();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
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
module.exports = router;
