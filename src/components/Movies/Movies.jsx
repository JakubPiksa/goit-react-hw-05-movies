import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Movies = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  // Memoize the fetchMovies function
  const fetchMovies = useCallback(async () => {
    try {
      const response = await axios.get(
        'https://api.themoviedb.org/3/search/movie',
        {
          params: {
            api_key: '610d75fe699fa5ab11363f277512029e',
            query: searchQuery,
          },
        }
      );

      setSearchResults(response.data.results);
    } catch (error) {
      console.error('Error while fetching movies:', error);
    }
  }, [searchQuery]); // Add searchQuery to the dependency array of useCallback

  useEffect(() => {
    if (searchQuery) {
      fetchMovies();
    } else {
      setSearchResults([]);
    }
  }, [searchQuery, fetchMovies]); // Add fetchMovies to the dependency array of useEffect

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div>
      <h1>Movie Search</h1>
      <input
        type="text"
        value={searchQuery}
        onChange={handleSearch}
        placeholder="Enter movie title..."
      />
      <ul>
        {searchResults.map((movie) => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Movies;
