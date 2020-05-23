const express = require('express');
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
      if (user.password === password) {
        res.render('home', {
          pageTitle: 'Home | Secret Stash',
          headerTitle: 'Home',
          copyrightYear: new Date().getUTCFullYear(),
        });
      }
    }
  } catch (error) {
    console.error(error);
  }
});

module.exports = router;
