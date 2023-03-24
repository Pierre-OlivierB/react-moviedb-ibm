import React, { useState, useEffect } from "react";
import Card from "./Card";

function Cards() {
  const [options, setOptions] = useState([]);
  const [filmTitle, setFilmTitle] = useState("game%20of%20thr");
  const infos = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": process.env.REACT_APP_IMDB_API_KEY,
      "X-RapidAPI-Host": "imdb8.p.rapidapi.com",
    },
  };
  useEffect(() => {
    fetch("https://imdb8.p.rapidapi.com/auto-complete?q=game%20of%20thr", infos)
      .then((response) => response.json())
      .then((result) => setOptions(result));
  }, []);

  return (
    <>
      <div className="search">
        <input type="text" onChange={(e) => setFilmTitle(e.target.value)} />
        <img src="" alt="search" />
      </div>

      <div className="container">
        {options.d
          ? options.d.map((el) => (
              <Card
                src={el.i ? el.i.imageUrl : null}
                title={el.l}
                year={el.y}
              />
            ))
          : null}
      </div>
    </>
  );
}

export default Cards;
