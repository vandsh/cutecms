/**
 * FieldTypeController
 *
 * @description :: Server-side logic for managing fieldtypes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    viewAll:function(req, res){
			FieldType.find().exec(function (err, fieldTypes){
			return res.view({model: fieldTypes});
		});
	},
    create:function(req, res){
            FieldType.find().exec(function (err, fieldTypes){
            return res.view({model: fieldTypes});
        });
	},
};

