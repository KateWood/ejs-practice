var express = require('express'),
	app 	= express(),
	ejs		= require('ejs'),
	port 	= process.env.PORT || 3000,
	ejsLayouts = require('express-ejs-layouts')

// app configurations
app.set('view engine', 'ejs')

// middleware
app.use(ejsLayouts)
app.use('/assets', express.static(__dirname + '/assets'))

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

app.get('/about', function(req, res) {
	var data = {
		name: "Business Name",
		message: "This is a website for a business!",
		other: "Here's some other information."
	}
	// response
	res.render('about', data)
})

app.get('/contact', function(req, res) {
	var data = {
		address: "123 Main St.",
		phone: "555-555-1234",
		email: "contactus@email.com"
	}
	// response
	res.render('contact', data)
})

app.listen(port, function() {
	console.log('Server running on', port)
})