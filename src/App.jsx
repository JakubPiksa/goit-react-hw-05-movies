import React, { Suspense } from 'react';
import {  Routes, Route } from 'react-router-dom';
import NavMenu from './components/NavMenu/NavMenu';
import css from './app.module.css'
import SiteNotFound from 'functions/SiteNotFound/SiteNotFound';

const Home = React.lazy(() => import('./components/Home/Home'));
const Movies = React.lazy(() => import('./components/Movies/Movies'));
const MovieDetails = React.lazy(() => import('./components/MovieDetails/MovieDetails'));
const Cast = React.lazy(() => import('./components/Cast/Cast'));
const Reviews = React.lazy(() => import('./components/Reviews/Reviews'));

const App = () => {
  return (
    <div className={css.body}>
      <NavMenu />
      
    <Suspense fallback={<div>Loading...</div>}>
        <Routes >
          <Route exact path="/" element={<Home />} />
          <Route exact path="/movies" element={<Movies />} />
          <Route exact path="/movies/:movieId" element={<MovieDetails />} />
          <Route path="/movies/:movieId/cast" element={<Cast />} />
          <Route path="/movies/:movieId/reviews" element={<Reviews />} />
          <Route path="*" element={<SiteNotFound />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
