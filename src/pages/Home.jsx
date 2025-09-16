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
import { Helmet } from 'react-helmet-async';
import { Link, NavLink } from "react-router-dom";

const Home = () => {
    const { t } = useTranslation("homepage");

    const images = [mainFoto, mainFoto2];
    const imagesLoaded = useImagePreloader(images);

    const greetingImgRef = useRef(null);
    const greetingTextRef = useRef(null);
    const mainHomeContainerRef = useRef(null);

    const [playOverlay, setPlayOverlay] = useState(false);
    const [playGreetingImg, setPlayGreetingImg] = useState(false);
    const [playGreetingText, setPlayGreetingText] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        if (imagesLoaded && mainHomeContainerRef.current) {
            requestAnimationFrame(() => setPlayOverlay(true));
        }
    }, [imagesLoaded]);

    useEffect(() => {
        if(playOverlay) {
            if(mainHomeContainerRef.current) mainHomeContainerRef.current.classList.add("running");
            else mainHomeContainerRef.current.classList.remove("running");
        }
    }, [playOverlay]);

    useEffect(() => {
        const targets = [greetingImgRef.current, greetingTextRef.current].filter(Boolean);
        if (!targets.length) return;

        const callback = (entries) => {
            entries.forEach(entry => {
                const isVisible = entry.isIntersecting && entry.intersectionRatio >= 0.5;
                if (entry.target === greetingImgRef.current) setPlayGreetingImg(isVisible);
                if (entry.target === greetingTextRef.current) setPlayGreetingText(isVisible);
            });
        };

        const observer = new IntersectionObserver(callback, { threshold: 0.5 });
        targets.forEach(el => observer.observe(el));
        return () => observer.disconnect();
    }, [imagesLoaded]);

    if (!imagesLoaded) return <Loader />;

    return (
        <>
            <Helmet>
                <title>{t('homePage.title')}</title>
                <link rel="canonical" href={`${import.meta.env.VITE_BASE_URL}`} />
            </Helmet>
            <div className='home' ref={mainHomeContainerRef}>
                <Menu />

                <section className="firstSection white-section">
                    <section className="main-fotos-container dark-section">
                        <img className="mainLogo-top" src={mainLogoWhite} alt="Leonti Aesthetic" />
                        <Link className="contact-btn" to="contact">{t("buttons.contact")}</Link>
                        <img
                            className="mainFoto"
                            src={mainFoto2}
                            alt={t("mainPhotos.owner")}
                        />
                    </section>

                    <div className='mainTitle-container'>
                        <div className="welcome-text-container">
                            <h2>{t("welcome.h2")}</h2>
                            <h1>
                                <strong>Leonti Aesthetic</strong><br />{t("welcome.title")}
                            </h1>
                        </div>

                        <div className="service-rating-desktop-container">
                            <div className="background-img-mask-desktop">
                                {/* <div className="service-rating">
                                    <h2>{t("ratings.serviceTitle")}</h2>
                                    <p>
                                        <span></span>
                                        {t("ratings.customers")}
                                    </p>
                                </div> */}
                            </div>
                        </div>
                    </div>

                    <a
                        href="https://wa.me/17620836261"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="first-reservation-button"
                    >
                        {t("buttons.firstReservation")}
                    </a>
                </section>

                <section className="mainFoto-mobile-hero">
                    <div className="mobile-hero-shadows">
                        <div className="barra-decorativa"></div>
                        <div className="barra-decorativa"></div>
                        <div className="background-img-mask">
                            <div className="sombra-circular"></div>
                            {/* <div className="service-rating">
                                <h2>{t("ratings.serviceTitle")}</h2>
                                <p>
                                    <span></span>
                                    {t("ratings.customers")}
                                </p>
                            </div> */}
                        </div>
                    </div>
                </section>

                <section className='services beige-section'>
                    <section className='mainGreeting'>
                        <div className="greetingImg-container">
                            <img
                                ref={greetingImgRef}
                                className={`mainFoto-greeting ${playGreetingImg ? 'running' : ''}`}
                                src={mainFoto}
                                alt={t("mainPhotos.ownerArms")}
                            />
                        </div>

                        <div ref={greetingTextRef} className={`greeting ${playGreetingText ? 'running' : ''}`}>
                            <h1><strong>{t("greeting.title")}</strong></h1>
                            <br />
                            <p>{t("greeting.paragraphs.0")}</p>
                            <br />
                            <p>{t("greeting.paragraphs.1")}</p>
                            <br />
                            <p className='final-name'><strong>Ecaterina Leonti</strong></p>
                            <p className='final-certification'><em>{t("greeting.certification")}</em></p>
                        </div>
                    </section>

                    <section className="cristal-container">
                        <h2 className='services-title'>{t("servicesOverview.title")}</h2>
                        <section className="services-mini-cards">
                            <div className="mini-cards-group 1">
                                <Service
                                    path="/services#pure-glow"
                                    name={t("servicesOverview.items.pureGlow.name")}
                                    description={t("servicesOverview.items.pureGlow.description")}
                                />
                                <Service
                                    path="/services#aquafacial"
                                    name={t("servicesOverview.items.aquafacial.name")}
                                    description={t("servicesOverview.items.aquafacial.description")}
                                />
                                <Service
                                    path="/services#microneedling"
                                    name={t("servicesOverview.items.microneedling.name")}
                                    description={t("servicesOverview.items.microneedling.description")}
                                />
                            </div>
                            <div className="mini-cards-group 2">
                                <Service
                                    path="/services#eyelash-extensions"
                                    name={t("servicesOverview.items.eyelashExtensions.name")}
                                    description={t("servicesOverview.items.eyelashExtensions.description")}
                                />
                                <Service
                                    path="/services#eyelash-lifting"
                                    name={t("servicesOverview.items.eyelashLifting.name")}
                                    description={t("servicesOverview.items.eyelashLifting.description")}
                                />
                                <Service
                                    path="/services#eyebrow-lifting"
                                    name={t("servicesOverview.items.eyebrowLifting.name")}
                                    description={t("servicesOverview.items.eyebrowLifting.description")}
                                />
                            </div>
                        </section>
                    </section>

                    <NavLink className="see-more-btn" to="/services">{t("buttons.seeMore")}</NavLink>
                </section>

                <section className="prices-gradient-container">
                    <section id="prices" className="prices-container">
                        <h3>{t("prices.title")}</h3>
                        <p>{t("prices.description")}</p>
                        <a
                            className='price-list'
                            download
                            href={`${import.meta.env.BASE_URL}assets/imgs/preisliste-sept-2025.webp`}
                        >
                            {t("prices.button")}
                            <div className="download-icon-container"></div>
                        </a>
                    </section>
                    <PricesTable />
                </section>

                <Gallery />

                <div className="btn-bottom-container">
                    <NavLink className="contact-btn" to="/contact">{t("buttons.contact")}</NavLink>
                </div>

                <section id="cnc-shop" className="cnc-shop-section beige-section">
                    <img
                        src={`${import.meta.env.BASE_URL}assets/icons/right-top.svg`}
                        alt={t("decorative-imgs.hand")}
                        className="hand orange"
                    />
                    <img
                        src={`${import.meta.env.BASE_URL}assets/icons/left-top.svg`}
                        alt={t("decorative-imgs.hand")}
                        className="hand white"
                    />
                    <img
                        src={`${import.meta.env.BASE_URL}assets/icons/left-bottom.svg`}
                        alt={t("decorative-imgs.hand")}
                        className="hand transparent"
                    />
                    <img
                        src={`${import.meta.env.BASE_URL}assets/icons/right-bottom.svg`}
                        alt={t("decorative-imgs.hand")}
                        className="hand rounded"
                    />
                    <div className="cnc-card">
                        <h2>{t("cncShop.title")}</h2>
                        <div className="divider"></div>
                        <p>{t("cncShop.description")}</p>
                        <div className="blue-info">
                            <div className="notch"></div>
                            <p>{t("cncShop.blueInfo")}</p>
                        </div>
                    </div>
                    <Link to="https://cnc-direct.de/" className="cnc-shop">
                        {t("cncShop.button")}
                        <div className="arrow-right"></div>
                    </Link>
                    <h1 className="access-code">{t("cncShop.accessCode")}</h1>
                </section>

                <section className="location-info-container white-section">
                    <h4>{t("location.title")}</h4>
                    <h1>{t("location.subtitle")}</h1>
                    <span className="address">{t("location.address")}</span>
                    <Map />
                    <NavLink className="contact-btn" to="/contact">{t("buttons.contact")}</NavLink>
                </section>

                <section className="beige-section help-section">
                    <h4>{t("help.title")}</h4>
                    <h1>{t("help.subtitle")}</h1>
                    <p>{t("help.description")}</p>
                </section>

                <WhatsappButton />
                <Footer />
            </div>
        </>
    );
};

export default Home;
