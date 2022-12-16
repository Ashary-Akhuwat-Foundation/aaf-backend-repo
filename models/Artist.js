const mongoose = require('../db/connection');
// const ArtistDisplayPicSchema = require('../models/ArtistDisplayPic');
// const ArtSchema = require('../models/Art');

const Artist = new mongoose.Schema(
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
		},
		artistDisplayPic: [
			{
				url: {
					type: String,
					required: true,
				},
			},
		],
		dimensions: {
			type: String,
		},
		artWorkImgs: [
			{
				url: {
					type: String,
					required: true,
				},
			},
		],
		priceCategory: { Number },
		artworkCount: { Number },
		commitmentDate: { Date },
		website: { String },
		igFollowing: { Number },
		expectedDelivery: { Date },
		rating: { Number },
		taxReceipt: {
			type: String,
		},
		howWasArtistFound: { String },
		artistBasePrice: { Number },
		shippingMethod: {
			type: String,
			enum: ['Local Pickup', 'Local Delivery', 'International Delivery'],
		},
		readyForIGPost: { Boolean },
		readyForAuctionListing: { Boolean },
		artworkShipped: { Boolean },
		artworkReceived: { Boolean },
		igPostDone: { Boolean },
		targets: { String },
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

module.exports = mongoose.model('Artist', Artist);
