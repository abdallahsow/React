import AirBnB from '../images/airbnb-logo.png';

const Navbar = () => (
    <img className="logo" src={AirBnB} alt="" />
)

function HeroSection() {
    return (
        <div className="hero-section">
        <Navbar />
    </div>
    )
    
}

export default HeroSection;