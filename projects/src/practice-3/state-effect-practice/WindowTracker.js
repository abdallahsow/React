import { useState, useEffect } from "react";

const WindowTracker = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", function () {
      setWindowWidth(window.innerWidth);
    });
  }, []);

    console.log("Effect ran!");
    
  return <h1>window width: {windowWidth}</h1>;
};

export default WindowTracker;
