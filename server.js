require('dotenv').config();

const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const { indexRes } = require('./responses/responses');

const app = express();

const PORT = process.env.PORT || 5000;

app.use(cors({ origin: true }));
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs');
app.set('views', 'views');

connectDB();

app.use('/login', require('./routes/login/login'));
app.use('/register', require('./routes/register/register'));

app.get('/', (req, res) => {
  res.render('index', indexRes);
});

app.listen(PORT, () => console.log(`Server started at port ${PORT}`));
