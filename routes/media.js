module.exports = function(app)
{
	app.get('/media', function(req, res){
		res.render('media');
	});
}