import React, { useEffect, useState } from "react";
import "./movie.css";
const Movie = (props) => {
  const [desc, setDesc] = useState("");
  const [genre, setGenre] = useState("");
  const [rating, setRating] = useState("0/0");
  useEffect(() => {
    (async (movie) => {
      const api_call = await fetch(
        `http://www.omdbapi.com/?apikey=da77f0f5&i=${movie.movie.imdbID}`
      );
      const response = await api_call.json();
      if (response != undefined) {
        setDesc(response.Plot);
        setGenre(response.Genre);
        if (response.Ratings[0] !== undefined)
          setRating(response.Ratings[0].Value);
        console.log(response);
      }
    })(props);
  });
  return (
    <div class="card" style={{ width: "18rem" }}>
      <img
        width="300"
        height="350"
        className="poster card-image-top"
        src={props.movie.Poster}
      />
      <div className="card-body">
        <div className="title">{props.movie.Title}</div>
        <div>*******************</div>

        <div className="">{props.movie.Year}</div>
        <div></div>
        <div className="">Genre: {genre}</div>
        <div>*******************</div>
        <div className=""> Plot: {desc}</div>
        <div>*******************</div>

        <div className="">Rating In IMDB:{rating}</div>
      </div>
    </div>
  );
};
export default Movie;
