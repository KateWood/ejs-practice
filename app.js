var express = require('express'),
	app 	= express(),
	ejs		= require('ejs')
	port 	= process.env.PORT || 3000

// app configurations
app.set('view engine', 'ejs')

// middleware


// basic routes
app.get('/', function(req, res) {
	var collection = [
		{name: "Lilly (not Juan)", email: "notjuan@gmail.com"},
		{name: "Auntie Kate", email: "auntiekate@gmail.com"},
		{name: "Uncle Philippe", email: "unclephilippe@gmail.com"}
	]

	var data = {
		title: "The Home Page",
		message: "Boom, chakalaka!",
		users: collection
	}
	// response
	res.render('index', data)
})

app.listen(port, function() {
	console.log('Server running on', port)
})