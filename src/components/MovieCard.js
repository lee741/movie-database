import React from 'react';
import { Link } from 'react-router-dom';

function MovieCard({ movie }) {
  return (
    <div className="card h-100">
      <img
        src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/150'}
        className="card-img-top"
        alt={movie.Title}
      />
      <div className="card-body">
        <h5 className="card-title">{movie.Title}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{movie.Year}</h6>
        <Link to={`/movie/${movie.imdbID}`} className="btn btn-primary">
          View Details
        </Link>
      </div>
    </div>
  );
}

export default MovieCard;
