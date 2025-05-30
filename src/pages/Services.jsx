import Menu from '../components/Menu';
import WhatsappButton from '../components/WhatsappButton';
import Footer from '../components/Footer';
import mainLogoWhite from "../assets/principal-assets/main-logo-white.svg";
import mainLogo from "../assets/principal-assets/main-logo.svg";
import Loader from '../components/Loader';
import Map from "../components/Map";

import { useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import { useImagePreloader } from '../hooks/useImagePreloader';

const Services = () => {
    const { t } = useTranslation();

    const images = [];

    images.push(`${import.meta.env.BASE_URL}assets/imgs/main-bg-img.webp`);
    images.push(`${import.meta.env.BASE_URL}assets/imgs/pure-glow.webp`);
    images.push(`${import.meta.env.BASE_URL}assets/imgs/rosa-gloves.webp`);
    images.push(`${import.meta.env.BASE_URL}assets/imgs/eyelash-extensions.webp`);
    images.push(`${import.meta.env.BASE_URL}assets/imgs/eyelash-lifting.webp`);
    images.push(`${import.meta.env.BASE_URL}assets/imgs/eyebrow-lifting.webp`);

    const imagesLoaded = useImagePreloader(images);

    useEffect(() => {
        document.title = "Leonti Aesthetics | Services";
        window.scrollTo(0, 0);
    }
        , []);

    if (!imagesLoaded) return <Loader />;

    return (
        <div className='services-page'>
            <Menu />
            <section className="topMenu dark-section">
                <NavLink to="/" className='mainLogo-top'>
                    <img src={mainLogoWhite} alt="Leonti Aesthetic Logo" />
                </NavLink>
                <NavLink className="contact-btn" to="/contact">{t("buttons.contact", "Contact me")}</NavLink>
            </section>
            <div className='principal-img-container'>
                <img className="principal-img" src={`${import.meta.env.BASE_URL}assets/imgs/main-bg-img.webp`} alt={t("mainServicesPage.principalImg.alt", "decorative close-up of a woman's eye area")} />
            </div>
            <section className="mainDescription">
                <h4>{t("mainServicesPage.title", "Leonti Aesthetic")}</h4>
                <h1>{t("mainServicesPage.subtitle", "Our Services")}</h1>
                <p>
                    {t("mainServicesPage.description", "At Leonti Aesthetic, we offer personalized beauty treatments focused on enhancing your natural glow. Using high-quality products and state-of-the-art techniques, every service is tailored to your skin and style needs.")}
                </p>
                <div className="decorationText">{t("mainServicesPage.discover", "Discover what we can do for you:")}</div>
            </section>
            <section className="service-cards-section">
                <div id="pure-glow" className="service-card pure-glow">
                    <img src={`${import.meta.env.BASE_URL}assets/imgs/pure-glow.webp`} alt={t("mainServicesPage.pureGlow.alt", "pure-glow service image")} className="pure-glow-img" />
                    <div className="rosa-subtitle">{t("mainServicesPage.pureGlow.name.rosa", "Pure Glow")}</div>
                    <h2>{t("mainServicesPage.pureGlow.name", "Pure Glow")}</h2>
                    <p>
                        {t("mainServicesPage.pureGlow.description", "A gentle yet effective treatment that deeply cleanses the skin. Using high-quality CNC products, enzymatic peeling, a skin scrubber, and a soothing mask, your skin will be refreshed and soothed. Includes a relaxing facial massage upon request.")}
                    </p>
                    <p>
                        <strong>{t("mainServicesPage.pureGlow.result", "Result: A clear, radiant, and healthy-looking")} </strong><br />{t("mainServicesPage.pureGlow.resultDescription", "complexion.")}
                    </p>
                    <NavLink className="contact-btn" to="/contact">{t("buttons.contact", "Contact me")}</NavLink>
                </div>
                <div id="microneedling" className="service-card microneedling">
                    <img src={`${import.meta.env.BASE_URL}assets/imgs/rosa-gloves.webp`} alt={t("mainServicesPage.microneedling.alt", "microneedling service image")} className="microneedling-img" />
                    <div className="rosa-subtitle">{t("mainServicesPage.microneedling.name.rosa", "Naturally beautiful skin through targeted deep care")}</div>
                    <h2>{t("mainServicesPage.microneedling.name", "Microneedling")}</h2>
                    <p>
                        {t("mainServicesPage.microneedling.description", "Microneedling stimulates your skin’s natural regeneration using ultra-fine needles or nanotips that activate collagen, elastin, and hyaluronic acid production. Ideal for:")}
                    </p>
                    <div className="divider"></div>
                    <ul>
                        <li>• {t("mainServicesPage.microneedling.list.1", "Dull or tired skin")}</li>
                        <li>• {t("mainServicesPage.microneedling.list.2", "Enlarged pores")}</li>
                        <li>• {t("mainServicesPage.microneedling.list.3", "Wrinkles")}</li>
                        <li>• {t("mainServicesPage.microneedling.list.4", "Acne scars")}</li>
                        <li>• {t("mainServicesPage.microneedling.list.5", "Early signs of aging")}</li>
                    </ul>
                    <div className="divider"></div>
                    <h4>{t("mainServicesPage.microneedling.treatmentOptions", "Our three treatment options:")}</h4>
                    <p>
                        {t("mainServicesPage.microneedling.treatmentOptions.description", "At Leonti Aesthetic, we offer three levels of Microneedling, tailored to your skin’s needs:")}
                    </p>
                    <div className="subservice">
                        <h3>{t("mainServicesPage.microneedling.treatmentOptions.nanoneedling", "Nanoneedling")}</h3>
                        <p>{t("mainServicesPage.microneedling.treatmentOptions.nanoneedling.description", "Gentle & superficial — perfect for a natural glow.")}</p>
                    </div>
                    <div className="subservice">
                        <h3>{t("mainServicesPage.microneedling.treatmentOptions.microneedling", "MicroNeedling")}</h3>
                        <p>{t("mainServicesPage.microneedling.treatmentOptions.microneedling.description", "Classic & effective — targets pores, wrinkles, and scars.")}</p>
                    </div>
                    <div className="subservice">
                        <h3>{t("mainServicesPage.microneedling.treatmentOptions.microneedlingPro", "MicroNeedling Pro")}</h3>
                        <p>{t("mainServicesPage.microneedling.treatmentOptions.microneedlingPro.description", "Intensive & deeply active — for powerful anti-aging and skin renewal.")}</p>
                    </div>
                    <NavLink className="contact-btn" to="/contact">{t("buttons.contact", "Contact me")}</NavLink>
                </div>
                <div id="eyelash-extensions" className="service-card eyelashextensions">
                    <img src={`${import.meta.env.BASE_URL}assets/imgs/eyelash-extensions.webp`} alt={t("mainServicesPage.eyelashExtensions.alt", "eyelash extensions service image")} className="eyelashextensions-img" />
                    <div className="rosa-subtitle">{t("mainServicesPage.eyelashExtensions.name.rosa", "Your look, your expression")}</div>
                    <h2>{t("mainServicesPage.eyelashExtensions.name", "Eyelash Extensions")}</h2>
                    <p>
                        {t("mainServicesPage.eyelashExtensions.description", "Enhance your natural beauty with lash styles ranging from subtle to bold — no mascara needed. We use top-quality materials and precision techniques to deliver the look that suits you best:")}
                    </p>
                    <div className="subservice-2">
                        <span>{t("mainServicesPage.eyelashExtensions.treatmentOptions.classic", "Classic (1:1)")}</span>
                        <p>
                            {t("mainServicesPage.eyelashExtensions.treatmentOptions.classic.description", "Elegant and natural for everyday wear")}
                        </p>
                    </div>
                    <div className="subservice-2">
                        <span>{t("mainServicesPage.eyelashExtensions.treatmentOptions.softVolume", "Soft Volume (3-4D)")}</span>
                        <p>
                            {t("mainServicesPage.eyelashExtensions.treatmentOptions.softVolume.description", "Fuller lashes with a soft, fluffy finish")}
                        </p>
                    </div>
                    <div className="subservice-2">
                        <span>{t("mainServicesPage.eyelashExtensions.treatmentOptions.volume", "Volume (5-7D)")}</span>
                        <p>
                            {t("mainServicesPage.eyelashExtensions.treatmentOptions.volume.description", "Dramatic volume for a bold look")}
                        </p>
                    </div>
                    <h4>{t("mainServicesPage.eyelashExtensions.chooseStyle", "Choose your style We’ll take care of the rest")}</h4>
                    <NavLink className="contact-btn" to="/contact">{t("buttons.contact", "Contact me")}</NavLink>
                </div>
                <div id="eyelash-lifting" className="service-card eyelash-lifting">
                    <img src={`${import.meta.env.BASE_URL}assets/imgs/eyelash-lifting.webp`} alt={t("mainServicesPage.eyelashLifting.alt", "eyelash lifting service image")} className="eyelash-lifting-img" />
                    <div className="rosa-subtitle">{t("mainServicesPage.eyelashLifting.name.rosa", "Natural curl, no extensions")}</div>
                    <h2>{t("mainServicesPage.eyelashLifting.name", "Eyelash Lifting")}</h2>
                    <p>
                        {t("mainServicesPage.eyelashLifting.description", "Get fuller, more defined brows without the daily effort. Your eyebrows are shaped, strengthened, and fixed for a clean, even look that stays in place.")}
                        <strong>{t("mainServicesPage.eyelashLifting.result", "Result: A natural curl that lasts up to 6 weeks.")}</strong>
                    </p>
                    <NavLink className="contact-btn" to="/contact">{t("buttons.contact", "Contact me")}</NavLink>
                </div>
                <div id="eyebrow-lifting" className="service-card eyebrow-lifting">
                    <img src={`${import.meta.env.BASE_URL}assets/imgs/eyebrow-lifting.webp`} alt={t("mainServicesPage.eyebrowLifting.alt", "eyebrow lifting service image")} className="eyebrow-lifting-img" />
                    <div className="rosa-subtitle">{t("mainServicesPage.eyebrowLifting.name.rosa", "Lasting Volume & Shape")}</div>
                    <h2>{t("mainServicesPage.eyebrowLifting.name", "Eyebrow Lifting")}</h2>
                    <p>
                        {t("mainServicesPage.eyebrowLifting.description", "Enhance your natural beauty with lash styles ranging from subtle to bold — no mascara needed. We use top-quality materials and precision techniques to deliver the look that suits you best:")}
                    </p>
                    <NavLink className="contact-btn" to="/contact">{t("buttons.contact", "Contact me")}</NavLink>
                </div>
                <NavLink to="/" className='mainLogo-bottom'>
                    <img src={mainLogo} alt="Leonti Aesthetic Logo" />
                </NavLink>
            </section>
            <section className="location-info-container">
                <h4>{t("location.title", "Come Visit Us")}</h4>
                <h1>{t("location.subtitle", "We’re just a few clicks away")}</h1>
                <span className="address">{t("location.address", "Hochstädter Str.1a, 63477 Maintal")}</span>
                <Map />
                <NavLink className="contact-btn" to="/contact">{t("buttons.contact", "Contact me")}</NavLink>
            </section>
            <WhatsappButton />
            <Footer />
        </div>
    );
}

export default Services;