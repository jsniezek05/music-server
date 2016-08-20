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
    res.json({ id: 1, firstName: 'JP', lastName: 'Sniezek', email: 'sniezekjp@aol.com' });
  },

  auth: function(req, res) {
    res.json({ id: 1, firstName: 'JP', lastName: 'Sniezek', email: 'sniezekjp@aol.com' });
  }
};
