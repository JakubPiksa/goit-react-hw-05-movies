import { Link } from 'react-router-dom';
import css from './siteNotFound.module.css'


const SiteNotFound = () => {
  return (
    <div>
      <h3 className={css.error} >
        I apologize for any confusion. It appears that I may have lost my way in the vast expanse of the internet. Allow me to return you to the world of movies, where we can continue our journey together. Please click the button below to return to the planet of movies.
      </h3>
      <Link to="/">
        <button>Go back</button>
      </Link>
    </div>
  );
};

export default SiteNotFound