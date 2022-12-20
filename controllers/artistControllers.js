const express = require('express');
const {
	handleRecordExists,
	handleValidateOwnership,
} = require('../middleware/custom_errors');
const Artist = require('../models/Artist');
const router = express.Router();

// GET (ALL)  /api/Artists/
router.get('/', (req, res, next) => {
	Artist.find()

		.then((artist) => res.json(artist))
		.catch(next);
});

// GET bY ID  /api/Artists/:id
router.get('/:id', async (req, res, next) => {
	try {
		const artist = await Artist.findById(req.params.id);
		if (handleRecordExists(artist)) {
			return res.json(artist);
		}
	} catch (error) {
		return next();
	}
});

// POST /api/Artists/
router.post('/', (req, res, next) => {
	Artist.create(req.body)
		.then((artist) => res.status(201).json(artist))
		.catch(next);
});

// DELETE (delete) /api/Artists/:id
router.delete('/:id', (req, res, next) => {
	Artist.findOneAndDelete({
		_id: req.params.id,
	})
		.then(() => res.sendStatus(204))
		.catch(next);
});

module.exports = router;
