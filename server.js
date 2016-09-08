var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var mongoose = require('mongoose');
mongoose.connect('mongodb://node:node@novus.modulusmongo.net:27017/Iganiq8o')

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;

var router  = express.Router();

router.get('/', function (req, res) {
  res.json({message:'Hooray! Welcome to the api!'});
});


app.use('/api', router);

app.listen(port);
  console.log('Good Evening Jack')