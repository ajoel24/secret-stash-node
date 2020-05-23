const express = require('express');
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
    password,
  });

  try {
    const res = await user.save();
    console.log(res);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
