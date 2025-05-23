import { Link } from "react-router-dom";
import mainLogoWhite from "../assets/principal-assets/main-logo-white.svg";
import Map from "../components/Map";

const Footer = () => {
    return (
        <div>
            <section className="location-info-container">
                <h4 >Come Visit Us</h4>
                <h1>We’re just a few clicks away</h1>
                <span className="address">Hochstädter Str.1a, 63477 Maintal</span>
                <Map />
                <Link className="contact-btn" to="/contact">Contact me</Link>
            </section>
            <section className="beige-section">
                <h4>Get in touch</h4>
                <h1>We’re here to help</h1>
                <p>Give us call or send us a message and one of our friendly team members will be in touch shortly.</p>
            </section>
            <footer>
                <img className="main-logo-white" src={mainLogoWhite} alt="Leonti Aesthetics logo" />
                <nav className="footer-menu">
                    <ul>
                        <li><Link to="/">Services</Link></li>
                        <div className="divider"></div>
                        <li><Link to="/about">Prices</Link></li>
                        <div className="divider"></div>
                        <li><Link to="/services">Gallery</Link></li>
                        <div className="divider"></div>
                        <li><Link to="/cnc-shop">CNC Shop</Link></li>
                        <div className="divider"></div>
                        <li><Link to="/contact">Contact Us</Link></li>
                    </ul>
                </nav>

                <span className="address white">Hochstädter Str.1a, 63477 Maintal</span>

                <div className="icons-container white">
                    <span className="social-media-icon email white"></span>
                    <span className="social-media-icon instagram white"></span>
                    <span className="social-media-icon facebook white"></span>
                    <span className="social-media-icon phone white"></span>
                    {/* <span className="social-media-icon"></span> */}
                </div>
                <div className="sub-footer">
                    <div>Privacy Policy</div>
                    <div className="vertical-divider"></div>
                    <div>© 2025 LEONTI. All Rights Reserved.</div>
                    <div className="vertical-divider"></div>
                    <div>Terms of Service</div>
                </div>
            </footer>
        </div>
    );
}

export default Footer;
