module.exports = function(app)
{
	app.get('/vehicles:vehicleId', function(req, res){
		// currently 'vehicleId' doesnt do anything
		// but in future if more than 1 vehicle then
		// data will be stored in database and we hall query using the id
		// but now just render a static page
		res.render('vehicles');
	});
}