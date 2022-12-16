// Upload.js
const mongoose = require('../db/connection');
const url = require('mongoose-type-url');

const ArtistDisplayPicSchema = new mongoose.Schema({
	url: {
		type: url,
		required: true,
	},
	artist: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Artist',
		required: true,
	},
});

module.exports = mongoose.model('ArtistDisplayPic', ArtistDisplayPicSchema);
