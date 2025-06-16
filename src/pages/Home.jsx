import Menu from '../components/Menu';
import PricesTable from '../components/PricesTable';
import WhatsappButton from '../components/WhatsappButton';
import Footer from '../components/Footer';
import Service from '../components/Service';
import Gallery from '../components/Gallery';
import mainFoto from "../assets/principal-assets/main-foto.webp";
import mainFoto2 from "../assets/principal-assets/main-foto-2.webp";
import mainLogoWhite from "../assets/principal-assets/main-logo-white.svg";
import Loader from '../components/Loader';
import Map from "../components/Map";

import { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useImagePreloader } from '../hooks/useImagePreloader';

import { Link } from "react-router-dom";
import { NavLink } from 'react-router-dom';

const Home = () => {
    const { t } = useTranslation();

    const images = [];

    images.push(mainFoto);
    images.push(mainFoto2);

    const imagesLoaded = useImagePreloader(images);

    const titleRef = useRef(null);
    const greetingImgRef = useRef(null);
    const greetingTextRef = useRef(null);

    const [playTitle, setPlayTitle] = useState(false);
    const [playGreetingImg, setPlayGreetingImg] = useState(false);
    const [playGreetingText, setPlayGreetingText] = useState(false);

    useEffect(() => {
        document.title = "Leonti Aesthetic";
    }, []);

    useEffect(() => {
        if (imagesLoaded && titleRef.current) {
            requestAnimationFrame(() => setPlayTitle(true));
        }
    }, [imagesLoaded]);

    useEffect(() => {
        const targets = [greetingImgRef.current, greetingTextRef.current].filter(Boolean);
        if (targets.length === 0) return;

        const callback = (entries, observer) => {
            entries.forEach(entry => {
                const isVisible = entry.isIntersecting && entry.intersectionRatio >= 0.5;
                if (entry.target === greetingImgRef.current) {
                    setPlayGreetingImg(isVisible);
                }
                if (entry.target === greetingTextRef.current) {
                    setPlayGreetingText(isVisible);
                }
            });
        };

        const observer = new IntersectionObserver(callback, {
            root: null,
            rootMargin: '0px',
            threshold: 0.5
        });

        targets.forEach(el => observer.observe(el));

        return () => observer.disconnect();
    }, [imagesLoaded]);

    if (!imagesLoaded) return <Loader />;

    return (
        <div className='home'>
            <Menu />
            <section className="firstSection white-section">
                <section className="main-fotos-container dark-section">
                    <img className="mainLogo-top" src={mainLogoWhite} alt="Leonti Aesthetic"></img>
                    <Link className="contact-btn" to="contact">{t("buttons.contact", "Contact me")}</Link>
                    <img className="mainFoto" src={mainFoto2} alt={t("mainFoto2", "studio owner in the foreground")} />
                </section>
                <div className='mainTitle-container'>
                    <div className="welcome-text-container">
                        <h2>{t("welcome.h2", "Welcome to")}</h2>
                        <h1 ref={titleRef} className={playTitle ? 'running' : ''}>
                            <strong>Leonti Aesthetic</strong>
                            {t("welcome.title", ", where precision and well-being take center stage.")}</h1>
                    </div>
                    <div className="service-rating-desktop-container">
                        <div className="background-img-mask-desktop">
                            <div className="service-rating">
                                <h2>{t("service-rating.title", "Service Rating")}</h2>
                                <p>
                                    <span></span>
                                    {t("customers-rating", "(5/5) from 89 customers")}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <a
                    href="https://wa.me/17620836261"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="first-reservation-button"
                >
                    {t("first-reservation-button", "Schedule your appointment")}
                </a>
            </section>
            <section className="mainFoto-mobile-hero">
                <div className="mobile-hero-shadows">
                    <div className="barra-decorativa"></div>
                    <div className="barra-decorativa"></div>
                    <div className="background-img-mask">
                        <div className="sombra-circular"></div>
                        <div className="service-rating">
                            <h2>{t("service-rating.title", "Service Rating")}</h2>
                            <p>
                                <span></span>
                                {t("customers-rating", "(5/5) from 89 customers")}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="mainFoto-container-hero">
                    <img className="mainFoto-mobile-hero"
                        src={mainFoto}
                        alt={t("mainFoto", "studio owner in the foreground with her arms crossed")}
                    />
                </div>
            </section>
            <section className='services beige-section'>
                <section className='mainGreeting'>
                    <div className="greetingImg-container">
                        <img className={`mainFoto-greeting ${playGreetingImg ? 'running' : ''}`}
                            src={mainFoto}
                            alt={t("mainFoto", "studio owner in the foreground with her arms crossed")}
                            ref={greetingImgRef} />
                    </div>
                    <div className={`greeting ${playGreetingText ? 'running' : ''}`}
                        ref={greetingTextRef}>
                        <h1>
                            <strong>{t("greeting.title", "Crafting Confidence")}</strong>
                        </h1>
                        <br />
                        <h4>
                            {t("greeting.subtitle", "Welcome to Leonti Aesthetic - your place for natural beauty and stylish care.")}
                        </h4>
                        <br />
                        <p>
                            {t("greeting.paragraph1", "In ruhiger, stilvoller Atmosphäre nehme ich mir Zeit, um Ihre Wünsche und Bedürfnisse genau zu erfassen und Ihnen individuelle Behandlungen auf höchstem Niveau zu bieten. Ob Gesichtsbehandlungen, Wimpernverlängerung oder Lash- und Brow-Lifting – jede Anwendung erfolgt mit großer Sorgfalt, Feingefühl sowie unter Einhaltung strengster Hygiene- und Qualitätsstandards.")}
                        </p>
                        <br />
                        <p>
                            {t("greeting.paragraph2", "Gönnen Sie sich eine erholsame Auszeit vom Alltag und lassen Sie sich von sichtbaren Ergebnissen und einem frischen, gepflegten Erscheinungsbild überzeugen. Ich freue mich sehr darauf, Sie persönlich kennenzulernen und Ihnen bei Leonti Aesthetic ein angenehmes Wohlfühlerlebnis zu ermöglichen.")}
                        </p>
                        <br />
                        <p className='final-name'><strong>Ecaterina <span>Leonti</span></strong></p>
                        <p className='final-certification'><em>{t("greeting.certification", "Certified Specialist Cosmetologist")}</em></p>
                    </div>
                </section>
                <section className="cristal-container">
                    <h2 className='services-title'>{t("services.title", "OUR SERVICES")}</h2>
                    <section className="services-mini-cards">
                        <div className="mini-cards-group 1">
                            <Service path="/services#pure-glow" name={t("services.pureGlow.name", "Classic Facial Treatments")}
                                description={t("services.pureGlow.description", "Facial cleaning treatments")} />
                            <Service path="/services#aquafacial" name={t("services.aquafacial.name", "Aquafacial")}
                                description={t("services.aquafacial.description", "For Clear and Radiant Skin")} />
                            <Service path="/services#microneedling" name={t("services.microneedling.name", "Microneedling")}
                                description={t("services.microneedling.description", "Naturally beautiful skin through targeted deep care")} />
                        </div>
                        <div className="mini-cards-group 2">
                            <Service path="/services#eyelash-extensions" name={t("services.eyelashExtensions.name", "Eyelash extensions")}
                                description={t("services.eyelashExtensions.description", "Your look, your expression")} />
                            <Service path="/services#eyelash-lifting" name={t("services.eyelashLifting.name", "Eyelash lifting")}
                                description={t("services.eyelashLifting.description", "Natural curl, without extensions")} />
                            <Service path="/services#eyebrow-lifting" name={t("services.eyebrowLifting.name", "Eyebrow lifting")}
                                description={t("services.eyebrowLifting.description", "Volume & shape that last")} />
                        </div>
                    </section>
                </section>
                <NavLink className="see-more-btn" to="/services">{t("buttons.see", "See more")}</NavLink>
            </section>
            <section className="prices-gradient-container">
                <section id="prices" className="prices-container">
                    <h3>
                        {t("prices.title", "Looking for our latest rates?")}
                    </h3>
                    <p>
                        {t("prices.description", "Download our full pricing to explore all services and packages in detail")}
                    </p>
                    <a className='price-list' download href={`${import.meta.env.BASE_URL}assets/imgs/preis-liste.png`}>
                        {t("prices.button", "Price List - Download")}
                        <div className="download-icon-container"></div>
                    </a>
                </section>
                <PricesTable />
            </section>
            <Gallery />
            <div className="btn-bottom-container">
                {/* <NavLink className="see-more-btn" to="/">{t("buttons.see", "See more")}</NavLink> */}
                <NavLink className="contact-btn" to="/contact">{t("buttons.contact", "Contact me")}</NavLink>
            </div>
            <section id="cnc-shop" className="cnc-shop-section beige-section beige-section">
                <img src={`${import.meta.env.BASE_URL}assets/icons/right-top.svg`} alt="mano decorativa con producto" className="hand orange" />
                <img src={`${import.meta.env.BASE_URL}assets/icons/left-top.svg`} alt="mano decorativa con producto" className="hand white" />
                <img src={`${import.meta.env.BASE_URL}assets/icons/left-bottom.svg`} alt="mano decorativa con producto" className="hand transparent" />
                <img src={`${import.meta.env.BASE_URL}assets/icons/right-bottom.svg`} alt="mano decorativa con producto" className="hand rounded" />
                <div className="cnc-card">
                    <h2>{t("cncShop.title", "CNC DIRECT SHOP")}</h2>
                    <img className="cnc-shop-logo"
                        src={`${import.meta.env.BASE_URL}assets/icons/cnc-shop.svg`}
                        alt="cnc-shop logo"
                    />
                    <div className="divider"></div>
                    <p>
                        {t("cncShop.description", "An exclusive selection of professional cosmetic products from the CNC brand — developed for all skin types and every skin need.")}
                    </p>
                    <div className="blue-info">
                        <div className="notch"></div>
                        <p>
                            {t("cncShop.blueInfo", "Whether it’s anti-ageing, blemished skin, couperose, pigmentation, dryness or sensitivity — find targeted skincare solutions tailored to you.")}
                        </p>
                    </div>
                </div>
                <Link to="https://shop.cnc-cosmetic.de/" className="cnc-shop">
                    {t("cncShop.button", "Go to Store Now")}
                    <div className="arrow-right"></div>
                </Link>
                <h1 className="access-code">{t("cncShop.accessCode", "Access Code: 1180011")}</h1>
            </section>
            <section className="location-info-container white-section">
                <h4>{t("location.title", "Come Visit Us")}</h4>
                <h1>{t("location.subtitle", "We’re just a few clicks away")}</h1>
                <span className="address">{t("location.address", "Hochstädter Str.1a, 63477 Maintal")}</span>
                <Map />
                <NavLink className="contact-btn" to="/contact">{t("buttons.contact", "Contact me")}</NavLink>
            </section>
            <section className="beige-section help-section">
                <h4>{t("help.title", "Get in touch")}</h4>
                <h1>{t("help.subtitle", "We’re here to help")}</h1>
                <p>{t("help.description", "Give us call or send us a message and one of our friendly team members will be in touch shortly.")}</p>
            </section>
            <WhatsappButton />
            <Footer />
        </div>
    );
}

export default Home;