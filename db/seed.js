//===== SEED.JS =========
//-----  import mongoose  -----
const mongoose = require('./connection');
//------- import model -------
const Artist = require('../models/Artist');
// const { ArtistDisplayPicSchema, ArtSchema } = require('./models/Artist');
//------- import seed data -------
const seedData = require('./seed.json');
//------- insertMany -------

Artist.deleteMany().then(() => {
	// Artist.insertMany(seedData)
	// 	.then((res) => {
	// 		console.log(res);
	// 	})
	// 	.catch((err) => {
	// 		console.log(err);
	// 	})
	// 	.finally(() => process.exit());
	Artist.create(seedData)
		.then(() => {
			console.log('Data seeded successfully');
			mongoose.connection.close();
		})
		.catch((error) => {
			console.log(error);
		});
});
