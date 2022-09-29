import { useState, useEffect } from "react";

const WindowTracker = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    function watchWidth() {
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener("resize", watchWidth);

    return () => {
      window.removeEventListener("resize", watchWidth);
    };
  }, []);

  return <h1>window width: {windowWidth}</h1>;
};

export default WindowTracker;
