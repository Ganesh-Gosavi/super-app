import React, { useEffect, useState } from "react";
import "./Category.css";
import { useNavigate } from "react-router-dom";
import CardContainer from "../components/CardContainer/CardContainer";
import MovieBox from "../components/moviebox/MovieBox";
import MovieName from "../components/moviename/MovieName";
import superApp from "../assets/images/superApp.png";
import action from "../assets/categoryImages/action.png";
import drama from "../assets/categoryImages/drama.png";
import fantasy from "../assets/categoryImages/fantasy.png";
import fiction from "../assets/categoryImages/fiction.png";
import horror from "../assets/categoryImages/horror.png";
import romance from "../assets/categoryImages/romance.png";
import thriller from "../assets/categoryImages/thriller.png";
import music from "../assets/categoryImages/music.png";
import western from "../assets/categoryImages/western.png";

function Category() {
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [selectedCards, setSelectedCards] = useState([]);
  const navigate = useNavigate();

  const handleCardClick = (title) => {
    if (selectedCards.includes(title)) {
      setSelectedCards(selectedCards.filter((card) => card !== title));
    } else {
      setSelectedCards([...selectedCards, title]);
    }
  };

  const handleUnselectImage = (title) => {
    setSelectedCards(selectedCards.filter((card) => card !== title));
  };

  const handleNextPage = () => {
    navigate("/profile");
  };

  useEffect(() => {
    if (selectedCards.length > 2) {
      setIsButtonDisabled(false);
    } else if (selectedCards.length < 3) {
      setIsButtonDisabled(true);
    }
  }, [selectedCards]);

  useEffect(() => {
    localStorage.setItem("selectedCards", JSON.stringify(selectedCards));
  }, [selectedCards]);

  return (
    <div className="cparent">
      <div className="cleft">
        <img src={superApp} alt="superapp" />
        <div className="midtext">
          Choose your
          <br />
          entertainement
          <br />
          category
        </div>
        <div className="bottomtext">
          {selectedCards.map((card, index) => {
            return (
              <MovieName
                key={index}
                title={card}
                onClick={() => handleUnselectImage(card)}
              />
            );
          })}
        </div>
      </div>

      <div className="cright">
        <CardContainer>
          <MovieBox
            isSelected={selectedCards.includes("Action")}
            onClick={() => handleCardClick("Action")}
            title="Action"
            image={action}
            color="#FF5209"
          />
          <MovieBox
            isSelected={selectedCards.includes("Drama")}
            onClick={() => handleCardClick("Drama")}
            title="Drama"
            image={drama}
            color="#D7A4FF"
          />
          <MovieBox
            isSelected={selectedCards.includes("Romance")}
            onClick={() => handleCardClick("Romance")}
            title="Romance"
            image={romance}
            color="#148A08"
          />
          <MovieBox
            isSelected={selectedCards.includes("Thriller")}
            onClick={() => handleCardClick("Thriller")}
            title="Thriller"
            image={thriller}
            color="#84C2FF"
          />
          <MovieBox
            isSelected={selectedCards.includes("Western")}
            onClick={() => handleCardClick("Western")}
            title="Western"
            image={western}
            color="#902500"
          />
          <MovieBox
            isSelected={selectedCards.includes("Horror")}
            onClick={() => handleCardClick("Horror")}
            title="Horror"
            image={horror}
            color="#7358FF"
          />
          <MovieBox
            isSelected={selectedCards.includes("Fantasy")}
            onClick={() => handleCardClick("Fantasy")}
            title="Fantasy"
            image={fantasy}
            color="#FF4ADE"
          />
          <MovieBox
            isSelected={selectedCards.includes("Music")}
            onClick={() => handleCardClick("Music")}
            title="Music"
            image={music}
            color="#E61E32"
          />
          <MovieBox
            isSelected={selectedCards.includes("Fiction")}
            onClick={() => handleCardClick("Fiction")}
            title="Fiction"
            image={fiction}
            color="#6CD061"
          />
        </CardContainer>
      </div>
      <div>
        <button
          onClick={handleNextPage}
          disabled={isButtonDisabled}
          className="next"
        >
          Next Page
        </button>
      </div>
    </div>
  );
}

export default Category;
