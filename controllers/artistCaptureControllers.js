const express = require('express');
const { handleRecordExists } = require('../middleware/custom_errors');
const router = express.Router();
const artistMessage = require('../models/ArtistCapture');

// POST (/api/artistMessages/)
router.post('/', (req, res, next) => {
	artistMessage
		.create(req.body)
		.then((message) => res.status(201).json(message))
		.catch(next);
});

// GET  (/api/artistMessages/)
router.get('/', (req, res, next) => {
	artistMessage
		.find()
		.then((message) => res.json(message))
		.catch(next);
});

// GET BY ID  (/api/artistMessages/:id)
router.get('/:id', async (req, res, next) => {
	try {
		const message = await artistMessage.findById(req.params.id);
		if (handleRecordExists(message)) {
			return res.json(message);
		}
	} catch (error) {
		return next();
	}
});

