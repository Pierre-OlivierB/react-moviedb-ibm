import React, { useEffect, useState } from "react";
import Card from "./Card";
import ImgDefault from "../assets/img/movidb_default.jpg";
import NotFound from "./NotFound";

function GetData() {
  const [film, setFilm] = useState();
  const [filmTitle, setFilmTitle] = useState("Jack+Reacher");
  const [search, setSearch] = useState("");

  const api_key = process.env.REACT_APP_MOVIE_API_KEY;
  const imglink = "https://image.tmdb.org/t/p/w500/";
  const imglinkDefault = ImgDefault;

  useEffect(() => {
    const data = fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${filmTitle}`
    )
      .then((resp) => resp.json())
      .then((result) => setFilm(result));
  }, [filmTitle]);
  return (
    <div className="container">
      <div className="search">
        <input type="text" onChange={(e) => setSearch(e.target.value)} />

        <i
          className="fab fa-searchengin white-s"
          onClick={() => setFilmTitle(search)}
        />
      </div>

      {film ? (
        film.results.length === 0 ? (
          <NotFound />
        ) : (
          film.results.map((el, index) => (
            <Card
              key={index}
              src={
                el.backdrop_path === null
                  ? imglinkDefault
                  : imglink + el.backdrop_path
              }
              title={el.title}
              year={el.release_date}
              cont={el.overview}
            />
          ))
        )
      ) : (
        <p className="in-charge">Chargement...</p>
      )}

      {console.log(film ? film.results : null)}
    </div>
  );
}

function MovieDb() {
  return (
    <>
      <GetData />
    </>
  );
}

export default MovieDb;
