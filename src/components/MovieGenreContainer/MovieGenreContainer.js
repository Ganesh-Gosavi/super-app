import React, {useState, useEffect} from "react";
import "./MovieGenreContainer.css";
import axios from "axios";

function MovieGenreContainer({ title }) {
    const [data, setData] = useState([]);
  
  
  useEffect(() => {
    const options = {
      method: "GET",
      url: `https://moviesdatabase.p.rapidapi.com/titles`,
      params: { genre: `${title}`, year: "2022" },
      headers: {
        "X-RapidAPI-Key": "d0e5c9363dmsh94606def0ddfe0cp15266cjsn969a6edac183",
        "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        setData(response.data.results);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, [title]);

  const moviePics = data.slice(1, 5);
  console.log(moviePics);
  
  return (
    <div className="movie__genre__container">
      <div className="genre__title">{title}</div>
      <div className="movie__genre__container__images">
        {moviePics.map((movie, index) => {
          return (
            <div className="movie__genre__container__image" key={index}>
              <img src={movie.primaryImage.url} alt="movie" />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MovieGenreContainer;
