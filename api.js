var express = require('express');
var status = require('http-status');

module.exports = function(wagner){
	var api = express.Router();

	api.get('/book/id/:id', wagner.invoke(function(book){
		return function(req, res){
			book.findone({_id: req.params.id}, function(error, books){
				if(error){
					return res.
					status(status.INTERNAL_SERVER_ERROR).
					json({error: error.toString() });
				}
				if(!book){
					return res.
					status(status.NOT_FOUND).
					json({error: 'Not Found'});
				}
				res.json({books: books});
			});
		};
	}));

return api;
};