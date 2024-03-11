import React, { useState, useRef } from "react";
import "./Timer.css";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import up from "../../assets/images/up.png";
import down from "../../assets/images/down.png";
import music from "../../assets/alarmTone/alarmtone.mp3";

function Timer() {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const increareSeconds = () => {
    if (seconds < 59) {
      setSeconds(seconds + 1);
    } else {
      setSeconds(0);
      increareMinutes();
    }
  };

  const decreareSeconds = () => {
    if (seconds > 0) {
      setSeconds(seconds - 1);
    } else {
      setSeconds(59);
      decreareMinutes();
    }
  };

  const increareMinutes = () => {
    if (minutes < 59) {
      setMinutes(minutes + 1);
    } else {
      setMinutes(0);
      increareHours();
    }
  };

  const decreareMinutes = () => {
    if (minutes > 0) {
      setMinutes(minutes - 1);
    } else {
      setMinutes(59);
      decreareHours();
    }
  };

  const increareHours = () => {
    if (hours < 23) {
      setHours(hours + 1);
    } else {
      setHours(0);
    }
  };

  const decreareHours = () => {
    if (hours > 0) {
      setHours(hours - 1);
    } else {
      setHours(23);
    }
  };

  const startMusic = () => {
    setIsPlaying(true);
  };

  const stopMusic = () => {
    setIsPlaying(false);
  };

  const onComplete = () => {
    audioRef.current.play();
    setIsPlaying(false);
    setHours(0);
    setMinutes(0);
    setSeconds(0);
  };

  const renderTime = (value) => {
    if (value < 0) {
      return <span>Time's up!</span>;
    }
    let minutes = Math.floor(value / 60);

    let seconds = value % 60;
    let hours = Math.floor(minutes / 60);
    let minutesLeft = minutes % 60;

    if (seconds < 10) {
      seconds = `0${seconds}`;
    }

    if (minutesLeft < 10) {
      minutesLeft = `0${minutesLeft}`;
    }

    if (hours < 10) {
      hours = `0${hours}`;
    }

    return `${hours}:${minutesLeft}:${seconds}`;
  };

  return (
    <div className="timer__parent">
      <div className="timer__circle">
        <CountdownCircleTimer
          isPlaying={isPlaying}
          duration={seconds + minutes * 60 + hours * 3600}
          colors={["#FF6A6A"]}
          onComplete={onComplete}
          strokeWidth={10}
          size={170}
          trailColor="grey"
        >
          {({ remainingTime }) => (
            <span className="inside__circle">{renderTime(remainingTime)}</span>
          )}
        </CountdownCircleTimer>
      </div>
      <div className="timer__countdown__parent">
        <div className="timer__countdown">
          <div className="hours">
            <span>Hours</span>
            <img src={up} alt="up" onClick={increareHours} />
            {hours < 10 ? (
              <span id="times">{`0${hours}`}</span>
            ) : (
              <span id="times">{hours}</span>
            )}
            <img src={down} alt="down" onClick={decreareHours} />
          </div>
          <span>:</span>
          <div className="minutes">
            <span>Minutes</span>
            <img src={up} alt="up" onClick={increareMinutes} />
            {minutes < 10 ? (
              <span id="times">{`0${minutes}`}</span>
            ) : (
              <span id="times">{minutes}</span>
            )}
            <img src={down} alt="down" onClick={decreareMinutes} />
          </div>
          <span>:</span>
          <div className="seconds">
            <span>Seconds</span>
            <img src={up} alt="up" onClick={increareSeconds} />
            {seconds < 10 ? (
              <span id="times">{`0${seconds}`}</span>
            ) : (
              <span id="times">{seconds}</span>
            )}
            <img src={down} alt="down" onClick={decreareSeconds} />
          </div>
        </div>
        {isPlaying ? (
          <button className="stop" onClick={stopMusic}>
            Stop
          </button>
        ) : (
          <button className="start" onClick={startMusic}>
            Start
          </button>
        )}
      </div>
      <audio ref={audioRef} src={music} />
    </div>
  );
}

export default Timer;
