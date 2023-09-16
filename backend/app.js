/* eslint-disable no-console */
const express = require('express');
const cors = require('cors');

const app = express();

const mongoose = require('mongoose');
// const seedAnime = require('./seed');
const Anime = require('./models/Anime');

//  use path __dirname
app.use(cors());
const pass = 'CPxTjHD7Y5KVopC3';
// const id = 'anime-world';

(async () => {
    const connectionStr = `mongodb+srv://anime_app:${pass}@anime-world.18iiisn.mongodb.net/?retryWrites=true&w=majority`;
    await mongoose.connect(connectionStr);
    console.log('DB connected');
    // await seedAnime();
})();

app.get('/', async (req, res) => {
    const anime = await Anime.find({});
    res.json({
        message: 'Anime List',
        payload: anime,
        errorr: null,
    });
});

// app.use('/', (req, res) => {
//     res.send('Hello');
// });

const port = 8000;
app.listen(port, () => {
    console.log(`server started at port ${port}`);
});
