import React, { useState, useEffect } from 'react';
import SearchBar from '../components/SearchBar';
import MovieList from '../components/MovieList';

const API_KEY = '416e4586'; // Replace with your OMDb API key

function Home() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (searchTerm.trim() === '') {
      setMovies([]); // Clear movies if search term is empty
      return;
    }

    const fetchMovies = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(
          `https://www.omdbapi.com/?s=${searchTerm}&apikey=${API_KEY}`
        );
        const data = await response.json();

        if (data.Response === 'True') {
          setMovies(data.Search); // Use the "Search" key from the response
        } else {
          setMovies([]);
          setError(data.Error); // API may return error messages
        }
      } catch (err) {
        setError('Failed to fetch movies. Please try again later.');
        setMovies([]);
      }
      setLoading(false);
    };

    const debounceFetch = setTimeout(fetchMovies, 500); // Debounce API calls
    return () => clearTimeout(debounceFetch); // Clean up on re-renders
  }, [searchTerm]);

  return (
    <div className="container">
      <h1 className="text-center my-4">Movie Database</h1>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      {loading && <p>Loading movies...</p>}
      {error && <p className="text-danger">{error}</p>}
      {!loading && !error && movies.length === 0 && searchTerm && (
        <p>No movies found for "{searchTerm}".</p>
      )}
      <MovieList movies={movies} />
    </div>
  );
}

export default Home;
