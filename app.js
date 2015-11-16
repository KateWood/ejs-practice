var express = require('express'),
	app 	= express(),
	ejs		= require('ejs')
	port 	= process.env.PORT || 3000

// app configurations
app.set('view engine', 'ejs')

// middleware


// basic routes
app.get('/', function(req, res) {
	var data = {
		title: "The Home Page", 
		message: "Boom, chakalaka!"
	}
	// response
	res.render('index', data)
})

app.listen(port, function() {
	console.log('Server running on', port)
})