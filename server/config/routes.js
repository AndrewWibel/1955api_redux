var boomers = require('./../controllers/boomers.js');
module.exports = function(app){
	app.get('/boomers', function(req, res){
		boomers.index(req, res);
	});
	app.post('/new/:name', function(req, res){
		boomers.add(req, res, req.params.name);
	})
	app.post('/remove/:id', function(req, res){
		boomers.delete(req, res, req.params.id);
	})
}