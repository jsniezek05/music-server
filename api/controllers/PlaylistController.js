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
      })
      .catch(err => res.json(err));
  },

  create: function(req, res) {
    let newPlaylist = req.body;
    newPlaylist.user = req.session.authenticated;
    Playlist.create(newPlaylist)
      .then(results => {
        res.json(results);
      })
      .catch(err => res.json(err));
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
      })
      .catch(err => res.json(err));
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
      })
      .catch(err => res.json(err));
  }
};

