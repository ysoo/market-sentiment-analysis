var express = require("express");
var app = express();
const dbreset = require('./server/db/schema.js');
const db = require('./server/db/db.js');

db.connect();
dbreset.reset();

var PORT = process.env.PORT || 3000
app.listen(PORT, process.env.IP, function() {
  console.log("Market Sentiment Analysis has started at port: " + PORT);
});
