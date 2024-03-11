import React from "react";
import "./MovieBox.css";

function MovieBox({ title, image, color, onClick, isSelected }) {
  return (
    <div
      className={`box ${isSelected ? "selected" : ""}`}
      onClick={onClick}
      style={{ backgroundColor: color }}
    >
      <div className="box__title">{title}</div>
      <img src={image} alt="img" id="box__image" />
    </div>
  );
}

export default MovieBox;
