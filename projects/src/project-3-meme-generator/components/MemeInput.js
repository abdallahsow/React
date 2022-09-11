import Joker from "../images/troller-face.png";
import memesData from "./memesData"

const MemeInput = () => {
  function getMeme() {
    const { data: { memes } } = memesData;
    const randomNumber = Math.floor(Math.random() * memes.length);
    const imgUrl = memes[randomNumber].url
    console.log(imgUrl)
  }
  
  return (
    <div>
    <div className="meme-input">
      <div className="input--fields">
        <input className="input-field" />
        <input className="input-field" />
      </div>
      <button onClick={getMeme} className="meme-button">Get a new meme image</button>
    </div>
    <div>
      <div></div>
      <img src={Joker} alt="meme" />
      <div></div>
    </div>
  </div>
)};

export default MemeInput;
