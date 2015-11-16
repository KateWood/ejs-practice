var express = require('express'),
	app 	= express(),
	ejs		= require('ejs')
	port 	= process.env.PORT || 3000

// app configurations


// middleware


// basic routes
app.get('/', function(req, res) {
	// response
	res.json({message: 'It works'})
})

app.listen(port, function() {
	console.log('Server running on', port)
})