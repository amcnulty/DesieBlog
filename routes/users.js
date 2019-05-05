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
  if (!req.session.user) {
    return res.status(401).send();
  }
  const newUser = new User({
    username: req.body.username,
    usernameLowercase: req.body.username.toLowerCase(),
    displayName: req.body.displayName,
    password: req.body.password,
    isAdmin: req.body.isAdmin
  });

  User.findOne({
    usernameLowercase: newUser.usernameLowercase
  }, (err, user) => {
    if (err) {
      console.log(err);
      return res.status(500).send();
    }
    if (user) {
      return res.status(202).send({errorMessage: 'The requested username is already taken!!'});
    }
    else {
      newUser.save(err => {
        if (err) {
          console.log(err);
          return res.status(500).send();
        }
        return res.status(200).send();
      });
    }
  });

});

module.exports = router;
