var mongoose('mongoose');
var category = require('./review');


var booksSchema = {
	name: {	type: String, 
			lowercase: true, 
			required: true
	},
	isbn: {	type: String, 
			required: true},
	description: {type: String},
	prologue: {
			type: String
			},
	Genre: {type: String,
		 	required: true},
	Author: {type: String, 
			required: true},
	review: review.reviewSchema

};

module.exports = new mongoose.Schema(booksSchema);
module.exports.booksSchema = booksSchema;