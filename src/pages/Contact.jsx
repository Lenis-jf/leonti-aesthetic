import Menu from "../components/Menu";
import WhatsappButton from "../components/WhatsappButton";
import Map from "../components/Map";
import Footer from "../components/Footer";
import mainLogoWhite from "../assets/principal-assets/main-logo-white.svg";

import { Link, NavLink } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import { useEffect } from "react";

const Contact = () => {
    const { t } = useTranslation();
    
    useEffect(() => {
        document.title = "Leonti Aesthetics | Contact Us";
        window.scrollTo(0, 0);
    }
        , []);

    return (
        <div className="contact-page">
            <Menu />
            <section className="dark-section contact-page">
                <NavLink to="/" className='mainLogo-top'>
                    <img src={mainLogoWhite} alt="Leonti Aesthetics Logo" />
                </NavLink>
            </section>
            <section className="help-section contact-page">
                <h4>{t("help.title", "Get in touch")}</h4>
                <h1>{t("help.subtitle", "We’re here to help")}</h1>
                <p>{t("help.description", "Give us call or send us a message and one of our friendly team members will be in touch shortly.")}</p>
            </section>
            <section className="icons-container black beige-section">
                <div className="icons-container black">
                    {/* Correo Electrónico */}
                    <a href="mailto:ecaterina.leonti06@gmail.com" className="social-media-icon email black" alt="email icon" aria-label="Enviar correo electrónico">
                    </a>

                    {/* Instagram */}
                    <a href="https://www.instagram.com/leonti.aesthetic/" target="_blank" rel="noopener noreferrer" className="social-media-icon instagram black" alt="instagram icon" aria-label="Visitar Instagram">
                    </a>

                    {/* Facebook */}
                    <a href="https://www.facebook.com/leonti.aesthetic.facebook" target="_blank" rel="noopener noreferrer" className="social-media-icon facebook black" alt="facebook icon" aria-label="Visitar Facebook">
                    </a>

                    {/* Teléfono */}
                    <a href="tel:+4917620836261" className="social-media-icon phone black" alt="phone icon" aria-label="Llamar por teléfono">
                    </a>
                    {/* Puedes añadir más iconos aquí */}
                </div>
                <span className="address">Hochstädter Str.1a, 63477 Maintal</span>
                <span className="email-address">aesthetic@leonti.eu</span>
            </section>
            <section className="location-info-container white-section">
                <h4>{t("location.title", "Come Visit Us")}</h4>
                <h1>{t("location.subtitle", "We’re just a few clicks away")}</h1>
                <span className="address">{t("location.address", "Hochstädter Str.1a, 63477 Maintal")}</span>
                <Map />
            </section>
            <WhatsappButton />
            <Footer />
        </div>
    );
}

export default Contact;