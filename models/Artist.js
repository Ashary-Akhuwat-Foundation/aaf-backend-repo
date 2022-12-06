const mongoose = require('../db/connection');

const artistCapture = new mongoose.Schema(
	{
		name: {
			type: String,
			require: true,
		},
		email: {
			type: String,
			required: true,
			unique: true,
		},
		instagram: {
			type: String,
			required: true,
		},
		bio: {
			type: String,
			required: true,
		},
		phone: {
			type: Number,
			required: true,
		},
		artType: {
			type: String,
			enum: ['Original Painting', 'Digital Art', 'Photography', 'Print'],
			required: false,
		},
		artCategory: {
			type: String,
			enum: [
				'$150 Print',
				'$75 Print',
				'$400 Print',
				'$300 Painting',
				'$750 Painting',
				'$2500 Painting',
				'$5000 Painting',
				'$20000 Painting',
			],
			required: false,
		},

		location: {
			type: String,
			required: true,
		},
		artistDisplayPic: [ArtistDisplayPicSchema],
		dimensions: {
			type: String,
			required: true,
		},
		artWorkImgs: [ArtSchema],
		basePrice: { Number },
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
    // FINISH THIS MODEL!!!!!!!
);

module.exports = mongoose.model('ArtistCapture', artistCapture);
