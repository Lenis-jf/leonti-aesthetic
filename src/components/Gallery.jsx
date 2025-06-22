// src/components/Gallery.jsx
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

    // Lista combinada de imágenes + video
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

    return (
        <section id="gallery" className="picture-gallery white-section">
            <h2>{t("gallery.title", "Gallery")}</h2>
            <h1>{t("gallery.description", "See What We Do Best")}</h1>
            <div className="picture-gallery-container">
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
                                />
                            )}
                        </div>
                    ))}
                </div>
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
