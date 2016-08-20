/**
 * Bootstrap
 * (sails.config.bootstrap)
 *
 * An asynchronous bootstrap function that runs before your Sails app gets lifted.
 * This gives you an opportunity to set up your data model, run jobs, or perform some special logic.
 *
 * For more information on bootstrapping your app, check out:
 * http://sailsjs.org/#!/documentation/reference/sails.config/sails.config.bootstrap.html
 */

module.exports.bootstrap = function (cb) {
  if(sails.config.environment !== 'development') { return cb(); }
  Promise.all([
    Song.create({name: 'Song 1', youtubeId: 'abcd1234'}),
    Song.create({name: 'Song 2', youtubeId: 'abcd12345'}),
    Song.create({name: 'Song 3', youtubeId: 'abcd123456'})
  ]).then(function(models) {
    let ids = models.map(x => x.id);
    Promise.all([
      Playlist.create({name: 'First playlist', songs: ids}),
      User.create({firstName: 'JP', lastName: 'Sniezek', email: 'sniezekjp@aol.com', password: 'abcd1234'}),
      User.create({firstName: 'Joe', lastName: 'Sniezek', email: 'jds045018@gmail.com', password: 'abcd1234'})
    ])
    .then(function() {
      cb();
    });
  });
};
