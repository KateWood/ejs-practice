var express = require('express'),
	app 	= express(),
	ejs		= require('ejs')
	port 	= process.env.PORT || 3000

// app configurations
app.set('view engine', 'ejs')

// middleware


// basic routes
app.get('/', function(req, res) {
	// response
	res.render('index', {title: "The Home Page"})
})

app.listen(port, function() {
	console.log('Server running on', port)
})