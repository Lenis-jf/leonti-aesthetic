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
                    {/* Correo Electrónico */}
                    <a href="mailto:ecaterina.leonti06@gmail.com" className="social-media-icon email white" alt="email icon" aria-label="Enviar correo electrónico">
                    </a>

                    {/* Instagram */}
                    <a href="https://www.instagram.com/leonti.aesthetic/" target="_blank" rel="noopener noreferrer" className="social-media-icon instagram white" alt="instagram icon" aria-label="Visitar Instagram">
                    </a>

                    {/* Facebook */}
                    <a href="https://www.facebook.com/leonti.aesthetic.facebook" target="_blank" rel="noopener noreferrer" className="social-media-icon facebook white" alt="facebook icon" aria-label="Visitar Facebook">
                    </a>

                    {/* Teléfono */}
                    <a href="tel:+4917620836261" className="social-media-icon phone white" alt="phone icon" aria-label="Llamar por teléfono">
                    </a>
                    {/* Puedes añadir más iconos aquí */}
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
