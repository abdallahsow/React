import React, { useState, useEffect } from "react";

const MemeInput = () => {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImg: "http://i.imgflip.com/1bij.jpg",
  });

  const { topText, bottomText, randomImg } = meme;
  const [allMemeImgs, setAllMemeImgs] = useState([]);

  useEffect(function () {
    fetch("https://api.imgflip.com/get_memes")
      .then((response) => response.json())
      .then((api) => setAllMemeImgs(api.data.memes));
  }, []);

  function getMeme() {
    const randomNumber = Math.floor(Math.random() * allMemeImgs.length);
    const imgUrl = allMemeImgs[randomNumber].url;
    setMeme((meme) => ({ ...meme, randomImg: imgUrl }));
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setMeme((prevMeme) => ({ ...prevMeme, [name]: value }));
  }

  return (
    <div>
      <div className="meme-input">
        <div className="input--fields">
          <input
            onChange={handleChange}
            placeholder="Top text"
            className="input-field"
            name="topText"
            value={topText}
          />
          <input
            onChange={handleChange}
            placeholder="Bottom text"
            className="input-field"
            name="bottomText"
            value={bottomText}
          />
        </div>
        <button onClick={getMeme} className="meme-button">
          Get a new meme image
        </button>
      </div>
      <div className="meme">
        <h2 className="meme-text-top">{topText}</h2>
        <img className="meme-pic" src={randomImg} alt="meme" />
        <h2 className="meme-text-bottom">{bottomText}</h2>
      </div>
    </div>
  );
};

export default MemeInput;
