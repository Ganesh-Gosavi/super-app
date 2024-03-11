import React from "react";
import "./MovieName.css";
import cross from "../../assets/images/cross.png";

function MovieName({ title, onClick }) {
  return (
    <div className="movie-name">
      <div className="title">{title}</div>
      <img src={cross} alt="cross" id="cross-icon" onClick={onClick} />
    </div>
  );
}

export default MovieName;
