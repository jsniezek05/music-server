/**
 * Song.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    name: 'string',
    youtubeId: {
      type: 'string',
      unique: true
    },

    playlists: {
      collection: 'playlist',
      via: 'songs'
    }
  }
};

