import memesData from "./memesData";
import React, { useState } from "react";

const MemeInput = () => {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImg: "http://i.imgflip.com/1bij.jpg",
  });

  const { topText, bottomText, randomImg } = meme;
  const [allMemeImgs, setAllMemeImgs] = useState(memesData);

  function getMeme() {
    const {
      data: { memes },
    } = allMemeImgs;
    const randomNumber = Math.floor(Math.random() * memes.length);
    const imgUrl = memes[randomNumber].url;
    console.log(imgUrl);
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
          />
          <input
            onChange={handleChange}
            placeholder="Bottom text"
            className="input-field"
          />
        </div>
        <button onClick={getMeme} className="meme-button">
          Get a new meme image
        </button>
      </div>
      <div className="meme">
        <h2 className="meme-text-top">One does not simply</h2>
        <img className="meme-pic" src={randomImg} alt="meme" />
        <h2 className="meme-text-bottom">Walk into mordor</h2>
      </div>
    </div>
  );
};

export default MemeInput;
