var express = require("express");
var app = express();
const db = require('./server/db/db.js');

db.connect();

var PORT = process.env.PORT || 3000
app.listen(PORT, process.env.IP, function() {
  console.log("Market Sentiment Analysis has started at port: " + PORT);
});
