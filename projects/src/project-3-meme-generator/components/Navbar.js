import Joker from '../images/troller-face.png';

export default function Navbar() {
    return (
        <div className="navbar">
            <img src={Joker} alt="Troll Face" />
            <h3>Meme Generator</h3>
            <p>React course - Project 3</p>
        </div>
    )
}