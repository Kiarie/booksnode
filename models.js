var mongoose = require('mongoose');

module.exports = function(wagner){
	mongoose.connect('mongodb://localhost:27017/test');

	var Book =
		mongoose.model('Book', require('./books'), 'books');

	wagner.factory('Book', function(){
		return Book;
	});

	return {
		Book: Book
	};
};