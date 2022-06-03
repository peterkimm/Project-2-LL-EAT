const express = require('express');
const Input = require('../models/input.js');
const router = express.Router();


router.get('/', (req, res) => {
    Input.find({}, (err, foundInputs) => {
        res.render('input/index.ejs', {
            inputs: foundInputs
        });
    });
});

router.get('/new', (req, res) => {
    res.render('input/new.ejs');
});


router.delete('/:id', (req, res) => {
    Input.findByIdAndDelete(req.params.id, (err, deletedInput) => {
        res.redirect('/input');
    });
});

router.put('/:id', (req, res) => {
    Input.findByIdAndUpdate(req.params.id, req.body, (err, updatedInput) => {
        res.redirect(`/input/${updatedInput._id}`);
    });
});

router.post('/', (req, res) => {
    Input.create(req.body, (err, createdInput) => {
        res.redirect('/input');
    });
});


router.get('/:id/edit', (req, res) => {
    Input.findById(req.params.id, (err, foundInput) => {
        res.render('input/edit.ejs', {
            input: foundInput
        });
    });
});


router.get('/:id', (req, res) => {
    Input.findById(req.params.id, (err, foundInput) => {
        res.render('input/show.ejs', {
            input: foundInput
        });
    });
});


module.exports = router;