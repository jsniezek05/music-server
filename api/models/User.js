var bcrypt = require('bcrypt');
const SALT_WORK_FACTOR = 10;

/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    firstName: 'string',
    lastName: 'string',
    password: {
      type: 'string',
      minLength: 6
    },

    email: {
      type: 'email',
      unique: true,
      required: true
    },

    playlists: {
      collection: 'playlist',
      via: 'user'
    },

    toJSON: function () {
      var obj = this.toObject();
      delete obj.password;
      return obj;
    },

    verifyPassword: function (password = '') {
      return bcrypt.compareSync(password, this.password);
    }
  },

  beforeCreate: function (attrs, cb) {
    bcrypt.hash(attrs.password, SALT_WORK_FACTOR, function (err, hash) {
      attrs.password = hash;
      return cb();
    });
  },

  beforeUpdate: function (attrs, cb) {
    if (attrs.newPassword) {
      bcrypt.genSalt(SALT_WORK_FACTOR, function (err, salt) {
        if (err) return cb(err);

        bcrypt.hash(attrs.newPassword, salt, function (err, crypted) {
          if (err) return cb(err);

          delete attrs.newPassword;
          attrs.password = crypted;
          return cb();
        });
      });
    }
    else {
      return cb();
    }
  }
};

