import React, { useState, useEffect } from "react";
import "./effect.css";

const Effects = () => {
  const [starWarsData, setStarWarsData] = useState({});
  const [count, setCount] = useState(0);

  console.log("Component rendered!");

  useEffect(function () {
    console.log("useEffect called!");
    fetch("https://swapi.dev/api/people/1")
      .then((response) => response.json())
      .then((data) => setStarWarsData(data));
  }, []);

  return (
    <div className="star-wars">
      <h1>Star Wars Data</h1>
      <h2>The count is {count}</h2>
      <button onClick={() => setCount(() => count + 1)}>
        Get next character
      </button>
      <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
    </div>
  );
};

export default Effects;
