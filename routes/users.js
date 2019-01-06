var express = require('express');
var router = express.Router();
const User = require('../db/schemas/User');

/* GET users listing. */
router.post('/login', (req, res) => {
  User.findOne({usernameLowercase: req.body.username.toLowerCase()}, (err, user) => {
    if (err) {
      console.log(err);
      return res.status(500).send();
    }
    if (!user) return res.status(404).send();
    user.comparePassword(req.body.password, (err, isMatch) => {
      if (err) {
        console.log(err);
        return res.status(401).send();
      }
      if (isMatch && isMatch === true) {
        req.session.user = user;
        return res.status(200).send(req.session.user);
      }
    });
  });
});

router.post('/logout', (req, res) => {
  req.session.destroy();
  res.status(200).send();
})

router.get('/user-present', function(req, res) {
  if (!req.session.user) {
      return res.status(401).send();
  }
  return res.status(200).send(req.session.user);
});

router.post('/create', (req, res) => {
  const newUser = new User({
    username: req.body.username,
    usernameLowercase: req.body.username.toLowerCase(),
    password: req.body.password
  });

  newUser.save(err => {
    if (err) {
      console.log(err);
      return res.status(500).send();
    }
    return res.status(200).send();
  });
});

module.exports = router;
