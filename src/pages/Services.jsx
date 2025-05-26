import Menu from '../components/Menu';
import WhatsappButton from '../components/WhatsappButton';
import Footer from '../components/Footer';
import mainLogoWhite from "../assets/principal-assets/main-logo-white.svg";
import mainLogo from "../assets/principal-assets/main-logo.svg";
import Loader from '../components/Loader';
import Map from "../components/Map";

import { Link, NavLink } from "react-router-dom";
import { useImagePreloader } from '../hooks/useImagePreloader';

const Services = () => {
    const images = [];

    images.push(`${import.meta.env.BASE_URL}assets/imgs/main-bg-img.webp`);
    images.push(`${import.meta.env.BASE_URL}assets/imgs/pure-glow.webp`);
    images.push(`${import.meta.env.BASE_URL}assets/imgs/rosa-gloves.webp`);
    images.push(`${import.meta.env.BASE_URL}assets/imgs/eyelash-extensions.webp`);
    images.push(`${import.meta.env.BASE_URL}assets/imgs/eyelash-lifting.webp`);
    images.push(`${import.meta.env.BASE_URL}assets/imgs/eyebrow-lifting.webp`);

    const imagesLoaded = useImagePreloader(images);

    if (!imagesLoaded) return <Loader />;

    return (
        <div className='services-page'>
            <Menu />
            <section className="topMenu dark-section">
                <NavLink to="/" className='mainLogo-top'>
                    <img src={mainLogoWhite} alt="Leonti Aesthetic Logo" />
                </NavLink>
                <NavLink className="contact-btn" to="/contact">Contact me</NavLink>
            </section>
            <div className='principal-img-container'>
                <img className="principal-img" src={`${import.meta.env.BASE_URL}assets/imgs/main-bg-img.webp`} alt="primer plano decorativo de zona de los ojos de una mujer" />
            </div>
            <section className="mainDescription">
                <h4>Leonti Aesthetic</h4>
                <h1>Our Services</h1>
                <p>
                    At Leonti Aesthetic, we offer personalized beauty treatments focused on enhancing your natural glow. Using high-quality products and state-of-the-art techniques, every service is tailored to your skin and style needs.
                </p>
                <div className="decorationText">Discover what we can do for you:</div>
            </section>
            <section className="service-cards-section">
                <div id="pure-glow" className="service-card pure-glow">
                    <img src={`${import.meta.env.BASE_URL}assets/imgs/pure-glow.webp`} alt="pure-glow service image" className="pure-glow-img" />
                    <div className="rosa-subtitle">Pure Glow</div>
                    <h2>Pure Glow</h2>
                    <p>
                        A gentle yet effective treatment that deeply cleanses the skin. Using high-quality CNC products, enzymatic peeling, a skin scrubber, and a soothing mask, your skin will be refreshed and soothed. Includes a relaxing facial massage upon request.
                    </p>
                    <p>
                        <strong>Result: A clear, radiant, and healthy-looking</strong><br />complexion.
                    </p>
                    <NavLink className="contact-btn" to="/contact">Contact me</NavLink>
                </div>
                <div id="microneedling" className="service-card microneedling">
                    <img src={`${import.meta.env.BASE_URL}assets/imgs/rosa-gloves.webp`} alt="microneedling service image" className="microneedling-img" />
                    <div className="rosa-subtitle">Naturally beautiful skin through targeted deep care</div>
                    <h2>Microneedling</h2>
                    <p>
                        Microneedling stimulates your skin’s natural regeneration using ultra-fine needles or nanotips that activate collagen, elastin, and hyaluronic acid production. Ideal for:
                    </p>
                    <div className="divider"></div>
                    <ul>
                        <li>• Dull or tired skin</li>
                        <li>• Enlarged pores</li>
                        <li>• Wrinkles</li>
                        <li>• Acne scars</li>
                        <li>• Early signs of aging</li>
                    </ul>
                    <div className="divider"></div>
                    <h4>Our three treatment options:</h4>
                    <p>
                        At Leonti Aesthetic, we offer three levels of Microneedling, tailored to your skin’s needs:
                    </p>
                    <div className="subservice">
                        <h3>Nanoneedling</h3>
                        <p>Gentle & superficial — perfect for a natural glow.</p>
                    </div>
                    <div className="subservice">
                        <h3>MicroNeedling</h3>
                        <p>Classic & effective — targets pores, wrinkles, and scars.</p>
                    </div>
                    <div className="subservice">
                        <h3>MicroNeedling Pro</h3>
                        <p>Intensive & deeply active — for powerful anti-aging and skin renewal.</p>
                    </div>
                    <NavLink className="contact-btn" to="/contact">Contact me</NavLink>
                </div>
                <div id="eyelash-extensions" className="service-card eyelashextensions">
                    <img src={`${import.meta.env.BASE_URL}assets/imgs/eyelash-extensions.webp`} alt="eyelash extensions service image" className="eyelashextensions-img" />
                    <div className="rosa-subtitle">Your look, your expression</div>
                    <h2>Eyelash Extensions</h2>
                    <p>
                        Enhance your natural beauty with lash styles ranging from subtle to bold — no mascara needed. We use top-quality materials and precision techniques to deliver the look that suits you best:
                    </p>
                    <div className="subservice-2">
                        <span>Classic (1:1)</span>
                        <p>
                            Elegant and natural for everyday wear
                        </p>
                    </div>
                    <div className="subservice-2">
                        <span>Soft Volume (3-4D)</span>
                        <p>
                            Fuller lashes with a soft, fluffy finish
                        </p>
                    </div>
                    <div className="subservice-2">
                        <span>Volume (5-7D)</span>
                        <p>
                            Fuller lashes with a soft, fluffy finish
                        </p>
                    </div>
                    <h4>Choose your style We’ll take care of the rest</h4>
                    <NavLink className="contact-btn" to="/contact">Contact me</NavLink>
                </div>
                <div id="eyelash-lifting" className="service-card eyelash-lifting">
                    <img src={`${import.meta.env.BASE_URL}assets/imgs/eyelash-lifting.webp`} alt="eyelash lifting service image" className="eyelash-lifting-img" />
                    <div className="rosa-subtitle">Natural curl, no extensions</div>
                    <h2>Eyelash Lifting</h2>
                    <p>
                        Get fuller, more defined brows without the daily effort. Your eyebrows are shaped, strengthened, and fixed for a clean, even look that stays in place.
                        <strong>Result: A natural curl that lasts up to 6 weeks.</strong>
                    </p>
                    <NavLink className="contact-btn">Contact me</NavLink>
                </div>
                <div id="eyebrow-lifting" className="service-card eyebrow-lifting">
                    <img src={`${import.meta.env.BASE_URL}assets/imgs/eyebrow-lifting.webp`} alt="eyebrow lifting service image" className="eyebrow-lifting-img" />
                    <div className="rosa-subtitle">Lasting Volume & Shape</div>
                    <h2>Eyebrow Lifting</h2>
                    <p>
                        Enhance your natural beauty with lash styles ranging from subtle to bold — no mascara needed. We use top-quality materials and precision techniques to deliver the look that suits you best:
                    </p>
                    <NavLink className="contact-btn" to="/contact">Contact me</NavLink>
                </div>
                <NavLink to="/" className='mainLogo-bottom'>
                    <img src={mainLogo} alt="Leonti Aesthetic Logo" />
                </NavLink>
            </section>
            <section className="location-info-container">
                <h4 >Come Visit Us</h4>
                <h1>We’re just a few clicks away</h1>
                <span className="address">Hochstädter Str.1a, 63477 Maintal</span>
                <Map />
                <NavLink className="contact-btn" to="/contact">Contact me</NavLink>
            </section>
            <WhatsappButton />
            <Footer />
        </div>
    );
}

export default Services;