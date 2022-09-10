import Joker from "../images/troller-face.png";

const MemeInput = () => (
  <div>
    <div className="meme-input">
      <div className="input--fields">
        <input className="input-field" />
        <input className="input-field" />
      </div>
      <button className="meme-button">Get a new meme image</button>
    </div>
    <div>
      <div></div>
      <img src={Joker} alt="meme" />
      <div></div>
    </div>
  </div>
);

export default MemeInput;
