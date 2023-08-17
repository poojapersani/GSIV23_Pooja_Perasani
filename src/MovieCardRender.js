import React from 'react';
import { Link } from 'react-router-dom';

const imageApi = "https://image.tmdb.org/t/p/w500/";

/** this function renders the list of all cards */
const MovieCardRender = ({ movies }) => {
  return (
    <div className="all-cards">   
      	{movies.map((movie, index) => (
          <Link to={`/details/${movie.id}`} key={index} className="movie-details-link">
              <div className="movie-cards" key={index}>
                <img
                  src={imageApi + movie.backdrop_path}
                  className="poster-images"
                  alt="posterimages"
                />
                <div className="Rating-title">
                  <div className="title">{movie.original_title}</div>
                  <div className="rating">{movie.vote_average}</div>
                </div>
                <div className="description">{movie.overview}</div>
              </div>
         </Link>
      	))}
    </div>
  );
};

export default MovieCardRender;
