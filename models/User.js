const mongoose = require('../db/connection');

const userSchema = new mongoose.Schema({
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
	role: {
		type: String,
		required: true,
	},
});

module.exports = mongoose.model('User', userSchema);
