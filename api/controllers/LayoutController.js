/**
 * LayoutController
 *
 * @description :: Server-side logic for managing layouts
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

	get:function(req, res){
			Layout.findOne(req.param('id')).exec(function (err, layouts){
				return res.json(layouts);
		});
	},

};
