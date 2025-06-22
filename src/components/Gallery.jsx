import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

const Gallery = () => {
    const { t } = useTranslation();
    const imagesIndex = [1, 2, 3, 4, 5, 6, 7];
    const containerRef = useRef(null);

    const [steps, setSteps] = useState(1);
    const [activeStep, setActiveStep] = useState(0);

    useEffect(() => {
        const el = containerRef.current;
        if (!el) return;

        const updateSteps = () => {
            const items = Array.from(el.querySelectorAll('.image-container'));
            const gap = parseInt(getComputedStyle(el).gap || '0', 10);
            const itemWidth = items[0]?.clientWidth || 0;
            const visibleCount = Math.floor((el.clientWidth + gap) / (itemWidth + gap)) || 1;
            const totalImages = items.length;
            const n = Math.max(totalImages - visibleCount + 1, 1);
            setSteps(n);
        };

        updateSteps();
        window.addEventListener('resize', updateSteps);
        return () => window.removeEventListener('resize', updateSteps);
    }, []);

    useEffect(() => {
        const el = containerRef.current;
        if (!el) return;

        const onScroll = () => {
            const maxScroll = el.scrollWidth - el.clientWidth;
            if (maxScroll <= 0) {
                setActiveStep(0);
                return;
            }
            const progress = el.scrollLeft / maxScroll;
            const idx = Math.round(progress * (steps - 1));
            setActiveStep(Math.min(Math.max(idx, 0), steps - 1));
        };

        el.addEventListener('scroll', onScroll);
        onScroll();

        return () => el.removeEventListener('scroll', onScroll);
    }, [steps]);

    const mediaItems = [
        ...imagesIndex.map((id) => ({
            key: `img-${id}`,
            type: 'image',
            src: `${import.meta.env.BASE_URL}assets/imgs/photo${id}.webp`,
            alt: `Photo ${id}`
        })),
        {
            key: 'video-1',
            type: 'video',
            src: `${import.meta.env.BASE_URL}assets/videos/video1-compressed.mp4`
        }
    ];

    const scrollAmount = () => {
        const el = containerRef.current;
        if (!el) return 0;
        const gap = parseInt(getComputedStyle(el).gap || '0', 10);
        const item = el.querySelector('.image-container');
        const itemWidth = item?.clientWidth || el.clientWidth;
        return itemWidth + gap;
    };

    const handleLeft = () => {
        const el = containerRef.current;
        if (!el || activeStep === 0) return;
        el.scrollBy({ left: -scrollAmount(), behavior: 'smooth' });
    };

    const handleRight = () => {
        const el = containerRef.current;
        if (!el || activeStep === steps - 1) return;
        el.scrollBy({ left: scrollAmount(), behavior: 'smooth' });
    };

    return (
        <section id="gallery" className="picture-gallery white-section">
            <h2>{t("gallery.title", "Gallery")}</h2>
            <h1>{t("gallery.description", "See What We Do Best")}</h1>
            <div className="picture-gallery-container">
                <div
                    className={`left-arrow arrow ${activeStep === 0 ? 'disabled' : ''}`}
                    onClick={handleLeft}
                />
                <div className="pictures-scroll" ref={containerRef}>
                    {mediaItems.map((item, idx) => (
                        <div className="image-container" key={item.key} data-index={idx}>
                            {item.type === 'image' ? (
                                <img
                                    src={item.src}
                                    alt={item.alt}
                                    className="picture"
                                />
                            ) : (
                                <video
                                    src={item.src}
                                    className="picture"
                                    playsInline
                                    loop
                                    controls
                                    poster={`${import.meta.env.BASE_URL}assets/imgs/video1-cover.webp`}
                                />
                            )}
                        </div>
                    ))}
                </div>
                <div
                    className={`right-arrow arrow ${activeStep === steps - 1 ? 'disabled' : ''}`}
                    onClick={handleRight}
                />
                <div className="images-nav">
                    {Array.from({ length: steps }).map((_, i) => (
                        <div
                            key={i}
                            className={`img-nav-line ${i === activeStep ? 'active' : 'idle'}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Gallery;
