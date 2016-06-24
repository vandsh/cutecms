/**
 * FieldInstance.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes:{
    type:{
      model:'FieldType',
    },
    template:{
      model: 'ItemTemplate',
    },
    render: function(cb){
      Layout.findOne(this.type.layout).exec(function (err, layout){
  				cb.view(layout.template);
  		});
    }
  }
};
