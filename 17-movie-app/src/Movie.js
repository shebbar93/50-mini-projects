import React from "react";

const Movie = ({ movie }) => {
  const IMG_PATH = "https://image.tmdb.org/t/p/w1280";
  const getClassByRate = (vote) => {
    if (vote >= 8) {
      return "green";
    } else if (vote >= 5) {
      return "orange";
    } else {
      return "red";
    }
  };
  return (
    <div className="movie">
      <img src={IMG_PATH + movie.poster_path} alt="" />
      <div className="movie-info">
        <h3>{movie.title}</h3>
        <span className={getClassByRate(movie.vote_average)}>{movie.vote_average}</span>
      </div>
      <div className="overview">
        <h3>Overview</h3>
        {movie.overview}
      </div>
    </div>
  );
};

export default Movie;
