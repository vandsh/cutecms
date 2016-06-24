/**
 * Fields.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes:{
    id: {
      autoIncrement: true,
      type: 'integer',
      primaryKey: true
    },
		name:{
			type:'string',
      required: true
		},
		type:{
			type:'string'
		},
		layout:{
			model: 'Layout',
      required: false
		},
    instances:{
      collection: 'FieldInstance',
      via: 'type'
    }
	}
};
