const express = require('express');
const bcrypt = require('bcrypt');
const User = require('../../models/User');
const {
  registerRes,
  regSuccessRes,
  internalErr,
} = require('../../responses/responses');

const app = express();
app.use(express.urlencoded({ extended: true }));

const router = express.Router();

router.get('/', (req, res) => {
  res.render('register', registerRes);
});

router.post('/', async (req, res) => {
  const { email, password } = req.body;

  const hash = await bcrypt.hash(password, 10);

  const user = new User({
    email,
    password: hash,
  });

  try {
    const response = await user.save();

    if (response) {
      res.render('login', regSuccessRes);
    }
  } catch (error) {
    res.render('404', internalErr);
  }
});

module.exports = router;
