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
    path:{
      type:'string',
      required: false
    },
		fields:{
			collection: 'FieldInstance',
      via: 'template'
		},
		layout:{
			model: 'Layout',
      required: false
		},
    mainLayout:{
      model: 'Layout',
      required: false
    },
    children:{
      collection: 'ItemTemplate',
      via: 'parent'
    },
    render: function(cb){
      data = this;
      Layout.findOne(this.layout).exec(function (err, layout){
        Layout.findOne(this.type.mainLayout).exec(function (err, mainLayout){
            cb.view(layout.template, {layout:mainLayout.template, model: data});
        });
      });
    }
	},
  //lifecyle functions
  afterCreate: function(newlyInsertedRecord, cb)
  {
    //will want to traverse UP the tree to get full path
    console.log('values:' + newlyInsertedRecord.name);
      newlyInsertedRecord.path = newlyInsertedRecord.name.toLowerCase().replace(' ', '-');
      var parentArray = [];
      var parentArray2 = ItemTemplate.traverseHeirarchy(newlyInsertedRecord.parent, parentArray);
      console.log('ParentArray' + parentArray);
      cb();
  },
  afterUpdate: function(updatedRecord, cb)
  {
    //will want to traverse UP the tree to get full path
    console.log('updatedRecord' + updatedRecord);
      updatedRecord.path = updatedRecord.name.toLowerCase().replace(' ', '-');
      var parentArray = [];
      var parentArray2 = ItemTemplate.traverseHeirarchy(updatedRecord.parent, parentArray);
      console.log('ParentArray' + parentArray);
      cb();
  },
  traverseHeirarchy:function(itemTemplateId, parentArray){
    ItemTemplate.findOne(itemTemplateId).exec(function (err, currentItem){
      if(currentItem != null && currentItem.parent != null)
      {
        //push on stack and keep going up
        parentArray.push(currentItem);
        traverseHeirarchy(currentItem.parent, parentArray);
      }
      else {
        //no parents? guess we should return
        return parentArray;
      }
    });
  }
};
