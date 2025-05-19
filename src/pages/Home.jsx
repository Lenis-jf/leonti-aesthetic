import Menu from '../components/Menu';
import PricesTable from '../components/PricesTable';
import WhatsappButton from '../components/WhatsappButton';
import Footer from '../components/Footer';
import Service from '../components/Service';
import Gallery from '../components/Gallery';
import mainBGimage from "../assets/principal-assets/main-bg-img.webp";
import mainFoto from "../assets/principal-assets/main-foto.webp";
import mainFoto2 from "../assets/principal-assets/main-foto-2.webp";
import mainLogo from "../assets/principal-assets/main-logo.svg";
import mainLogoWhite from "../assets/principal-assets/main-logo-white.svg";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className='home'>
            <Menu />
            <div className="main-fotos-container">
                <img className="mainLogo-top" src={mainLogoWhite} alt="Leonti Aesthetic"></img>
                <Link className="contact-btn" to="/contact">Contact me</Link>
                <img className="mainFoto" src={mainFoto2} alt="dueña del local en primer plano" />
            </div>
            <div className='mainGreeting'>
                <h3>Leonti Aesthetic</h3>
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
            <section className='services'>
                <DotLottieReact
                    src="https://lottie.host/92a6ea43-55ea-42f2-b874-6a83a33d7acc/hBUyi9HHhr.lottie"
                    loop
                    autoplay
                    className="bg-animation"
                />
                <img className="mainFoto-services" src={mainFoto} alt="dueña del local en primer plano cruzada de brazos" />
                <div className='light'></div>
                <div className="border"></div>
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
                <Link className="see-more-btn" to="/services">See more</Link>
            </section>
            <div className="prices-container">
                <div className="iluminator1 iluminator"></div>
                <div className="iluminator2 iluminator"></div>
                <h3>
                    Looking for our latest rates?
                </h3>
                <p>
                    Download our full pricingto explore all services and pacakages in detail
                </p>
                <button className='price-list btn'>Price List - Download
                    <div className="download-icon-container"></div>
                </button>
            </div>
            <PricesTable />
            <Gallery />
            <Link className="see-more-btn" to="/services">See more</Link>
            <img className="cnc-shop-logo"
                src={`${import.meta.env.BASE_URL}assets/icons/cnc-shop.svg`}
                alt="cnc-shop logo"
            />
            <div className="cnc-info-background">
                <div className="cnc-info">
                    <p>
                        <b>An exclusive selection of professional cosmetic products from the CNC brand — developed for all skin types and every skin need.</b>
                    </p>
                    <br />
                    <p>
                        Whether it’s anti-ageing, blemished skin, couperose, pigmentation, dryness or sensitivity — find targeted skincare solutions tailored to you.
                    </p>
                </div>
            </div>
            <h1 className="access-code">Access Code: 1180011</h1>
            <Link to="" className="cnc-shop">Go to Store Now</Link>
            <WhatsappButton />
            <Footer />
        </div>
    );
}

export default Home;