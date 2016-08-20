/**
 * PlaylistController
 *
 * @description :: Server-side logic for managing playlists
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	find: function(req, res) {
    Playlist.find()
      .then(results => {
        res.json(results);
      });
  },

  addSong: function(req, res) {
    Playlist
      .findOne(req.params.id)
      .populate('songs')
      .then(model => {
        model.songs.add(req.params.songId);
        model.save()
          .then(() => {
            res.json(model);
          });
      });
  },

  removeSong: function(req, res) {
    Playlist
      .findOne(req.params.id)
      .populate('songs')
      .then(model => {
        model.songs.remove(req.params.songId);
        model.save()
          .then(() => {
            res.json(model);
          });
      });
  }
};

