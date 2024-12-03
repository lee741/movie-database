import React from 'react';
import { useParams } from 'react-router-dom';

const movieData = {
  1: {
    title: 'Inception',
    year: 2010,
    genre: 'Science Fiction, Thriller',
    director: 'Christopher Nolan',
    cast: ['Leonardo DiCaprio', 'Joseph Gordon-Levitt', 'Ellen Page'],
    synopsis:
      'A thief who steals corporate secrets through dream-sharing technology is tasked with planting an idea into a target\'s subconscious.',
  },
  2: {
    title: 'The Shawshank Redemption',
    year: 1994,
    genre: 'Drama',
    director: 'Frank Darabont',
    cast: ['Tim Robbins', 'Morgan Freeman'],
    synopsis:
      'Two imprisoned men bond over several years, finding solace and redemption through acts of common decency.',
  },
  // Add more movies
};

function MoviePage() {
  const { id } = useParams();
  const movie = movieData[id];

  if (!movie) {
    return <h2>Movie not found</h2>;
  }

  return (
    <div className="container my-4">
      <h1>{movie.title}</h1>
      <p>
        <strong>Year:</strong> {movie.year}
      </p>
      <p>
        <strong>Genre:</strong> {movie.genre}
      </p>
      <p>
        <strong>Director:</strong> {movie.director}
      </p>
      <p>
        <strong>Cast:</strong> {movie.cast.join(', ')}
      </p>
      <p>
        <strong>Synopsis:</strong> {movie.synopsis}
      </p>
    </div>
  );
}

export default MoviePage;
