import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';


const Home = React.lazy(() => import('./Home/Home'));
const Movies = React.lazy(() => import('./Movies/Movies'));
const MovieDetails = React.lazy(() => import('./MovieDetails/MovieDetails'));
const Cast = React.lazy(() => import('./Cast/Cast'));
const Reviews = React.lazy(() => import('./Reviews/Reviews'));

const App = () => {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        
          <Route exact path="/" component={Home} />
          <Route exact path="/movies" component={Movies} />
          <Route exact path="/movies/:movieId" component={MovieDetails} />
          <Route path="/movies/:movieId/cast" component={Cast} />
          <Route path="/movies/:movieId/reviews" component={Reviews} />
          {/* Dodaj trasę dla nieistniejących stron */}
          <Route component={Home} />
        
      </Suspense>
    </Router>
  );
};

export default App;
