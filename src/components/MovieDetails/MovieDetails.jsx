import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import css from './movieDetails.module.css'


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

  const posterUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  return (
    <div className={css.movie_details_container}>
      <Link to={`/movies`} >
        <button className={css.goBack_button}>Go Back</button>
      </Link>
      <h1 className={css.movie_title}>{movie.title}</h1>
      <p className={css.movie_overview}>{movie.overview}</p>
      {movie.poster_path ? (
        <img src={posterUrl} alt={movie.title} />
      ) : (
        <div>No poster available</div>
      )}
      <p>Release Date: {movie.release_date}</p>
      <p>Rating: {movie.vote_average}</p>
      <p>Genres: {movie.genres.map((genre) => genre.name).join(', ')}</p>
      <p>Runtime: {movie.runtime} minutes</p>
      <Link to={`/movies/${movieId}/cast`} >
        <button className={css.goBack_button}>Cast</button>
      </Link>
      <Link to={`/movies/${movieId}/reviews`} >
        <button className={css.goBack_button}>Revievs</button>
      </Link>
    </div>
  );
};

export default MovieDetails;
