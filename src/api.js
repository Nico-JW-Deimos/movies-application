module.exports = {
  getMovies: () => {
    return fetch('/api/movies')
      .then(response => response.json());
  },
  getMovie: (id) => {
    return fetch(`/api/movies/${id}`)
        .then(response => response.json())
  },

  createMovie: (movie) => {
    return fetch('/api/movies', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/db.json'
      },
      body: JSON.stringify(movie)
    })

  },
  patchMovie : (movie, id) => {
    return fetch(`api/movies/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(movie),
    })
  },
  deleteMovie : (id) => {
    return fetch(`api/movies/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })
  },
  getMovieKey : () => {
    return fetch('http://www.omdbapi.com/?apikey=ffbdb1fc&')
        .then(response => response.json())
  }

};
