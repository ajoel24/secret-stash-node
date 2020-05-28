const express = require('express');
const bcrypt = require('bcrypt');
const User = require('../../models/User');
const {
  loginRes,
  homeRes,
  loginErrRes,
  loginErrRes2,
  internalErr,
} = require('../../responses/responses');

const app = express();
app.use(express.urlencoded({ extended: true }));

const router = express.Router();

router.get('/', (req, res) => {
  res.render('login', loginRes);
});

router.post('/', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (user) {
      const hash = await bcrypt.compare(password, user.password);

      if (hash) {
        res.render('home', homeRes);
      } else {
        res.render('404', loginErrRes);
      }
    } else {
      res.render('404', loginErrRes2);
    }
  } catch (error) {
    res.render('404', internalErr);
  }
});

module.exports = router;
