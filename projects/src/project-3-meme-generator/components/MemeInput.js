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
    setMeme((meme) => ({ ...meme, randomImg: imgUrl }));
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setMeme((prevMeme) => ({ ...prevMeme, [name]: value }));
  }

  console.log(meme);

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
        <h2 className="meme-text-top">{meme.topText}</h2>
        <img className="meme-pic" src={randomImg} alt="meme" />
        <h2 className="meme-text-bottom">{meme.bottomText}</h2>
      </div>
    </div>
  );
};

export default MemeInput;
