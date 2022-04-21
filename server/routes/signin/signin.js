const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const passport = require('passport');
const LocalStrategy = require('passport-local');
const User = require(`${__dirname}\\..\\..\\db`);

const strategy = new LocalStrategy(function verify(username, password, cb) {
  User.findOne({ where: { user: username } })
    .then((usr) => {
      bcrypt.compare(password, usr.password, function (err, result) {
        result === true ? cb(null, usr) : cb(null, false);
      });
    })
    .catch((err) => {
      console.log(`This is the error: ${err}`);
    });
});

passport.use(strategy);

router.post(
  '/',
  passport.authenticate('local', {
    session: false,
  }),
  function (req, res) {
    res.send('Nicely done!');
  }
);

module.exports = router;
