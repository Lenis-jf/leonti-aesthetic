import React from 'react';
import Menu from '../components/Menu';
import Footer from '../components/Footer';
import mainBGimage from "../assets/principal-assets/main-bg-img.jpeg";
import mainFoto from "../assets/principal-assets/main-foto.png";
import mainLogo from "../assets/principal-assets/main-logo.svg";

import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className='home'>
            <img className="mainBGimage" src={mainBGimage} alt="foto enfocada en la zona de ojos y cejas de una mujer" />
            <Menu />
            <img className="mainFoto" src={mainFoto} alt="dueña del local cruzada de brazos en una pose poderosa pero simpatica" />
            <div className="elipse1"></div>
            <div className="elipse2"></div>
            <img className="mainLogo" src={mainLogo} alt="Leonti Aesthethics Logo" />
            <div className='mainGreeting'>
                <h1>Crafting Confidence</h1>
                <div className='divider2' />
                <p className='subtitle'>Welcome to Leonti Aesthetic - your place for natural beauty and stylish care.</p>
                <div className="text-box box-1">
                    <p>My name is <b><i>Ecaterina Leonti</i></b>, I am a certified beautician and eyelash stylist - as well as the founder of Leonti Aesthetic. My studio stands for quality, aesthetics and genuine, natural results.</p>
                </div>
                <div className="text-box box-2">
                    <p>A calm, elegant atmosphere awaits you here, where every treatment is carried out with care, high-quality products and great attention to detail. Nice to you here!</p>
                </div>
            </div>
            <div className='services'>
                <h1 className='services-title'>Services</h1>
                <div className="service pure-glow">
                    <h1>Pure Glow</h1>
                    <p>Classic facial cleaning</p>
                </div>
                <div className="service microneedling">
                    <h1>Microneedling</h1>
                    <p>Naturally beautiful skin through targeted deep care</p>
                </div>
                <div className="service eyelash-extensions">
                    <h1>Eyelash Extensions</h1>
                    <p>Your look, your expression</p>
                </div>
                <div className="service eyelash-lifting">
                    <h1>Eyelash Lifting</h1>
                    <p>Natural curl without extensions</p>
                </div>
                <div className="service eyebrows-lifting">
                    <h1>Eyebrows Lifting</h1>
                    <p>Volume and shap that lasts</p>
                </div>
            </div>
            <Link className="see-more-btn" to="/services">See more</Link>
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
            <h1>Picture Gallery</h1>
            <div className="picture-gallery-container">
                <div className="black-background"></div>
                <div className="pictures-scroll">
                    <div className="column">
                        <img 
                            src={`${import.meta.env.BASE_URL}assets/imgs/face-treatment.jpg`}
                            className="picture row-1"
                        />
                        <img
                            src={`${import.meta.env.BASE_URL}assets/imgs/big-eye.jpg`}
                            className="picture row-2"
                        />
                    </div>
                    <div className="column">    
                        <img
                            src={`${import.meta.env.BASE_URL}assets/imgs/big-eye.jpg`}
                            className="picture row-1"
                        />
                        <img
                            src={`${import.meta.env.BASE_URL}assets/imgs/black-glove.jpg`}
                            className="picture row-2"
                        />
                    </div>
                    <div className="column">
                        <img
                            src={`${import.meta.env.BASE_URL}assets/imgs/black-glove.jpg`}
                            className="picture row-1"
                        />
                        <img
                            src={`${import.meta.env.BASE_URL}assets/imgs/face-treatment.jpg`}
                            className="picture row-2"
                        />
                    </div>
                    <div className="column">
                        <img
                            src={`${import.meta.env.BASE_URL}assets/imgs/face-treatment.jpg`}
                            className="picture row-1"
                        />
                        <img
                            src={`${import.meta.env.BASE_URL}assets/imgs/big-eye.jpg`}
                            className="picture row-2"
                        />
                    </div>
                    <div className="column">
                        <img
                            src={`${import.meta.env.BASE_URL}assets/imgs/big-eye.jpg`}
                            className="picture row-1"
                        />
                        <img
                            src={`${import.meta.env.BASE_URL}assets/imgs/black-glove.jpg`}
                            className="picture row-2"
                        />
                    </div>
                    <div className="column">
                        <img
                            src={`${import.meta.env.BASE_URL}assets/imgs/black-glove.jpg`}
                            className="picture row-1"
                        />
                        <img
                            src={`${import.meta.env.BASE_URL}assets/imgs/face-treatment.jpg`}
                            className="picture row-2"
                        />
                    </div>
                                        <div className="column">
                        <img
                            src={`${import.meta.env.BASE_URL}assets/imgs/face-treatment.jpg`}
                            className="picture row-1"
                        />
                        <img
                            src={`${import.meta.env.BASE_URL}assets/imgs/big-eye.jpg`}
                            className="picture row-2"
                        />
                    </div>
                    <div className="column">
                        <img
                            src={`${import.meta.env.BASE_URL}assets/imgs/big-eye.jpg`}
                            className="picture row-1"
                        />
                        <img
                            src={`${import.meta.env.BASE_URL}assets/imgs/black-glove.jpg`}
                            className="picture row-2"
                        />
                    </div>
                    <div className="column">
                        <img
                            src={`${import.meta.env.BASE_URL}assets/imgs/black-glove.jpg`}
                            className="picture row-1"
                        />
                        <img
                            src={`${import.meta.env.BASE_URL}assets/imgs/face-treatment.jpg`}
                            className="picture row-2"
                        />
                    </div>
                </div>
            </div>
            <Link className="see-more-btn" to="/services">See more</Link>

            <img className="cnc-shop-logo" 
                src={`${import.meta.env.BASE_URL}assets/imgs/cnc-shop.png`}
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
            <Footer />
        </div>
    );
}

export default Home;