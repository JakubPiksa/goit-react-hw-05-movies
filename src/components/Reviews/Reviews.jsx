import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import css from './reviews.module.css';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}/reviews`,
          {
            params: {
              api_key: '610d75fe699fa5ab11363f277512029e', // Replace with your API key
            },
          }
        );

        setReviews(response.data.results);
      } catch (error) {
        console.error('Error while fetching reviews:', error);
      }
    };

    fetchReviews();
  }, [movieId]);

  return (
      <div>
          <button className={css.goBack_button}>
            <Link to={`/movies/${movieId}`} >Go Back</Link>
        </button>
      {reviews.length > 0 ? (
        <ul>
          {reviews.map(review => (
            <li key={review.id} className={css.reviewItem}>
              <h3>{review.author}</h3>
              <p>{review.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <div>No reviews available.</div>
      )}
    </div>
  );
};

export default Reviews;
