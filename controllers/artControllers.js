// controllers/reviews.js
const express = require('express');
const router = express.Router();

// require the artist and art models
const Art = require('./../models/Art');
const Artist = require('./../models/Artist');

//POST /api/Artists/:id/art/
router.post('/', (req, res, next) => {
	//get the art information
	const newArt = req.body;
	//get the artist by id
	const artistID = newArt.artistID;
	//find artist by id
	Artist.findById(artistID)
		.then((artist) => {
			artist.artWorkImgs.push(newArt);
			return artist.save;
		})
		.then((updatedArtist) => {
			res.json(updatedArtist);
		})
		.catch(next);
});
