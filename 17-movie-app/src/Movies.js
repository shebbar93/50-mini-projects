import React, { useEffect, useState } from "react";
import Movie from "./Movie";

const Movies = () => {
  const API_URL =
    "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1";

  const SEARCH_API =
    'https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query="';

  const [movieData, setMoviedata] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const getmovies = async (url) => {
    console.log(url);
    const res = await fetch(url);
    const data = await res.json();
    setMoviedata(data.results);
  };
  const getMoviesForSearchValue = (e) => {
    e.preventDefault();
    if (searchValue && searchValue !== "") {
      getmovies(SEARCH_API + searchValue);
      setSearchValue("");
    }
  };
  useEffect(() => {
    getmovies(API_URL);
  }, []);
  return (
    <>
      <header>
        <form onSubmit={getMoviesForSearchValue}>
          <input
            placeholder="Search"
            type="text"
            className="search"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
        </form>
      </header>
      <main>
        {movieData.map((x, key) => (
          <Movie key={x.id} movie={x} />
        ))}
      </main>
    </>
  );
};

export default Movies;
