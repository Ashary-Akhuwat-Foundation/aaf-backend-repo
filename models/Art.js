// art pic url
// name of artist
// description of art
// price
// art dimensions
//

const mongoose = require('../db/connection');

const artSchema = new mongoose.Schema(
	{
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
		description: {
			type: String,
			required: true,
		},
        artTitle:{
            type:String,
            required:true
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
