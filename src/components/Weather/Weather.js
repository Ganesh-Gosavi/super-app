import React, { useState, useEffect } from "react";
import "./Weather.css";
import axios from "axios";
import humidity from "../../assets/images/humidity.png";
import wind from "../../assets/images/wind.png";
import pressure from "../../assets/images/pressure.png";

function Weather() {
  const [weather, setWeather] = useState([]);
  const [time, setTime] = useState("00:00:00");
  const [date, setDate] = useState("00-00-0000");

  useEffect(() => {
    axios
      .get("1fd6885dff5e4818bb0181301241103")
      .then((res) => setWeather(res.data.current));
  }, []);

  useEffect(() => {
    const ddmmyyyy = new Date();
    let day = ddmmyyyy.getDate();
    let month = ddmmyyyy.getMonth() + 1;
    let year = ddmmyyyy.getFullYear();

    if (day < 10) day = `0${day}`;
    if (month < 10) month = `0${month}`;
    const dateFormated = `${day}-${month}-${year}`;
    setDate(dateFormated);
  }, [weather]);

  useEffect(() => {
    const currTime = new Date();
    let hours = currTime.getHours();
    let minutes = currTime.getMinutes();
    let tzone = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
    if (hours < 10) hours = `0${hours}`;
    if (minutes < 10) minutes = `0${minutes}`;
    const timeFormated = `${hours}:${minutes} ${tzone}`;
    setTime(timeFormated);
  }, [weather]);

  return (
    <div className="weather">
      <div className="weather__top">
        <div>{date}</div>
        <div>{time}</div>
      </div>

      {weather.length !== 0 ? (
        <div className="weather__bottom">
          <div className="weather__type">
            <img src={weather.condition.icon} alt="" />
            <p>{weather.condition.text}</p>
          </div>
          <div className="weather__line"></div>
          <div className="weather__temp">
            <h1>{weather.temp_c}°C</h1>
            <div className="wind__pressure">
              <img src={pressure} alt="" />
              <div className="pressure">
                <span>{weather.pressure_mb} mbar</span>
                <span>Pressure</span>
              </div>
            </div>
          </div>
          <div className="weather__line"></div>
          <div className="wind__humidity">
            <div className="weather__wind">
              <img src={wind} alt="" />
              <div className="wind__speed">
                <span>{weather.wind_kph} km/h</span>
                <span>Wind</span>
              </div>
            </div>
            <div className="weather__humidity">
              <img src={humidity} alt="" />
              <div className="humidity">
                <span>{weather.humidity}%</span>
                <span>Humidity</span>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="lds-spinner">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      )}
    </div>
  );
}

export default Weather;
