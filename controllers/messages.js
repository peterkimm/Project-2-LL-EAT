const express = require('express');
const Message = require('../models/messages.js');
const router = express.Router();

router.get('/', (req, res) => {
    Message.find({}, (err, foundMessages) => {
		res.render('messages/index.ejs', {
			messages: foundMessages
		});
	});
});

router.get('/new', (req, res) => {
	res.render('messages/new.ejs');
});

router.delete('/:id', (req, res) => {
	Message.findByIdAndDelete(req.params.id, () => {
		res.redirect('/messages');
	});
});

router.put('/:id', (req, res) => {
	Message.findByIdAndUpdate(req.params.id, req.body, () => {
		res.redirect('/messages');
	});
});

router.post('/', (req, res) => {
	Message.create(req.body, (err, createdMessage) => {
		res.redirect('/messages');
	});
});

router.get('/:id/edit', (req, res) => {
	Message.findById(req.params.id, (err, foundMessage) => {
		res.render('messages/edit.ejs', {
			message: foundMessage
		});
	});
});


router.get('/:id', (req, res) => {
	Message.findById(req.params.id, (err, foundMessage) => {
		res.render('messages/show.ejs', {
			message: foundMessage
		});
	});
});

module.exports = router;