const mongoose = require('mongoose');


const movie_schema = new mongoose.Schema({
    title: { type: String, required: true },
    imgUrl: { type: String, required: true },
    director: { type: String, required: true },
    releaseYear: { type: Number, required: true },
    rating: { type: Number, required: true }
    // date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Movie', movie_schema);
