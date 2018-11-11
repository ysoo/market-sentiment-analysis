var express = require("express");
var app = express();
var io = require('socket.io')();
const db = require('./server/db/db.js');
const company = require('./server/models/Company.js');
const articles = require('./server/models/Articles.js');

db.connect();

var PORT = process.env.PORT || 3000


/* GET home page. */
app.get('/', async (req, res, next) => {
  const d = await company.getCompanyList();
  console.log(d)
  let dict = {
    title: 'Express',
    list: d
  }
  res.json(dict);
});

app.get('/getArticles', async (req, res, next) => {
  var aMinuteAgo = new Date( Date.now() - 1000 * 600000 );
  const art = await articles.getCompanyArticlesAt("Apple Inc.", aMinuteAgo)
  console.log(art)
  let dict = {
    title: 'Article',
    list: art
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
