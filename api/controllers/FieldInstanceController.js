/**
 * FieldInstanceController
 *
 * @description :: Server-side logic for managing fieldinstances
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	get:function(req, res){
			FieldInstance.findOne(req.param('id')).populate('type').exec(function (err, fieldInstance){
				fieldInstance.render(res);
				//return res.json(fieldInstance.type.layout);
		});
	},

};
