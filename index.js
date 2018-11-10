var express = require("express");
var app = express();
const reset = require('./db/schema.js');

reset();

var PORT = process.env.PORT || 3000
app.listen(PORT, process.env.IP, function() {
  console.log("Market Sentiment Analysis has started at port: " + PORT);
});
