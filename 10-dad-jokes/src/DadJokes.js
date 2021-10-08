import React, { useEffect, useState } from "react";

const DadJokes = () => {
  const [joke, setJoke] = useState(null);
  async function generateJoke() {
    const config = {
      headers: {
        Accept: "application/json",
      },
    };

    const res = await fetch("https://icanhazdadjoke.com", config);

    const data = await res.json();

    setJoke(data.joke);
  }
  useEffect(() => {
    generateJoke();
  }, []);
  return (
    <div className="container">
      <h3>Don't laugh challenge</h3>
      <div className="joke">{joke}</div>
      <button className="btn" onClick={generateJoke}>
        Get another joke
      </button>
    </div>
  );
};

export default DadJokes;
