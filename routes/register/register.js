const express = require('express');
const app = express();
const User = require('../../models/User');
app.use(express.urlencoded());

const router = express.Router();

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

router.get('/', (req, res) => {
  res.render('register', {
    pageTitle: 'Register | Secret Stash',
    headerTitle: 'Register',
    copyrightYear: new Date().getUTCFullYear(),
  });
});

module.exports = router;
