// src/pages/Contact.jsx
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
        document.title = "Leonti Aesthetic | Contact";
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="contact-page">
            <Menu />

            <section className="dark-section contact-page">
                <NavLink to="/" className="mainLogo-top">
                    <img src={mainLogoWhite} alt="Leonti Aesthetic Logo" />
                </NavLink>
            </section>

            <section className="help-section contact-page">
                <h4>{t("help.title")}</h4>
                <h1>{t("help.subtitle")}</h1>
                <p>{t("help.description")}</p>
            </section>

            <section className="icons-container black beige-section">
                <div className="icons-container black">
                    <a href="mailto:ecaterina.leonti06@gmail.com" className="social-media-icon email black" aria-label="email" />
                    <a href="https://www.instagram.com/leonti.aesthetic/" target="_blank" rel="noopener noreferrer" className="social-media-icon instagram black" aria-label="instagram" />
                    <a href="https://www.facebook.com/leonti.aesthetic.facebook" target="_blank" rel="noopener noreferrer" className="social-media-icon facebook black" aria-label="facebook" />
                    <a href="tel:+4917620836261" className="social-media-icon phone black" aria-label="phone" />
                </div>
                <span className="address">{t("location.address")}</span>
                <span className="email-address">aesthetic@leonti.eu</span>
            </section>

            <section className="location-info-container white-section">
                <h4>{t("location.title")}</h4>
                <h1>{t("location.subtitle")}</h1>
                <span className="address">{t("location.address")}</span>
                <Map />
            </section>

            <WhatsappButton />
            <Footer />
        </div>
    );
};

export default Contact;
