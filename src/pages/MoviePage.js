import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const API_KEY = '416e4586'; // Replace with your OMDb API key

function MoviePage() {
  const { id } = useParams(); // Get the IMDb ID from the route
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(
          `https://www.omdbapi.com/?i=${id}&apikey=${API_KEY}`
        );
        const data = await response.json();

        if (data.Response === 'True') {
          setMovie(data);
        } else {
          setError(data.Error);
        }
      } catch (err) {
        setError('Failed to fetch movie details. Please try again later.');
      }
      setLoading(false);
    };

    fetchMovieDetails();
  }, [id]);

  if (loading) {
    return <p>Loading movie details...</p>;
  }

  if (error) {
    return <p className="text-danger">{error}</p>;
  }

  if (!movie) {
    return <p>Movie not found.</p>;
  }

  return (
    <div className="container my-4">
      <h1>{movie.Title}</h1>
      <div className="row">
        <div className="col-md-4">
          <img
            src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/300'}
            alt={movie.Title}
            className="img-fluid"
          />
        </div>
        <div className="col-md-8">
          <p>
            <strong>Year:</strong> {movie.Year}
          </p>
          <p>
            <strong>Genre:</strong> {movie.Genre}
          </p>
          <p>
            <strong>Director:</strong> {movie.Director}
          </p>
          <p>
            <strong>Writer:</strong> {movie.Writer}
          </p>
          <p>
            <strong>Actors:</strong> {movie.Actors}
          </p>
          <p>
            <strong>Plot:</strong> {movie.Plot}
          </p>
          <p>
            <strong>Language:</strong> {movie.Language}
          </p>
          <p>
            <strong>Awards:</strong> {movie.Awards}
          </p>
          <p>
            <strong>IMDb Rating:</strong> {movie.imdbRating}
          </p>
        </div>
      </div>
    </div>
  );
}

export default MoviePage;
