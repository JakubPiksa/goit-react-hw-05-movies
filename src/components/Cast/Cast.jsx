import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import css from './cast.module.css'



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
      <button className={css.goBack_button}>
        <Link to={`/movies/${movieId}`} >Go Back</Link>
      </button>
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
                <img width="150px" src={C:\Users\Admin\Documents\GitHub\goit-react-hw-05-movies\src\components\Cast\No-image-found.jpg} alt="No Photo" />
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
