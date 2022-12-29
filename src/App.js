import React, { useEffect, useState } from "react";
import "./App.css";
import searchIcon from "./search.svg";
import MovieCard from "./MovieCard";
// movie api key=6a9e1dcc

const App = () => {
    const api_url = "http://www.omdbapi.com/?apikey=6a9e1dcc";
    const [movies, setMovies] = useState([]);
    const [search, setSearch] = useState("");

  const getMovies = async (title) => {
    let res = await fetch(`${api_url}&s=${title}`);
    let data = await res.json();
    setMovies(data.Search);
  };

  const searchMovies = async (title) => {
    let res = await fetch(`${api_url}&s=${title}`);
    let data = await res.json();
    setMovies(data.Search);
  };

  useEffect(() => {
    getMovies("naruto");
    searchMovies("");
  }, []);

  return (
    <div className="app">
        {console.log(movies)}
      <h1>MoviesFlix</h1>
      <div className="search">
        <input
          placeholder="Search Movie here..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
        <img
          src={searchIcon}
          alt="Search"
          onClick={() => searchMovies(search)}
        />
      </div>
      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((e) => (
            <MovieCard key={e.Title} movie={e} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No Movies Found!</h2>
        </div>
      )}
    </div>
  );
};
export default App;
