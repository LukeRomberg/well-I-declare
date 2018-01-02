const express = require('express');
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;
const app = express();
const sayings = require('./routes/sayings')

app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'hbs');

app.use('/', sayings)

app.listen(port, (req, res) => {
  console.log('You\'re doing great <3');
})
