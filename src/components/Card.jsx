import React, { useState, useEffect } from "react";
import Movie from "./Movie";
// import Movie from "./Movie";

// * get infos of card by props from MovieDb component
function Card(props) {
  const srcimg = props.src;
  const title = props.title;
  const year = props.year;
  const content = props.cont;
  const idFilm = props.idMovie;
  // * my api in .env
  const api_key = process.env.REACT_APP_MOVIE_API_KEY;
  const [idMovie, setIdMovie] = useState();
  const [intels, setIntels] = useState();

  const ClickOnCard = () => {
    // const data = fetch(
    //   `https://api.themoviedb.org/3/movie/${idMovie}?api_key=${api_key}`
    // )
    //   .then((resp) => resp.json())
    //   .then((result) => console.log(result));

    setIsActive((current) => !current);
    setIdMovie(idFilm);
    // console.log(idFilm);
  };

  const [isActive, setIsActive] = useState(false);
  return (
    <div>
      {!isActive ? (
        <div
          className={`movie ${isActive ? "active" : ""}`}
          onClick={() => ClickOnCard()}
        >
          <div>
            <p>{content}</p>
          </div>
          <div>
            <img src={srcimg} alt={title} />
          </div>
          <div>
            <span>{year}</span>
            <h3>{title}</h3>
          </div>
        </div>
      ) : (
        <div onClick={() => ClickOnCard()}>
          <Movie targetId={idMovie} onClick={() => ClickOnCard()} />
        </div>
      )}
    </div>
  );
}

export default Card;
