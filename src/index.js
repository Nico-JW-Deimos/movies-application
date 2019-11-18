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

import 'materialize-css/dist/css/materialize.min.css'
import 'materialize-css/dist/js/materialize.js'
import 'materialize-css/js/sidenav.js'
import M from 'materialize-css/dist/js/materialize.js'

///////////API KEY///////////////////////////////////
// const omdb = `http://www.omdbapi.com/?&apikey=782d1187t=`;
// let title = `${title}`;
// console.log(omdb);
// apikey=782d1187&`;


const {getMovie, getMovies, createMovie, patchMovie, deleteMovie} = require('./api.js');

var elems = document.querySelectorAll('.sidenav');
var instances = M.Sidenav.init(elems);




// $('#logo').click().css('padding', '4em');


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

getMovie(1)
    .then((movie) => {
        // console.log('Here is the first movie: ');
        console.log(`id#${movie.id} - ${movie.title} - rating: ${movie.rating}`);

    })
    .catch((error) => {
        alert('Oh no! Something went wrong.\nCheck the console for details.');
        console.log(error);
    });

///////////////////////
//////CREATE MOVIE/////
///////////////////////

// createMovie({
//
// }).then(getMovies).then((movies) => {
//     console.log('Here are all the movies: ' + movies);
//     movies.forEach(({title, rating}) => {
//         console.log(`title:${title} - rating: ${rating}`);
//     });
// }).catch((error) => {
//     alert('Oh no! Something went wrong.\nCheck the console for details.');
//     console.log(error);
// });


///////////////////////
//////PATCH MOVIE/////
///////////////////////

patchMovie({
    "title": "Darjeeling Limited",
    "rating": "5"
}, 3).then(getMovies).then((movies) => {
    console.log('Here are all the movies:');
    movies.forEach(({title, rating}) => {
        console.log(`${title}, ${rating}`);
    });
}).catch((error) => {
    alert('Oh no! Something went wrong.\nCheck the console for details.');
    console.log(error);
});

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




