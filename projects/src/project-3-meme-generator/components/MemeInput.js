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
    } = memesData;
    const randomNumber = Math.floor(Math.random() * memes.length);
    const imgUrl = memes[randomNumber].url;
    console.log(imgUrl);
    setMeme((meme) => ({ ...meme, randomImg: imgUrl }));
  }

  return (
    <div>
      <div className="meme-input">
        <div className="input--fields">
          <input placeholder="Top text" className="input-field" />
          <input placeholder="Bottom text" className="input-field" />
        </div>
        <button onClick={getMeme} className="meme-button">
          Get a new meme image
        </button>
      </div>
      <div>
        <div></div>
        <img className="meme-pic" src={randomImg} alt="meme" />
        <div></div>
      </div>
    </div>
  );
};

export default MemeInput;
