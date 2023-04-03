import React, { useState, useEffect } from "react";
import ImgDefault from "../assets/img/movidb_default.jpg";

const Movie = (props) => {
  const userRequest = props.targetId;
  const [activity, setActivity] = useState(!props.intels);
  const [idFilm, setIdFilm] = useState(userRequest != null ? userRequest : "");
  const [intels, setIntels] = useState();

  // * my api in .env
  const api_key = process.env.REACT_APP_MOVIE_API_KEY;
  // * img src api basic
  const imglink = "https://image.tmdb.org/t/p/w500/";
  // * img by default
  const imglinkDefault = ImgDefault;

  //  * On change filmTitle : show  api response
  useEffect(() => {
    const data = fetch(
      `https://api.themoviedb.org/3/movie/${idFilm}?api_key=${api_key}`
    )
      .then((resp) => resp.json())
      .then((result) => setIntels(result))
      .then(() => console.log(intels));
  }, []);
  return intels ? (
    <div
      className={`details ${activity ? "active" : "not-active"} `}
      onClick={() => setActivity(false)}
    >
      <h2>{intels.original_title}</h2>
      {intels.budget == 0 ? null : (
        <div>
          <h3>Budget : </h3>
          <p>{intels.budget} $</p>
        </div>
      )}
      <div>
        <h3>Genres :</h3>
        <p>
          {intels.genres.map((genre, key) => (
            <span key={key}>{genre.name}, </span>
          ))}
        </p>
      </div>

      <div>
        <h3>Resume :</h3>
        <p className="resume_by_id">
          <span>{intels.overview}</span>
        </p>
      </div>
      <div>
        <h3>Popularity : </h3>
        <p>{Math.floor(intels.popularity)} /100</p>
      </div>

      <section>
        <h3>Compagnies :</h3>
        <div className="companies">
          {intels.production_companies.map((comp, key) => (
            <p key={key}>
              <span>{comp.name}</span>
              {comp.logo_path === null ? null : (
                <img
                  src={imglink + comp.logo_path}
                  alt={comp.name}
                  width="50px"
                />
              )}
            </p>
          ))}
        </div>
      </section>
    </div>
  ) : (
    <p>chargement</p>
  );
};

export default Movie;
