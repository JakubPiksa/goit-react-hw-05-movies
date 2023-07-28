import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const Home = React.lazy(() => import('./components/Home/Home'));
const Movies = React.lazy(() => import('./components/Movies/Movies'));
const MovieDetails = React.lazy(() => import('./components/MovieDetails/MovieDetails'));
const Cast = React.lazy(() => import('./components/Cast/Cast'));
const Reviews = React.lazy(() => import('./components/Reviews/Reviews'));

const App = () => {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/movies" component={Movies} />
          <Route exact path="/movies/:movieId" component={MovieDetails} />
          <Route path="/movies/:movieId/cast" component={Cast} />
          <Route path="/movies/:movieId/reviews" component={Reviews} />
          {/* Dodaj trasę dla nieistniejących stron */}
          <Route component={Home} />
        </Switch>
      </Suspense>
    </Router>
  );
};

export default App;
