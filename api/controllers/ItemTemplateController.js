/**
 * ItemTemplateController
 *
 * @description :: Server-side logic for managing itemtemplates
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	createBase:function(req, res)
	{
		Layout.create({
			name:'Field Layout',
			template: 'field.ejs'
		}).exec(function createCB(err, fieldLayout){
			if (err) {
				console.log('Error: ' + err);
			}
		  console.log('Field Layout with name ' + fieldLayout.name);
			//first layout created

			Layout.create({
				name:'Item Layout',
				template: 'field.ejs'
			}).exec(function createCB(err2, itemLayout){
				if (err2) {
					console.log('Error: ' + err2);
				}
				console.log('Item Layout with name ' + itemLayout.name);
				//second layout created

				FieldType.create({
					name:'Single Line Text',
					type:'text',
					layout: fieldLayout
				}).exec(function createCB(err3, fieldType){
					if (err3) {
						console.log('Error: ' + err3);
					}
					console.log('Field Type with name ' + fieldType.name + ', fieldLayout is ' + fieldLayout.id);
					//field type created

					ItemTemplate.create({
						name:'Document',
						layout: itemLayout
					}).exec(function createCB(err4, itemTemplate){
						if (err4) {
							console.log('Error: ' + err4);
						}
						console.log('Item Template with name ' + itemTemplate.name + ', itemLayout is ' + itemLayout.id);
						//item template created

						FieldInstance.create({
							name:'Text Field 1',
							type: fieldType,
							template: itemTemplate,
						}).exec(function createCB(err5, fieldInstance1){
							if (err5) {
								console.log('Error: ' + err5);
							}
							console.log('Field Instance 1 with name ' + fieldInstance1.name + ', itemTemplate is ' + itemTemplate.id + ', fieldType is '+ fieldType.id ) ;
							//field instace 1 created

							FieldInstance.create({
								name:'Text Field 2',
								type: fieldType,
								template: itemTemplate,
							}).exec(function createCB(err6, fieldInstance2){
								if (err6) {
									console.log('Error: ' + err6);
								}
								console.log('Field Instance 2 with name ' + fieldInstance2.name + ', itemTemplate is ' + itemTemplate.id + ', fieldType is ' + fieldType.id);
								//field instace 1 created

								return res.send("Base Created! " + itemTemplate.id);
							});
						});
					});
				});
			});
		});

	},
	get:function(req, res){
			ItemTemplate.find().populate('layout').populate('fields').exec(function (err, itemTemplate){
			return res.json(itemTemplate);
		});
	},

	makeChildren:function(req, res){
			ItemTemplate.find().populate('layout').populate('fields').populate('children').populate('parent').exec(function (err, itemTemplate){
				itemTemplate[1].parent = itemTemplate[0];
				itemTemplate[2].parent = itemTemplate[0];
			return res.json(itemTemplate);
		});
	}
};
