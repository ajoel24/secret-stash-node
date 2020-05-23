require('dotenv').config();

const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');

const app = express();

const PORT = process.env.PORT || 5000;
const copyrightYear = new Date().getUTCFullYear();

app.use(cors({ origin: true }));
app.use(express.static('public'));
app.use(express.urlencoded());

app.set('view engine', 'ejs');
app.set('views', 'views');

connectDB();

app.use('/login', require('./routes/login/login'));
app.use('/register', require('./routes/register/register'));

app.get('/', (req, res) => {
  res.render('index', {
    pageTitle: 'Secret Stash',
    headerTitle: 'Welcome',
    copyrightYear,
  });
});

app.listen(PORT, () => console.log(`Server started at port ${PORT}`));
