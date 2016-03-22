var mongoose = require('mongoose');
var Boomer = mongoose.model('Boomer');

module.exports = {
		index: function(req, res){
			console.log("loading...boomers inc.....")
			Boomer.find({}, function(err, boomers){
				if(err){
					console.log("ERROR FROM DB!");
				}else{
					console.log(boomers);
					res.json(boomers);
				}
			});
		},
		add: function(req, res, name){
			boomer = new Boomer({name: name});
			boomer.save(function(err){
				if(err){
					console.log("ERROR FROM DB!");
				}else{
					Boomer.find({}, function(err, boomers){
						if(err){
							console.log("error from db!");
						}else{
							res.json(boomers);
						}
					})
				}
			})
		},
		delete: function(req, res, id){
			Boomer.remove({_id: id}, function(err){
				if(err){
					res.send('id does not exist')
				}else{
					Boomer.find({}, function(err, boomers){
						if(err){
							console.log("ERROR IN THE DB!");
						}else{
							res.json(boomers);
						}
					});
				}
			});
		}
};