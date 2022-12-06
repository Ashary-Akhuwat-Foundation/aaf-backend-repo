const mongoose = require('../db/connection');

const artistCapture = new mongoose.Schema(
	{
		first_name: {
			type: String,
			require: true,
		},
		last_name: {
			type: String,
			require: true,
		},
		email: {
			type: String,
			required: true,
			unique: true,
		},
		message: {
			type: String,
			required: true,
		},
		phone: {
			type: Number,
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

module.exports = mongoose.model('ArtistCapture', artistCapture);
