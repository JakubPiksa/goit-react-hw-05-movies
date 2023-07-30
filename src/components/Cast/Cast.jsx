import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import css from './cast.module.css'

const noPhoto = '/images/No-image-found.jpg';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const fetchCredits = async () => {
      try {
        const credits = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}/credits`,
          {
            params: {
              api_key: '610d75fe699fa5ab11363f277512029e', 
            },
          }
        );

        setCast(credits.data.cast);
      } catch (error) {
        console.error('Error while fetching cast details:', error);
      }
    };

    fetchCredits();
  }, [movieId]);

  return (
    <div className={css.cast_container}>
      <Link to={`/movies/${movieId}`} >
        <button className={css.goBack_button}>Go Back</button>
      </Link>
      <h2>Cast</h2>
      
      {cast.length > 0 ? (
        <ul>
          {cast.map((actor) => (
            <li key={actor.id}>
              {actor.profile_path ? (
                <img
                  width="150px"
                  src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
                  alt={actor.name}
                />
              ) : (
                <img width="150px" height="220px" src={noPhoto} alt="NO_PHOTO_FOUND" />
              )}
              <span>{actor.name}</span>
            </li>
          ))}
        </ul>
      ) : (
        <div>Loading cast...</div>
      )}
    </div>
  );
};


export default Cast;
