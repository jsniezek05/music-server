/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  find: function(req, res) {
    User.find()
      .then(results => {
        res.json(results);
      })
      .catch(err => res.json(err));
  }
};

