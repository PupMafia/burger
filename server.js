const express = require('express');
const bodyParser = require('body-parser');

let PORT = process.env.PORT || 8000;

let app = express();

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

const routes = require('./controllers/burgers_controller.js');

app.use(routes);

app.listen(PORT, function() {
  console.log('Server listening on: http://localhost:' + PORT);
});
