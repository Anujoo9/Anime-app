const mongoose = require('mongoose');

const animeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    genre: {
        type: String,
        required: false,
    },
    imdblink: {
        type: String,
        required: true,
    },
    imgUrl: {
        type: String,
        required: true,
    },
});

const Anime = mongoose.model('Anime-list', animeSchema);

module.exports = Anime;
