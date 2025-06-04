import { Link, NavLink } from "react-router-dom";
import mainLogoWhite from "../assets/principal-assets/main-logo-white.svg";
import { HashLink } from "react-router-hash-link";
import { scrollFunction } from '../utils/scrollFunction'
import { useTranslation } from 'react-i18next';

const Footer = () => {
    const { t } = useTranslation();

    return (
        <div>
            <footer className="dark-section">
                <NavLink to="/" className='mainLogo-bottom'>
                    <img src={mainLogoWhite} alt={t("mainServicesPage.logo.alt", "Leonti Aesthetic Logo")} />
                </NavLink>                <div className="addresses">
                    <span className="address white">Hochstädter Str.1a, 63477 Maintal</span>
                    <span className="email-address white">aesthetic@leonti.eu</span>
                </div>
                <div className="icons-container white">
                    <span className="social-media-icon email white" alt="email icon"></span>
                    <span className="social-media-icon instagram white" alt="instagram icon"></span>
                    <span className="social-media-icon facebook white" alt="facebook icon"></span>
                    <span className="social-media-icon phone white" alt="phone icon"></span>
                    {/* <span className="social-media-icon"></span> */}
                </div>
                <nav className="footer-menu">
                    <ul>
                        <div className="divider"></div>
                        <li><NavLink to="/services">{t("footer.services", "Services")}</NavLink></li>
                        <div className="divider"></div>
                        <li><HashLink smooth scroll={scrollFunction} to="/#prices">{t("footer.prices", "Prices")}</HashLink></li>
                        <div className="divider"></div>
                        <li><HashLink smooth scroll={scrollFunction} to="/#gallery">{t("footer.gallery", "Gallery")}</HashLink></li>
                        <div className="divider"></div>
                        <li><HashLink smooth scroll={scrollFunction} to="/#cnc-shop">{t("footer.cncShop", "CNC Shop")}</HashLink></li>
                        <div className="divider"></div>
                        <li><NavLink to="/contact">{t("footer.contact", "Contact Us")}</NavLink></li>
                        <div className="divider"></div>
                    </ul>
                </nav>
                <div className="sub-footer">
                    {/* <div>{t("footer.privacyPolicy", "Privacy Policy")}</div>
                    <div className="vertical-divider"></div> */}
                    <div>{t("footer.rightsReserved", "© 2025 LEONTI. All Rights Reserved.")}</div>
                    {/* <div className="vertical-divider"></div>
                    <div>{t("footer.termsOfService", "Terms of Service")}</div> */}
                </div>
            </footer>
        </div>
    );
}

export default Footer;
