/**
 * es6 modules and imports
 */
// import sayHello from './hello';
// sayHello('World');


// import {getMovies} from './api.js';


/**
 * require style imports
 */

const $ = require('jquery');
import 'materialize-css/dist/css/materialize.min.css'
import 'materialize-css/dist/js/materialize.js'
import 'materialize-css/js/sidenav.js'
import M from 'materialize-css/dist/js/materialize.js'

///////////API KEY///////////////////////////////////
// const key = 'http://www.omdbapi.com/?apikey=782d1187&t=';

const {getMovieKey, getMovie, getMovies, createMovie, patchMovie, deleteMovie} = require('./api.js');

var elems = document.querySelectorAll('.sidenav');
var instances = M.Sidenav.init(elems);

// $(document).ready(function () {
// $('.sidenav').sidenav();
//
// })


$(document).ready(function () {
    // $('#logo').click().css('padding', '4em')
});


// renderMovies()
//     .then((movie) => {
//         let html = '<div class="coffee-card card d-flex align-items-center border-0 m-2">';
//         html += '<div class="card-body m-3 w-100 d-flex justify-content-center "><img src="img/bean.png" height="50px" alt="">' + '</div>';
//         html += '<span>' + movie.title + '</span>';
//         html += '<span>' + movie.rating + '</span>';
//         html += '</div>';
//         return html;
//     });

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
        console.log('Here is the first movie: ');
        console.log(`id#${movie.id} - ${movie.title} - rating: ${movie.rating}`);

    })
    .catch((error) => {
        alert('Oh no! Something went wrong.\nCheck the console for details.');
        console.log(error);
    });

///////////////////////
//////CREATE MOVIE/////
///////////////////////

createMovie({

}).then(getMovies).then((movies) => {
    // console.log('Here are all the movies: ' + movies);
    movies.forEach(({title, rating}) => {
        console.log(`title:${title} - rating: ${rating}`);
    });
}).catch((error) => {
    alert('Oh no! Something went wrong.\nCheck the console for details.');
    console.log(error);
});


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


deleteMovie(4).then(getMovies).then((movies) => {
    console.log('Here are all the books:');
    movies.forEach(({title, rating}) => {
        console.log(`${title} ${rating}`);
    });
}).catch((error) => {
    alert('Oh no! Something went wrong.\nCheck the console for details.');
    console.log(error);
});


getMovieKey()
    .then((movies) => {
        console.log('Here are all the movies:');
        movies.forEach(({title, rating, id}) => {
            console.log(`id#${id} - ${title} - rating: ${rating}`);
        });
    }).catch((error) => {
    alert('Oh no! Something went wrong.\nCheck the console for details.');
    console.log(error);
});

/////////////////////////////////
////////SEARCH FEATURE//////////
///////////////////////////////
$(document).ready(function () {
    $('#search-button').click(function () {
        let input = $("#search").val();
        $('#search').html("");
        fetch(key + input)
            .then((success) => {
                success.json()
            })
            .then((movies) => {
                console.log(movies);
                let content = "<div class='card'>";
                content += '<img id="logo" src= "'+ movies.poster + '" alt="">';
                content += movies.title;
                content += '<br>';
                content += movies.released;
                content += '<br>';
                content += movies.plot;
                content += "</div>";

                $('#card').append(content);
            })
            .catch((error) => {
                console.log(error)
            });
    });
});




