const express = require('express');
const md5 = require('md5');
const User = require('../../models/User');

const app = express();
app.use(express.urlencoded());

const router = express.Router();

router.get('/', (req, res) => {
  res.render('register', {
    pageTitle: 'Register | Secret Stash',
    headerTitle: 'Register',
    copyrightYear: new Date().getUTCFullYear(),
  });
});

router.post('/', async (req, res) => {
  const { email, password } = req.body;
  const user = new User({
    email,
    password: md5(password),
  });

  try {
    const response = await user.save();

    if (response) {
      res.render('login', {
        pageTitle: 'Login',
        headerTitle: 'Register successful. Login now',
        copyrightYear: new Date().getFullYear(),
      });
    }
  } catch (error) {
    res.render('404', {
      pageTitle: 'Error',
      headerTitle: 'Oops. An error occured :(',
      errorText: error,
      copyrightYear: new Date().getUTCFullYear(),
    });
  }
});

module.exports = router;
