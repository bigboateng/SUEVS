module.exports = function(app)
{
	app.get('/team:year', function(req, res){
		res.render('team');
	});
}