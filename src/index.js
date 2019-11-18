/**
 * es6 modules and imports
 */
// import sayHello from './hello';
// sayHello('World');
// import {getMovies} from './api.js';


/**
 * require style imports
 */
// const omdb = new (require(' omdbapi '))('ffbdb1fc');

const $ = require('jquery');

// import 'materialize-css/dist/css/materialize.min.css'
// import 'materialize-css/dist/js/materialize.js'
// import 'materialize-css/js/sidenav.js'
// import M from 'materialize-css/dist/js/materialize.js'

///////////API KEY///////////////////////////////////
// const omdb = `http://www.omdbapi.com/?&apikey=782d1187t=`;
// let title = `${title}`;
// console.log(omdb);
// apikey=782d1187&`;


const {getMovie, getMovies, createMovie, patchMovie, deleteMovie} = require('./api.js');

// var elems = document.querySelectorAll('.sidenav');
// var instances = M.Sidenav.init(elems);


////////////////////////
//////GET MOVIES////////
////////////////////////

getMovies()
    .then((movies) => {
        console.log('Here are all the movies:');
        movies.forEach(({title, rating, id}) => {
            console.log(`id#${id} - ${title} - rating: ${rating}`);
        });
    }).catch((error) => {
    alert('Oh no! Something went wrong.\nCheck the console for details.');
    console.log(error);
});


////////////////////////
//////GET ONE MOVIE/////
////////////////////////

// getMovie(1)
//     .then((movie) => {
//         // console.log('Here is the first movie: ');
//         console.log(`id#${movie.id} - ${movie.title} - rating: ${movie.rating}`);
//
//     })
//     .catch((error) => {
//         alert('Oh no! Something went wrong.\nCheck the console for details.');
//         console.log(error);
//     });

///////////////////////
//////CREATE MOVIE/////
///////////////////////
$('.search-button').click(function(){
    let title = $('.title').val();
createMovie({

    'title': `${title}`,
    'rating': 100
})

    .then(getMovies)
    .then((movies) => {
        console.log('Here are all the movies: ' + movies);
        movies.forEach(({title, rating, id}) => {
            console.log(`title:${title} - rating: ${rating} - id ${id}`);
        });
    }).catch((error) => {
    alert('Oh no! Something went wrong.\nCheck the console for details.');
    console.log(error);
});



});
///////////////////////////
//////CREATE MOVIE BTN/////
//////////////////////////

//Click listener for the submit button
// const addSubmitBtnListener = () => {
//     $('#submit').click(function () {
//         //Create new movie object
//         let newMovie = {
//             title: $('#movie-name').val(),
//             rating: $('#movie-rating').val(),
//         };
//         console.log(newMovie);
//         //Add the movie to the db
//         createMovie((newMovie)
//             .then(() => {
//             }));
//     });
// // };
// addSubmitBtnListener();
// $('#search-button').click(function () {
//     let newMovie = $('#search').val();
//     console.log(createMovie(newMovie));
// $('#card-container').append(`<div class="card">
//     <h6>${title}</h6>
//     <p>${rating}️️</p>
//     <div class="buttons">
//         <button class="gear">⚙️</button>
//         <button class="trash">🗑</button>
//     </div>
// </div>`)
// });


///////////////////////
//////PATCH MOVIE/////
///////////////////////

// patchMovie({
//     "title": "Darjeeling Limited",
//     "rating": "5"
// }, 3).then(getMovies).then((movies) => {
//     console.log('Here are all the movies:');
//     movies.forEach(({title, rating}) => {
//         console.log(`${title}, ${rating}`);
//     });
// }).catch((error) => {
//     alert('Oh no! Something went wrong.\nCheck the console for details.');
//     console.log(error);
// });

///////////////////////
//////DELETE MOVIE/////
///////////////////////


// deleteMovie(4).then(getMovies).then((movies) => {
//     console.log('Here are all the movies:');
//     movies.forEach(({title, rating}) => {
//         console.log(`${title} ${rating}`);
//     });
// }).catch((error) => {
//     alert('Oh no! Something went wrong.\nCheck the console for details.');
//     console.log(error);
// });


/////////////////////////////////
////////SEARCH FEATURE//////////
///////////////////////////////

// $(document).ready(function () {
//     $('#search-button').click(function () {
//         let input = $("#search").val();
//         console.log(input);
//         fetch(getMovie + input).done
//             .then((success) => {
//                 success.json()
//             })
//             .then((movies) => {
//                 console.log(movies);
//                 let content = "<div class='card'>";
//                 content += '<img id="logo" src= "'+ movies.poster + '" alt="">';
//                 content += movies.title;
//                 content += '<br>';
//                 content += movies.released;
//                 content += '<br>';
//                 content += movies.plot;
//                 content += "</div>";
//
//                 $('#card').append(content);
//             })
//             .catch((error) => {
//                 console.log(error)
//             });
//     });
// });




