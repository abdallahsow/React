import Joker from '../images/troller-face.png';

export default function Navbar() {
    return (
        <nav className="header">
            <img className="header-icon" src={Joker} alt="Troll Face" />
            <h3 className="header-title">Meme Generator</h3>
            <p className="header-text">React course - Project 3</p>
        </nav>
    )
}