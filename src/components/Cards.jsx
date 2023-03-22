import React, { useState, useEffect } from "react";
import Card from "./Card";

// function Informations() {
//   const [options, setOptions] = useState();
//   const infos = {
//     method: "GET",
//     headers: {
//       "X-RapidAPI-Key": process.env.REACT_APP_IMDB_API_KEY,
//       "X-RapidAPI-Host": "imdb8.p.rapidapi.com",
//     },
//   };
//   const result = fetch(
//     "https://imdb8.p.rapidapi.com/auto-complete?q=game%20of%20thr",
//     infos
//   )
//     .then((response) => response.json())
//     .then((result) => setOptions(result))
//     .then(console.log(options));

//   return options;
// }
// function DisplaySearch(info) {
//   return <>{info.d ? info.d.map((el) => (
//         <Card
//           src={el.i ? el.i.imageUrl : null}
//           title={el.l}
//           year={el.y}
//         />
//       ))
//     : null}</>;
// }

function Cards(props) {
  const search = props.search;
  // console.log(options.stringify());

  // const infos = [
  //   { img: { Img }, title: "TitreTest", year: "1998" },
  //   { img: { Img }, title: "TitreTest", year: "1998" },
  //   { img: { Img }, title: "TitreTest", year: "1998" },
  // ];

  // const infos = search("game%20of%20thr");

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
      .then((result) => setOptions(result))
      .then(console.log(options));
  }, []);

  // return console.log(options.d);
  // return <ul>{options.d ? console.log(options.d) : null}</ul>;
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

  // return infos.map((info, index) => (
  //   <Card key={index} src={info.img} title={info.title} year={info.year} />
  // ));
}

export default Cards;
