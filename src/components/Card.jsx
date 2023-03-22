import React from "react";

function Card(props) {
  const srcimg = props.src;
  const title = props.title;
  const year = props.year;
  const content = props.cont;
  return (
    <div className="movie">
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
  );
}

export default Card;
