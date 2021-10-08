import { useEffect, useState } from "react";

const Progress = () => {
  const [prev, setPrevious] = useState(true);
  const [next, setnext] = useState(false);
  const [currentActive, setCurrentActive] = useState(1);
  const circleValues = [1, 2, 3, 4];
  const [progressWidth, setProgressWidth] = useState({
      width: "0%"
  })
  const handleClick = (btnState) => {
    if (btnState === "next") {
      setCurrentActive(currentActive + 1);
    } else {
      setCurrentActive(currentActive - 1);
    }
  };

  const updateCurrentActive = () => {
    if (currentActive < 1) setCurrentActive(1);
    else if (currentActive > circleValues.length)
      setCurrentActive(circleValues.length);
    if (currentActive === 1) {
      setPrevious(true);
    } else if (currentActive === circleValues.length) {
      setnext(true);
    } else {
      setnext(false);
      setPrevious(false);
    }
    const progressBar = ((currentActive  - 1)/ (circleValues.length - 1)) * 100 + "%";
    setProgressWidth({ width: progressBar });
  };
  useEffect(() => {
    updateCurrentActive();
    return () => {};
  }, [currentActive]);
  return (
    <div className="container">
      <div className="progress-container">
        <div className="progress" style={progressWidth}></div>
        {circleValues.map((x, index) => (
          <div
            className={`circle ${currentActive >= x ? "active" : ""}`}
            key={index}
          >
            {x}
          </div>
        ))}
      </div>
      <button
        className="btn"
        onClick={() => handleClick("previous")}
        disabled={prev}
      >
        Previous
      </button>
      <button
        className="btn"
        onClick={() => handleClick("next")}
        disabled={next}
      >
        Next
      </button>
    </div>
  );
};

export default Progress;
