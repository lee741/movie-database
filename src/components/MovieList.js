import React from 'react';
import MovieCard from './MovieCard';

function MovieList({ movies }) {
  return (
    <div className="row">
      {movies.map((movie) => (
        <div key={movie.imdbID} className="col-md-4 mb-4">
          <MovieCard movie={movie} />
        </div>
      ))}
    </div>
  );
}

export default MovieList;
