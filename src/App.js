// src/App.js
import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import MovieList from './components/MovieList';
import './App.css';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const API_KEY = '416e4586'; // Replace with your OMDb API key

  const fetchMovies = async (query) => {
    setIsLoading(true);
    setError('');
    try {
      const response = await fetch(`https://www.omdbapi.com/?=${query}&apikey=${API_KEY}`);
      const data = await response.json();
      if (data.Response === 'True') {
        setMovies(data.Search);
      } else {
        setError('No movies found');
      }
    } catch (error) {
      setError('Error fetching data');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="App">
      <h1>Movie Database</h1>
      <SearchBar onSearch={fetchMovies} />
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <MovieList movies={movies} />
    </div>
  );
};

export default App;
