/**
 * AuthController
 *
 * @description :: Server-side logic for managing Auths
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  homepage: function(req, res) {
    res.send("Music API");
  },

	login: function(req, res) {
    User.findOne({ email: req.body.email })
      .then(user => {
        if(!user) return res.status(404).send();
        let verified = user.verifyPassword(req.body.password);
        if(verified) {
          res.json(user);
        }
        res.status(403).json({ error: "Please try again." });
      });
  },

  auth: function(req, res) {
    User.find()
      .then(users => {
        res.json(users[0]);
      });
  }
};
