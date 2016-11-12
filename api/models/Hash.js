/**
 * Hash.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    hash : {
      type: 'string',
      unique: true,
      required: true,
    },

    add : { type: 'string' },

    validate : { type: 'string' }
  }
};

