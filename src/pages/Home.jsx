import Menu from '../components/Menu';
import PricesTable from '../components/PricesTable';
import WhatsappButton from '../components/WhatsappButton';
import Footer from '../components/Footer';
import Service from '../components/Service';
import Gallery from '../components/Gallery';
import mainFoto from "../assets/principal-assets/main-foto.webp";
import mainFoto2 from "../assets/principal-assets/main-foto-2.webp";
import mainLogoWhite from "../assets/principal-assets/main-logo-white.svg";

import { useState, useRef, useEffect } from 'react';

import { Link } from "react-router-dom";

const Home = ({ imagesLoaded }) => {
    const titleRef = useRef(null);
    const greetingImgRef = useRef(null);
    const greetingTextRef = useRef(null);

    const [playTitle, setPlayTitle] = useState(false);
    const [playGreetingImg, setPlayGreetingImg] = useState(false);
    const [playGreetingText, setPlayGreetingText] = useState(false);

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
    }, []);

    return (
        <div className='home'>
            <Menu />
            <section className="firstSection">
                <section className="main-fotos-container dark-section">
                    <img className="mainLogo-top" src={mainLogoWhite} alt="Leonti Aesthetic"></img>
                    <Link className="contact-btn" to="contact">Contact me</Link>
                    <img className="mainFoto" src={mainFoto2} alt="dueña del local en primer plano" />
                </section>
                <div className='mainTitle-container'>
                    <h1 ref={titleRef} className={playTitle ? 'running' : ''}>
                        Welcome to <strong>Leonti Aesthetic</strong> a place where we care about you</h1>
                </div>
            </section>
            <section className='services beige-section'>
                <section className='mainGreeting'>
                    <div className="greetingImg-container">
                        <img className={`mainFoto-greeting ${playGreetingImg ? 'running' : ''}`}
                            src={mainFoto}
                            alt="dueña del local en primer plano cruzada de brazos"
                            ref={greetingImgRef} />
                    </div>
                    <div className={`greeting ${playGreetingText ? 'running' : ''}`}
                        ref={greetingTextRef}>
                        <h1>
                            <strong>Crafting Confidence</strong>
                        </h1>
                        <br />
                        <h4>
                            Welcome to Leonti Aesthetic - your place for natural beauty and stylish care.
                        </h4>
                        <br />
                        <p>
                            My name is Ecaterina Leonti, I am a certified beautician and eyelash stylist - as well as the founder of <strong>Leonti Aesthetic</strong>. My studio stands for quality, aesthetics and genuine, natural results.
                        </p>
                        <br />
                        <p>
                            A calm, elegant atmosphere awaits you here, where every treatment is carried out with care, high-quality products and great attention to detail. Nice to see you here!
                        </p>
                    </div>
                </section>
                <h2 className='services-title'>OUR SERVICES</h2>
                <Service path="" name="Pure Glow"
                    description="Classic facial cleaning" />
                <Service path="" name="Microneedling"
                    description="Naturally beautiful skin through targeted deep care" />
                <Service path="" name="Eyelash extensions"
                    description="Your look, your expression" />
                <Service path="" name="Eyelash lifting"
                    description="Natural curl, without extensions" />
                <Service path="" name="Eyebrow lifting"
                    description="Volume & shape that last" />
                <Link className="see-more-btn" to="services">See more</Link>
            </section>
            <section className="prices-container">
                {/* <div className="iluminator1 iluminator"></div>
                <div className="iluminator2 iluminator"></div> */}
                <h3>
                    Looking for our latest rates?
                </h3>
                <p>
                    Download our full pricingto explore all services and pacakages in detail
                </p>
                <button className='price-list btn'>Price List - Download
                    <div className="download-icon-container"></div>
                </button>
            </section>
            <PricesTable />
            <Gallery />
            <div className="btn-bottom-container">
                <Link className="see-more-btn" to="services">See more</Link>
                <Link className="contact-btn" to="services">Contact me</Link>
            </div>
            <section className="cnc-shop-section beige-section beige-section">
                <img src={`${import.meta.env.BASE_URL}assets/imgs/hand-orange.webp`} alt="mano decorativa con producto" className="hand orange" />
                <img src={`${import.meta.env.BASE_URL}assets/imgs/hand-white.webp`} alt="mano decorativa con producto" className="hand white" />
                <img src={`${import.meta.env.BASE_URL}assets/imgs/hand-transparent.webp`} alt="mano decorativa con producto" className="hand transparent" />
                <img src={`${import.meta.env.BASE_URL}assets/imgs/hand-rounded.webp`} alt="mano decorativa con producto" className="hand rounded" />
                <div className="cnc-card">
                    <h2>CNC DIRECT SHOP</h2>
                    <img className="cnc-shop-logo"
                        src={`${import.meta.env.BASE_URL}assets/icons/cnc-shop.svg`}
                        alt="cnc-shop logo"
                    />
                    <div className="divider"></div>
                    <p>
                        An exclusive selection of professional cosmetic products from the CNC brand — developed for all skin types and every skin need.
                    </p>
                    <div className="blue-info">
                        <div className="notch"></div>
                        <p>
                            Whether it’s anti-ageing, blemished skin, couperose, pigmentation, dryness or sensitivity — find targeted skincare solutions tailored to you.
                        </p>
                    </div>
                </div>
                <Link to="https://shop.cnc-cosmetic.de/" className="cnc-shop">Go to Store Now <img src={`${import.meta.env.BASE_URL}assets/icons/arrow-right-white.svg`} alt="icono a la flecha a la derecha" /></Link>
                <h1 className="access-code">Access Code: 1180011</h1>
            </section>
            <WhatsappButton />
            <Footer />
        </div>
    );
}

export default Home;