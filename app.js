var express = require('express'),
	app 	= express(),
	ejs		= require('ejs')
	port 	= process.env.PORT || 3000



app.listen(port, function() {
	console.log('Server running on', port)
})