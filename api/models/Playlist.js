/**
 * Playlist.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    name: {
      type: 'string',
      required: true,
      unique: true
    },

    songs: {
      collection: 'song',
      via: 'playlists'
    },

    user: {
      model: 'user',
      via: 'playlists',
      required: true
    }
  }
};
