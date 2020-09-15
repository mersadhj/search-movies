import React, { useState } from "react";
import Header from "./Header";
import "./app.css";
import Movie from "./Movie";
import Searchbar from "./Searchbar";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(undefined);
  const searchHandle = async (e) => {
    e.preventDefault();
    const api_call = await fetch(
      `http://www.omdbapi.com/?apikey=da77f0f5&s=${e.target.elements[0].value}`
    );
    const response = await api_call.json();
    // if(response.)
    setMovies(response.Search);
    //console.log(response.Search);
  };
  console.log(movies);
  return (
    <div>
      <Header headername="MeSearch"></Header>
      <Searchbar searchHandle={searchHandle}></Searchbar>
      <div className="movies">
        {movies.map((movie) => {
          return <Movie key={movie.imdbID} movie={movie}></Movie>;
        })}
      </div>
    </div>
  );
};
export default App;
//http://www.omdbapi.com/?i=tt3896198&apikey=da77f0f5
