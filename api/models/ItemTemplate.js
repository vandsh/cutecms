/**
 * ItemTemplates.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes:{
    parent: {
      model: 'ItemTemplate',
      required: false
    },
		name:{
			type:'string',
      required: true
		},
		fields:{
			collection: 'FieldInstance',
      via: 'template'
		},
		layout:{
			model: 'Layout',
      required: false
		},
    children:{
      collection: 'ItemTemplate',
      via: 'parent'
    },
	}
};
