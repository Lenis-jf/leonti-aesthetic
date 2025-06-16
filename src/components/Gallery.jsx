import { t } from 'i18next';
import { useTranslation } from 'react-i18next';
import React, { useEffect, useRef, useState } from 'react';

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

            // console.log(
            //     'visibleCount:', visibleCount,
            //     '\ntotalImages:', totalImages,
            //     '\ncalculated steps (n):', n
            // );

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
            // Progreso de 0 a 1
            const progress = el.scrollLeft / maxScroll;
            // Índice entre 0 y steps-1
            const idx = Math.round(progress * (steps - 1));
            setActiveStep(Math.min(Math.max(idx, 0), steps - 1));
        };

        // Listener de scroll
        el.addEventListener('scroll', onScroll);
        // Inicializamos la posición
        onScroll();

        return () => el.removeEventListener('scroll', onScroll);
    }, [steps]);


    return (
        <section id="gallery" className="picture-gallery white-section">
            <h2>{t("gallery.title", "Gallery")}</h2>
            <h1>{t("gallery.description", "See What We Do Best")}</h1>
            <div className="picture-gallery-container">
                <div className="pictures-scroll" ref={containerRef}>
                    {imagesIndex.map((id, idx) => (
                        <div className="image-container" key={id} data-id={id} data-index={idx}>
                            <img
                                src={`${import.meta.env.BASE_URL}assets/imgs/photo${id}.webp`}
                                alt={`Photo ${id}`}
                                className="picture"
                            />
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
