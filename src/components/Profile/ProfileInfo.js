import React, {useState} from "react";
import "./ProfileInfo.css";
import avatar from "../../assets/images/display_picture.png";

function ProfileInfo() {
  const info = JSON.parse(localStorage.getItem("formData"));
  const [cards, setCards] = useState(JSON.parse(localStorage.getItem("selectedCards")));
  
  const removeSelected = (e) => {
    const selectedCard = e.target.parentElement.children[0].innerText;
    const newCards = cards.filter((card) => card !== selectedCard);
    localStorage.setItem("selectedCards", JSON.stringify(newCards));
    setCards(newCards);
  };

  return (
    <div className="profile__info">
      <div className="profile__info__avatar">
        <img src={avatar} alt="avatar" id="avatar" />
      </div>
      <div className="profile__info__details">
        <div className="profile__info__details__name">
          <span>{info.name}</span>
        </div>
        <div className="profile__info__details__email">
          <span>{info.email}</span>
        </div>
        <div className="profile__info__details__username">
          <span>{info.username}</span>
        </div>
        {cards.length !== 0 ? (
          <div className="profile__info__cards">
            {cards.map((card) => {
              return (
                <div key={card} className="profile__info__cards__title">
                  <h3>{card}</h3>
                  <span onClick={removeSelected}>X</span>
                </div>
              );
            })}
          </div>
        ) : (
          <div>
            <span>No Cards Selected</span>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProfileInfo;
