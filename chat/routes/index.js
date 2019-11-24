var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  fs.readFile("../chat.html", (err, data) => {
    if (err) throw err;
    res.write(data);
    res.end();
})
});

module.exports = router;
