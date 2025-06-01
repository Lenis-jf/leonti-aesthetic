import { t } from 'i18next';
import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

const Gallery = () => {
    const { t } = useTranslation();
    const imagesIndex = [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 13, 14, 15, 16];
    const containerRef = useRef(null);
    const [activeId, setActiveId] = useState(null);

    useEffect(() => {
        if (!containerRef.current) return;
        const options = {
            root: containerRef.current,
            threshold: 1.0, // trigger when 100% visible
        };
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const id = Number(entry.target.getAttribute('data-id'));
                    setActiveId(id);
                }
            });
        }, options);

        const items = containerRef.current.querySelectorAll('.image-container');
        items.forEach((item) => observer.observe(item));
        return () => items.forEach((item) => observer.unobserve(item));
    }, []);

    return (
        <section id="gallery" className="picture-gallery">
            <h2>{t("gallery.title", "Gallery")}</h2>
            <h1>{t("gallery.description", "See What We Do Best")}</h1>
            <div className="picture-gallery-container">
                <div className="pictures-scroll" ref={containerRef}>
                    {imagesIndex.map((id) => (
                        <div className="image-container" key={id} data-id={id}>
                            <img
                                src={`${import.meta.env.BASE_URL}assets/imgs/photo${id}.webp`}
                                alt={`Photo ${id}`}
                                className="picture"
                            />
                        </div>
                    ))}
                </div>
                <div className="images-nav">
                    {imagesIndex.map((id) => (
                        <div
                            key={id}  // Added unique key here
                            className={`img-nav-line ${activeId === id ? 'active' : 'idle'}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Gallery;
