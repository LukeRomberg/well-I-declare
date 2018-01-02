const express = require('express');
const hbs = require('hbs');
const bodyParser = require('body-parser');
const db = require('./db/query');
const port = process.env.PORT || 3000;
const app = express();

app.use('/gamers', gamers)

app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'hbs');

app.listen(port, (req, res) => {
  console.log('You\'re doing great <3');
})

app.
