const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const auth = require('../middleware/auth');

const User = require('../models/User');


// @route GET api/auth
// @desc Get logged in user
// @access Private

router.get('/', auth, async (req, res) => {
  // res.send('Get logged in user');
  // console.log('[routes/auth] ', req.user);

  try {
    const user = await User.findById(req.user.id).select('-password');
    res.json(user);

  } catch (err) {
    console.error(err.message);
    res.status(500).send('[routes/auth] Server error')

  }
});


// @route POST api/auth
// @desc Auth user and get token
// @access Public

router.post('/', [
  check('email', 'Please include a valid email')
    .isEmail(),
  check('password', 'Please enter a password with 6 or characters')
    .isLength({ min: 6 })
],
  async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { email, password } = req.body;

    try {
      let user = await User.findOne({ email })
      if (!user) {
        return res.status(400).json({ msg: 'Invalid credentials - user not found' })
      }

      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(400).json({ msg: 'Incorrect password' })
      }

      const payload = {
        user: {
          id: user.id
        }
      }
      jwt.sign(payload, config.get('jwtSecret'), {
        expiresIn: 360000
      },
        (err, token) => {
          if (err) throw err;
          res.json({ token })
        });

    } catch (err) {
      console.error(err.message);
      res.status(500).send("[auth.js] Server Error")

    }



  });

module.exports = router;