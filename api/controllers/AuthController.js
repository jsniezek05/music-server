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
          req.session.authenticated = user.id;
          return res.json(user);
        }
        res.status(403).json({ error: "Please try again." });
      });
  },

  logout: function(req, res) {
    req.session.authenticated = false;
    res.status(200).send();
  },

  auth: function(req, res) {
    if(req.session.authenticated) {
      return User.findOne(req.session.authenticated)
        .then(user => {
          res.json(user);
        });
    }
    return res.status(403).send("Invalid session");
  }
};
