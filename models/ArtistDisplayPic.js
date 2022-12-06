// Upload.js
const mongoose = require('../db/connection');

const ArtistDisplayPicSchema = new mongoose.Schema({
	fileName: {
		type: String,
		required: true,
	},
	file: {
		data: Buffer,
		contentType: String,
	},
	uploadTime: {
		type: Date,
		default: Date.now,
	},
	artist: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Artist',
		required: true,
	},
});

module.exports = Upload = mongoose.model(
	'ArtistDisplayPic',
	ArtistDisplayPicSchema
);
