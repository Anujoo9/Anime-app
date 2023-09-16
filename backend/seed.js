const Anime = require('./models/Anime');

const list = [
    {
        name: 'Jujutsu Kaisen',
        genre: 'Animation, Action, Adventure',
        imdblink: 'https://www.imdb.com/title/tt12343534/',
        imgUrl: 'https://images.squarespace-cdn.com/content/v1/571abd61e3214001fb3b9966/24bf459f-6de1-4d98-aa2a-c4e16491fb15/Jujutsu+Kaisen+Key+Animation+Vol.jpg'

    },
    {
        name: 'Demon Slayer',
        genre: 'Animation, Action, Adventure',
        imdblink: 'https://www.imdb.com/title/tt9335498/?ref_=fn_al_tt_1',
        imgUrl: 'https://m.media-amazon.com/images/M/MV5BZjZjNzI5MDctY2Y4YS00NmM4LTljMmItZTFkOTExNGI3ODRhXkEyXkFqcGdeQXVyNjc3MjQzNTI@._V1_.jpg'

    },
    {
        name: 'ChainsawMan',
        genre: 'Animation, Action, Adventure',
        imdblink: 'https://www.imdb.com/title/tt13616990/?ref_=nv_sr_srsg_0_tt_8_nm_0_q_chiansaw',
        imgUrl: 'https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781974709939/chainsaw-man-vol-1-9781974709939_hr.jpg'

    },
    {
        name: 'Dragon BallZ',
        genre: 'Animation, Action, Adventure',
        imdblink: 'https://www.imdb.com/title/tt0214341/?ref_=fn_al_tt_1',
        imgUrl: 'https://m.media-amazon.com/images/M/MV5BMGU2NjZhMmUtNTYzYS00OTMyLTkzZDAtMTkzNDIwNWFkM2I0XkEyXkFqcGdeQXVyMTY3NTgwODk5._V1_.jpg'

    },
    {
        name: 'Tokyo Ghoul',
        genre: 'Animation, Action, Adventure',
        imdblink: 'https://www.imdb.com/title/tt3741634/',
        imgUrl: 'https://m.media-amazon.com/images/M/MV5BN2E2OTgzODktMjBhYy00MjJjLWI0OTgtNGYxOGNhMWMxOWE4XkEyXkFqcGdeQXVyMzgxODM4NjM@._V1_.jpg'

    },
    {
        name: 'Fullmeta Alchemist',
        genre: 'Animation, Action, Adventure',
        imdblink: 'https://www.imdb.com/title/tt3741634/',
        imgUrl: 'https://m.media-amazon.com/images/M/MV5BMmI5NmFlZjItOTBhOC00NGI0LWIyNDAtODJhOTJjZDEyMTYyXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_.jpg'

    },
    {
        name: 'Attack on Titans',
        genre: 'Animation, Action, Adventure',
        imdblink: 'https://www.imdb.com/title/tt2560140/?ref_=nv_sr_srsg_0_tt_8_nm_0_q_attac',
        imgUrl: 'https://flxt.tmsimg.com/assets/p10701949_b_v9_ah.jpg'

    },
    {
        name: 'Scissor Seven',
        genre: 'Animation, Action, Adventure',
        imdblink: 'https://www.imdb.com/title/tt10384610/?ref_=nv_sr_srsg_0_tt_6_nm_2_q_scissor',
        imgUrl: 'https://m.media-amazon.com/images/M/MV5BOGM4MTZlZDQtZDdjNC00NGEwLTlhYjktNTY0NDlhYzg3ZmRhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg'

    },
    {
        name: 'One Punch Man',
        genre: 'Animation, Action, Adventure',
        imdblink: 'https://www.imdb.com/title/tt4508902/?ref_=nv_sr_srsg_0_tt_8_nm_0_q_one%2520pu',
        imgUrl: 'https://m.media-amazon.com/images/M/MV5BZjJlNzE5YzEtYzQwYS00NTBjLTk5YzAtYzUwOWQyM2E3OGI2XkEyXkFqcGdeQXVyNTgyNTA4MjM@._V1_FMjpg_UX1000_.jpg'

    },
    {
        name: 'Invincible',
        genre: 'Animation, Action, Adventure',
        imdblink: 'https://www.imdb.com/title/tt6741278/?ref_=nv_sr_srsg_0_tt_8_nm_0_q_invincin',
        imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkeBypGKoi6sRhOeIpS87Jv1Hz7uCSJCf7KQ&usqp=CAU'

    },
];

async function seedAnime() {
    await Anime.deleteMany({});
    await Anime.insertMany(list);
    console.log('Anime List Seeded! :)');
}

module.exports = seedAnime;
