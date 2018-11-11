var express = require('express');
var router = express.Router();

var latestData = {
    data : "trying to send"
}

/* GET data page. */
router.get('/', function(req, res, next) {
    console.log("request made to /data");
   res.send(latestData);
});


module.exports = router;
