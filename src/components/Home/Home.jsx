import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      try {
        const response = await axios.get(
          'https://api.themoviedb.org/3/trending/movie/day',
          {
            params: {
              api_key: '610d75fe699fa5ab11363f277512029e',
            },
          }
        );

        setTrendingMovies(response.data.results);
      } catch (error) {
        console.error('Błąd podczas pobierania:', error);
      }
    };

    fetchTrendingMovies();
  }, []);

  return (
    <div>
      <h1>Najpopularniejsze filmy</h1>
      <ul>
        {trendingMovies.map((movie) => (
          <li key={movie.id}>
    <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
  </li>
        ))}
      </ul>
      <p>Lubie filmy</p>
    </div>
  );
};

export default Home;
