const express = require('express');
const basicAuth = require('express-basic-auth');
const bodyParser = require('body-parser');
const { BookService } = require('./models/bookModel.js');

const app = express();

const port = process.env.PORT || 3000;
const bookRouter = require('./routes/bookRouter')(new BookService());

app.use(basicAuth({
  users: { admin: 'supersecret' },
  challenge: true
}));
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

app.use('/api', bookRouter);

app.get('/', (req, res) => {
  res.send('Welcome to Campus02 Test API!');
});

app.listen(port, () => {
  console.log(`Running on port ${port}`);
});
