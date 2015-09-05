var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var app = express();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'TrumpBytes' });
});

app.post('/submit', function(req,res){
    res.send('blah');
});
module.exports = router;
