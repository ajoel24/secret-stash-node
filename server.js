require('dotenv').config();

const express = require('express');
const ejs = require('ejs');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

const PORT = process.env.PORT || 5000;
const copyrightYear = new Date().getUTCFullYear();

app.use(cors({ origin: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.set('view engine', 'ejs');
app.set('views', 'views');

app.get('/', (req, res) => {
  res.render('index', {
    pageTitle: 'Secret Stash',
    headerTitle: 'Welcome',
    copyrightYear,
  });
});

app.listen(PORT, () => console.log(`Server started at port ${PORT}`));
