const express = require('express');
const md5 = require('md5');
const User = require('../../models/User');

const app = express();
app.use(express.urlencoded());

const router = express.Router();

router.get('/', (req, res) => {
  res.render('login', {
    pageTitle: 'Login | Secret Stash',
    headerTitle: 'Login',
    copyrightYear: new Date().getUTCFullYear(),
  });
});

router.post('/', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (user) {
      if (user.password === md5(password)) {
        res.render('home', {
          pageTitle: 'Home | Secret Stash',
          headerTitle: 'Home',
          copyrightYear: new Date().getUTCFullYear(),
        });
      }
    } else {
      res.render('404', {
        pageTitle: 'Error',
        headerTitle: 'Error. User not found.',
        errorText: 'Invalid email or password. Try again.',
        copyrightYear: new Date().getUTCFullYear(),
      });
    }
  } catch (error) {
    res.render('404', {
      pageTitle: 'Error',
      headerTitle: 'Oops. An error occurred',
      errorText: 'Something went wrong. Try again later',
      copyrightYear: new Date().getUTCFullYear,
    });
  }
});

module.exports = router;
