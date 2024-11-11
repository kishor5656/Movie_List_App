const express = require('express');
const bodyparser = require('body-parser')
const Movie = require('../models/movie');
// const movie = require('../models/movie');
const router = express.Router();

router.use(bodyparser.json());
router.use(bodyparser.urlencoded({ urlencoded: true }));


router.get('/movies', async (req, res) => {

    try {
        const movies = await Movie.find().sort({ date: -1 });//fetch from db 
        res.status(201).json(movies);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
})


router.post('/movies', async (req, res) => {

    //create instance
    const movie = new Movie ({
        title: req.body.title,
        imgUrl: req.body.imgUrl,
        director: req.body.director,
        releaseYear: req.body.releaseYear,
        rating: req.body.rating,
    });

    try {
        const newMovie = await movie.save();//save data to db
        res.status(201).json(newMovie);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
})

router.put('/movies/:id', async (req, res) => {
    try {
        const updatedmovie = await Movie.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedmovie)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
})

router.delete('/movies/:id', async (req, res) => {
    try {
        await Movie.findByIdAndDelete(req.params.id);
        res.json({ message: 'delete ayi monus' })
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
})



module.exports = router;

