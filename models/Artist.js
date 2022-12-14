const mongoose = require('../db/connection');

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
			required: true,
		},
		artistDisplayPic: [ArtistDisplayPicSchema],
		dimensions: {
			type: String,
			required: true,
		},
		artWorkImgs: [ArtSchema],
		priceCategory: { Number },
		artworkCount: { Number },
		commitmentDate: { Date },
		website: { String },
		igFollowing: { Number },
		expectedDelivery: { Date },
		rating: { Number },
		taxReceipt: {
			type: String,
			enum: ['yes', 'no'],
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
