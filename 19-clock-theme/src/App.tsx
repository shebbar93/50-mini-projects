import React, { useEffect, useState } from "react";

import "./App.css";
const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
const scale = (
  num: number,
  in_min: number,
  in_max: number,
  out_min: number,
  out_max: number
) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};
function App() {
  const [toggleMode, setToggleMode] = useState(false);
  const [hourEl, setHourEl] = useState(0);
  const [minEl, setMinEl] = useState(0);
  const [secondEl, setSecondEl] = useState(0);
  const [timeEl, setTimeEl] = useState("");
  const [dateEl, setDateEl] = useState("");
  const [date, setDate] = useState(0);
  const setTime = () => {
    const time = new Date();
    const month = time.getMonth();
    const day = time.getDay();
    const date1 = time.getDate();
    const hours = time.getHours();
    const hoursForClock = hours >= 13 ? hours % 12 : hours;
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    const ampm = hours >= 12 ? "PM" : "AM";
    setHourEl(scale(hoursForClock, 0, 12, 0, 360));
    setMinEl(scale(minutes, 0, 60, 0, 360));
    setSecondEl(scale(seconds, 0, 60, 0, 360));

    setTimeEl(
      `${hoursForClock}:${minutes < 10 ? `0${minutes}` : minutes} ${ampm}`
    );
    setDateEl(`${days[day]}, ${months[month]}`);
    setDate(date1);
  };
  useEffect(() => {
    const intervalId = setInterval(setTime, 1000);
    return () => clearInterval(intervalId);
  }, []);
  return (
    <div className={`App ${toggleMode ? "dark" : ""}`}>
      <button className="toggle" onClick={() => setToggleMode(!toggleMode)}>
        Dark mode
      </button>
      {date !== 0 && (
        <div className="clock-container">
          <div className="clock">
            <div
              className="needle hour"
              style={{
                transform: `translate(-50%, -100%) rotate(${hourEl}deg)`,
              }}
            ></div>
            <div
              className="needle minute"
              style={{
                transform: `translate(-50%, -100%) rotate(${minEl}deg)`,
              }}
            ></div>
            <div
              className="needle second"
              style={{
                transform: `translate(-50%, -100%) rotate(${secondEl}deg)`,
              }}
            ></div>
            <div className="center-point"></div>
          </div>
          <div className="time">{timeEl}</div>
          <div className="date">
            {dateEl}
            <span className="circle">{date}</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
