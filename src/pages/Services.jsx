import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';

import Menu from '../components/Menu';
import WhatsappButton from '../components/WhatsappButton';
import Footer from '../components/Footer';
import Loader from '../components/Loader';
import Map from '../components/Map';

import mainLogoWhite from '../assets/principal-assets/main-logo-white.svg';
import mainLogo from '../assets/principal-assets/main-logo.svg';

import { useImagePreloader } from '../hooks/useImagePreloader';

const PrincipalImg = ({ imagesLoaded, alt }) => {
    const smallSrc = `${import.meta.env.BASE_URL}assets/imgs/main-bg-foto.webp`;
    const largeSrc = `${import.meta.env.BASE_URL}assets/imgs/main-bg-foto-big.webp`;
    const getSrc = width => width >= 768 ? largeSrc : smallSrc;
    const [src, setSrc] = useState(getSrc(window.innerWidth));

    useEffect(() => {
        const onResize = () => setSrc(getSrc(window.innerWidth));
        window.addEventListener('resize', onResize);
        return () => window.removeEventListener('resize', onResize);
    }, []);

    if (!imagesLoaded) return <Loader />;
    return (
        <div className="principal-img-container">
            <img className="principal-img" src={src} alt={alt} />
        </div>
    );
};

const Services = () => {
    const { t } = useTranslation("services");

    const images = [
        'main-bg-foto.webp',
        'main-bg-foto-big.webp',
        'services-1.webp',
        'services-2.webp',
        'services-3.webp',
        'services-4.webp',
        'services-5.webp',
        'services-6.webp',
    ].map(f => `${import.meta.env.BASE_URL}assets/imgs/${f}`);

    const imagesLoaded = useImagePreloader(images);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (!imagesLoaded) return <Loader />;

    return (
        <>
            <Helmet>
                <title>{t('servicesPage.title')}</title>
                <link rel="canonical" href={`${import.meta.env.VITE_BASE_URL}/services`} />
            </Helmet>
            <div className="services-page">
                <Menu />

                <section className="topMenu dark-section">
                    <NavLink to="/" className="mainLogo-top">
                        <img src={mainLogoWhite} alt={t('mainServicesPage.logoWhite.alt')} />
                    </NavLink>
                    <NavLink className="contact-btn" to="/contact">
                        {t('buttons.contact')}
                    </NavLink>
                </section>

                <PrincipalImg
                    imagesLoaded={imagesLoaded}
                    alt={t('mainServicesPage.principalImg.alt')}
                />

                <section className="mainDescription">
                    <h4>{t('mainServicesPage.title')}</h4>
                    <h1>{t('mainServicesPage.subtitle')}</h1>
                    <p>{t('mainServicesPage.description')}</p>
                    <div className="decorationText">{t('mainServicesPage.discover')}</div>
                </section>

                <section className="service-cards-section beige-section">
                    {/* Pure Glow */}
                    <div id="pure-glow" className="service-card pure-glow">
                        <img
                            src={`${import.meta.env.BASE_URL}assets/imgs/services-1.webp`}
                            alt={t('mainServicesPage.pureGlow.alt')}
                            className="pure-glow-img"
                        />
                        <div className="rosa-subtitle">{t('mainServicesPage.pureGlow.tagline')}</div>
                        <h2>{t('mainServicesPage.pureGlow.name')}</h2>
                        <p>{t('mainServicesPage.pureGlow.description')}</p>
                        {/* <p><strong>{t('mainServicesPage.pureGlow.result')}</strong></p> */}
                        <div className="divider"></div>
                        <div className="subservice">
                            <h3>{t('mainServicesPage.pureGlow.subservices.basicCare.title')}</h3>
                            <p>{t('mainServicesPage.pureGlow.subservices.basicCare.description')}</p>
                        </div>
                        <div className="subservice">
                            <h3>{t('mainServicesPage.pureGlow.subservices.intensiveRelaxing.title')}</h3>
                            <p>{t('mainServicesPage.pureGlow.subservices.intensiveRelaxing.description')}</p>
                        </div>
                        <NavLink className="contact-btn" to="/contact">{t('buttons.contact')}</NavLink>
                    </div>

                    {/* Aquafacial */}
                    <div id="aquafacial" className="service-card aquafacial">
                        <img
                            src={`${import.meta.env.BASE_URL}assets/imgs/services-6.webp`}
                            alt={t('mainServicesPage.aquafacial.alt')}
                            className="aquafacial-img"
                        />
                        <div className="rosa-subtitle">{t('mainServicesPage.aquafacial.tagline')}</div>
                        <h2>{t('mainServicesPage.aquafacial.name')}</h2>
                        <p>{t('mainServicesPage.aquafacial.paragraph.0')}</p>
                        <p>{t('mainServicesPage.aquafacial.paragraph.1')}</p>
                        <br />
                        <strong><p>{t('mainServicesPage.aquafacial.result')}</p></strong>
                        <div className="divider"></div>
                        <h4>{t("mainServicesPage.aquafacial.indicationsTitle")}</h4>
                        <ul>
                            <li>{t("mainServicesPage.aquafacial.indications.0")}</li>
                            <li>{t("mainServicesPage.aquafacial.indications.1")}</li>
                            <li>{t("mainServicesPage.aquafacial.indications.2")}</li>
                            <li>{t("mainServicesPage.aquafacial.indications.3")}</li>
                            <li>{t("mainServicesPage.aquafacial.indications.4")}</li>
                            <li>{t("mainServicesPage.aquafacial.indications.5")}</li>
                        </ul>
                        <div className="divider"></div>
                        <h4>{t('mainServicesPage.aquafacial.stepsTitle')}</h4>
                        <ol>
                            <li>{t('mainServicesPage.aquafacial.steps.0')}</li>
                            <li>{t('mainServicesPage.aquafacial.steps.1')}</li>
                            <li>{t('mainServicesPage.aquafacial.steps.2')}</li>
                            <li>{t('mainServicesPage.aquafacial.steps.3')}</li>
                            <li>{t('mainServicesPage.aquafacial.steps.4')}</li>
                        </ol>
                        <NavLink className="contact-btn" to="/contact">{t('buttons.contact')}</NavLink>
                    </div>

                    {/* Microneedling */}
                    <div id="microneedling" className="service-card microneedling">
                        <img
                            src={`${import.meta.env.BASE_URL}assets/imgs/services-2.webp`}
                            alt={t('mainServicesPage.microneedling.alt')}
                            className="microneedling-img"
                        />
                        <div className="rosa-subtitle">{t('mainServicesPage.microneedling.tagline')}</div>
                        <h2>{t('mainServicesPage.microneedling.name')}</h2>
                        <p>{t('mainServicesPage.microneedling.paragraph.0')}</p>
                        <p>{t('mainServicesPage.microneedling.paragraph.1')}</p>
                        <div className="divider"></div>
                        <h4>{t('mainServicesPage.microneedling.treatmentOptionsTitle')}</h4>
                        <div className="subservice">
                            <h3>{t('mainServicesPage.microneedling.treatmentOptions.nano.label')}</h3>
                            <p>{t('mainServicesPage.microneedling.treatmentOptions.nano.description')}</p>
                        </div>
                        <div className="subservice">
                            <h3>{t('mainServicesPage.microneedling.treatmentOptions.basic.label')}</h3>
                            <p>{t('mainServicesPage.microneedling.treatmentOptions.basic.description')}</p>
                        </div>
                        <div className="subservice">
                            <h3>{t('mainServicesPage.microneedling.treatmentOptions.pro.label')}</h3>
                            <p>{t('mainServicesPage.microneedling.treatmentOptions.pro.description')}</p>
                        </div>
                        <div className="divider"></div>
                        <h4>{t("mainServicesPage.microneedling.targetGroupTitle")}</h4>
                        <ul>
                            <li>{t('mainServicesPage.microneedling.targetGroup.0')}</li>
                            <li>{t('mainServicesPage.microneedling.targetGroup.1')}</li>
                            <li>{t('mainServicesPage.microneedling.targetGroup.2')}</li>
                            <li>{t('mainServicesPage.microneedling.targetGroup.3')}</li>
                            <li>{t('mainServicesPage.microneedling.targetGroup.4')}</li>
                            <li>{t('mainServicesPage.microneedling.targetGroup.5')}</li>
                        </ul>
                        <div className="divider"></div>
                        <div className="contraindication-icon-title-container">
                            <span></span>
                            <div className="vertical-divider"></div>
                            <div className="contraindication-title-subtitle-container">
                                <h3>{t("mainServicesPage.microneedling.contraindications.title", "Contraindications")}</h3>
                                <p>
                                    {t("mainServicesPage.microneedling.contraindications.subtitle", "Micro Needling should not be performed when:")}
                                </p>
                            </div>
                        </div>
                        <ul>
                            {t('mainServicesPage.microneedling.contraindications.items', { returnObjects: true }).map((item, idx) => (
                                <li key={idx}>{item}</li>
                            ))}
                        </ul>
                        <NavLink className="contact-btn" to="/contact">{t('buttons.contact')}</NavLink>
                    </div>

                    {/* Eyelash Extensions */}
                    <div id="eyelash-extensions" className="service-card eyelash-extensions">
                        <img
                            src={`${import.meta.env.BASE_URL}assets/imgs/services-3.webp`}
                            alt={t('mainServicesPage.eyelashExtensions.alt')}
                            className="eyelash-extensions-img"
                        />
                        <div className="rosa-subtitle">{t('mainServicesPage.eyelashExtensions.tagline')}</div>
                        <h2>{t('mainServicesPage.eyelashExtensions.name')}</h2>
                        <p>{t('mainServicesPage.eyelashExtensions.description')}</p>
                        <div className="subservice-2">
                            <span>{t('mainServicesPage.eyelashExtensions.treatmentOptions.classic.label')}</span>
                            <p>{t('mainServicesPage.eyelashExtensions.treatmentOptions.classic.description')}</p>
                        </div>
                        <div className="subservice-2">
                            <span>{t('mainServicesPage.eyelashExtensions.treatmentOptions.softVolume.label')}</span>
                            <p>{t('mainServicesPage.eyelashExtensions.treatmentOptions.softVolume.description')}</p>
                        </div>
                        <div className="subservice-2">
                            <span>{t('mainServicesPage.eyelashExtensions.treatmentOptions.volume.label')}</span>
                            <p>{t('mainServicesPage.eyelashExtensions.treatmentOptions.volume.description')}</p>
                        </div>
                        <h4>{t('mainServicesPage.eyelashExtensions.chooseStyle')}</h4>
                        <NavLink className="contact-btn" to="/contact">{t('buttons.contact')}</NavLink>
                    </div>

                    {/* Eyelash Lifting */}
                    <div id="eyelash-lifting" className="service-card eyelash-lifting">
                        <img
                            src={`${import.meta.env.BASE_URL}assets/imgs/services-5.webp`}
                            alt={t('mainServicesPage.eyelashLifting.alt')}
                            className="eyelash-lifting-img"
                        />
                        <div className="rosa-subtitle">{t('mainServicesPage.eyelashLifting.tagline')}</div>
                        <h2>{t('mainServicesPage.eyelashLifting.name')}</h2>
                        <p>
                            {t('mainServicesPage.eyelashLifting.description')}
                        </p>
                        <NavLink className="contact-btn" to="/contact">{t('buttons.contact')}</NavLink>
                    </div>

                    {/* Eyebrow Lifting */}
                    <div id="eyebrow-lifting" className="service-card eyebrow-lifting">
                        <img
                            src={`${import.meta.env.BASE_URL}assets/imgs/services-4.webp`}
                            alt={t('mainServicesPage.eyebrowLifting.alt')}
                            className="eyebrow-lifting-img"
                        />
                        <div className="rosa-subtitle">{t('mainServicesPage.eyebrowLifting.tagline')}</div>
                        <h2>{t('mainServicesPage.eyebrowLifting.name')}</h2>
                        <p>{t('mainServicesPage.eyebrowLifting.description')}</p>
                        <NavLink className="contact-btn" to="/contact">{t('buttons.contact')}</NavLink>
                    </div>

                    <NavLink to="/" className="mainLogo-bottom">
                        <img src={mainLogo} alt={t('mainServicesPage.logo.alt')} />
                    </NavLink>
                </section>

                <section className="location-info-container white-section">
                    <h4>{t("location.title")}</h4>
                    <h1>{t("location.subtitle")}</h1>
                    <span className="address">{t("location.address")}</span>
                    <Map />
                    <NavLink className="contact-btn" to="/contact">{t("buttons.contact")}</NavLink>
                </section>

                <WhatsappButton />
                <Footer />
            </div>
        </>
    );
};

export default Services;
