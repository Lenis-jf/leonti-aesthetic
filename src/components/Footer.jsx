import { Link, NavLink } from "react-router-dom";
import mainLogoWhite from "../assets/principal-assets/main-logo-white.svg";
import { HashLink } from "react-router-hash-link";
import { scrollFunction } from '../utils/scrollFunction'

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
                        <li><NavLink to="/services">Services</NavLink></li>
                        <div className="divider"></div>
                        <li><HashLink smooth scroll={scrollFunction} to="/#prices">Prices</HashLink></li>
                        <div className="divider"></div>
                        <li><HashLink smooth scroll={scrollFunction} to="/#gallery">Gallery</HashLink></li>
                        <div className="divider"></div>
                        <li><HashLink smooth scroll={scrollFunction} to="/#cnc-shop">CNC Shop</HashLink></li>
                        <div className="divider"></div>
                        <li><NavLink to="/contact">Contact Us</NavLink></li>
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
