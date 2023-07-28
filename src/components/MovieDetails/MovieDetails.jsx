import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}`,
          {
            params: {
              api_key: '610d75fe699fa5ab11363f277512029e', // Replace with your API key
            },
          }
        );

        setMovie(response.data);
      } catch (error) {
        console.error('Error while fetching movie details:', error);
      }
    };

    fetchMovieDetails();
  }, [movieId]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{movie.title}</h1>
          <p>{movie.overview}</p>
          <img

          src={`https://image.tmdb.org/t/p/w500${movieId.poster}`}
          alt={movieId.title}
        />
      <p>Release Date: {movie.release_date}</p>
      <p>Rating: {movie.vote_average}</p>
      <p>Genres: {movie.genres.map((genre) => genre.name).join(', ')}</p>
      <p>Runtime: {movie.runtime} minutes</p>
      <Link to={`/movies/${movieId}/cast`}>View Cast</Link>
      <Link to={`/movies/${movieId}/reviews`}>View Reviews</Link>
    </div>
  );
};

export default MovieDetails;
