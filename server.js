const express = require('express');
const app = express();
const port = 3000;
const CoinRouter = require('./routes/CoinRouter');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');

require('./helpers/mongohelper')(mongoose);

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static('public'));
app.use('/coins', CoinRouter);
app.set('view engine', 'ejs');

mongoose.Promise = global.Promise;

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname,'public', 'index.html'));
});

app.listen(port, function(){
  console.log('Node js Express js Tutorial');
});