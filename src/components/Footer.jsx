import { Link } from "react-router-dom";
import mainLogoWhite from "../assets/principal-assets/main-logo-white.svg";
import Map from "../components/Map";

const Footer = () => {
    return (
        <div>
            <footer className="dark-section">
                <img className="main-logo-white" src={mainLogoWhite} alt="Leonti Aesthetics logo" />
                <div className="addresses">
                    <span className="address white">Hochstädter Str.1a, 63477 Maintal</span>
                    <span className="email-address white">aesthetic@leonti.eu</span>
                </div>
                <div className="icons-container white">
                    <span className="social-media-icon email white"></span>
                    <span className="social-media-icon instagram white"></span>
                    <span className="social-media-icon facebook white"></span>
                    <span className="social-media-icon phone white"></span>
                    {/* <span className="social-media-icon"></span> */}
                </div>
                <nav className="footer-menu">
                    <ul>
                        <div className="divider"></div>
                        <li><Link to="/">Services</Link></li>
                        <div className="divider"></div>
                        <li><Link to="/about">Prices</Link></li>
                        <div className="divider"></div>
                        <li><Link to="/services">Gallery</Link></li>
                        <div className="divider"></div>
                        <li><Link to="/cnc-shop">CNC Shop</Link></li>
                        <div className="divider"></div>
                        <li><Link to="/contact">Contact Us</Link></li>
                        <div className="divider"></div>
                    </ul>
                </nav>
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
