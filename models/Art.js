// art pic url
// name of artist
// description of art
// price
// art dimensions
//

const mongoose = require('../db/connection');
const url = require('mongoose-type-url');

const artSchema = new mongoose.Schema(
	{
		url: {
			type: url,
			required: true,
		},
		description: {
			type: String,
			required: true,
		},
		artTitle: {
			type: String,
			required: true,
		},
		price: {
			type: Number,
			required: true,
		},
		dimensions: {
			type: String,
			required: true,
		},
		artist: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Artist',
			required: true,
		},
	},
	{
		timestamps: true,
		// toJSON: {
		// 	virtuals: true,
		// 	transform: (_doc, ret) => {
		// 		delete ret.password;
		// 		return ret;
		// 	},
		// },
	}
);

module.exports = mongoose.model('Art', artSchema);
