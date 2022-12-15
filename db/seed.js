//===== SEED.JS =========
//-----  import mongoose  -----
const mongoose = require('./connection');
//------- import model -------
const Artist= require('../models/Room');
//------- import seed data -------
const seedData = require('./seed.json');
//------- insertMany -------

Artist.deleteMany().then(() => {
	Artist.insertMany(seedData)
		.then((res) => {
			console.log(res);
		})
		.catch((err) => {
			console.log(err);
		})
		.finally(() => process.exit());
});
