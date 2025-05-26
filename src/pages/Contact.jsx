import Menu from "../components/Menu";
import WhatsappButton from "../components/WhatsappButton";
import Map from "../components/Map";
import Footer from "../components/Footer";

import { Link } from "react-router-dom";
import { useEffect } from "react";



const Contact = () => {
    useEffect(() => {
        document.title = "Leonti Aesthetics | Contact Us";
        window.scrollTo(0, 0);
    }
    , []);

    return (
        <div className="contact-page">
            <Menu />
            <section className="help-section contact-page">
                <h4>Get in touch</h4>
                <h1>We’re here to help</h1>
                <p>Give us call or send us a message and one of our friendly team members will be in touch shortly.</p>
            </section>
            <section className="icons-container black">
                <div className="icons-container black">
                    <span className="social-media-icon email black"></span>
                    <span className="social-media-icon instagram black"></span>
                    <span className="social-media-icon facebook black"></span>
                    <span className="social-media-icon phone black"></span>
                </div>
                <span className="address">Hochstädter Str.1a, 63477 Maintal</span>
                <span className="email-address">aesthetic@leonti.eu</span>
            </section>
            <section className="location-info-container">
                <h4 >Come Visit Us</h4>
                <h1>We’re just a few clicks away</h1>
                <span className="address">Hochstädter Str.1a, 63477 Maintal</span>
                <Map />
            </section>
            <WhatsappButton />
            <Footer />
        </div>
    );
}

export default Contact;