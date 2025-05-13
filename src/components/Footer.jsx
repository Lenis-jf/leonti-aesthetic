import { Link } from "react-router-dom";
import mainLogoWhite from "../assets/principal-assets/main-logo-white.svg";

const Footer = () => {
    return (
        <div>
            <footer>
                <div className="contact-card">
                    <span>Contact / Booking</span>
                    <div className="icons-container black">
                        <span className="social-media-icon email black"></span>
                        <span className="social-media-icon instagram black"></span>
                        <span className="social-media-icon facebook black"></span>
                        <span className="social-media-icon phone black"></span>
                        {/* <span className="social-media-icon"></span> */}
                    </div>
                    <span className="address black">Hochstädter Str.1a, 63477 Maintal</span>
                </div>
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
                    <div>© 2025 LEONTI. All Rights Reserved.</div>
                    <div>Terms of Service</div>
                </div>
            </footer>
        </div>
    );
}

export default Footer;
