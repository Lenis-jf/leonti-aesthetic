import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const PricesTable = () => {
    const { t } = useTranslation();
    const [expanded, setExpanded] = useState(false);

    const servicesData = [
        {
            section: 'Eyelash Extensions',
            categories: [
                {
                    name: 'Classic Look 1:1',
                    services: [
                        { name: 'New Set', price: '€75' },
                        { name: 'Refill (2 weeks)', price: '€40' },
                        { name: 'Refill (3 weeks)', price: '€45' },
                        { name: 'After 4 weeks: New Set', price: '€75' },
                    ],
                },
                {
                    name: 'Soft Volume 2-3D',
                    services: [
                        { name: 'New Set', price: '€85' },
                        { name: 'Refill (2 weeks)', price: '€45' },
                        { name: 'Refill (3 weeks)', price: '€50' },
                        { name: 'After 4 weeks: New Set', price: '€85' },
                    ],
                },
                {
                    name: 'Mega Volume 4-6D',
                    services: [
                        { name: 'New Set', price: '€95' },
                        { name: 'Refill (2 weeks)', price: '€50' },
                        { name: 'Refill (3 weeks)', price: '€55' },
                        { name: 'After 4 weeks: New Set', price: '€95' },
                        { name: 'Eyelash Removal', price: '€15' },
                    ],
                },
            ],
            note: t(
                'Wispy Look, M-curls and L-curls available at no extra cost with same volume'
            ),
        },
        {
            section: 'Lash & Brow Treatments',
            services: [
                {
                    name: 'Eyelash Lifting (incl. tint & keratin care)',
                    price: '€50',
                },
                {
                    name: 'Eyebrow Treatment (incl. tint & keratin care)',
                    price: '€50',
                },
                {
                    name: 'Combo Package (Lash & Brow Lifting)',
                    price: '€85',
                },
            ],
            note: t(
                'Exclusive Welcome Benefit – 10% off first eyelash extension'
            ),
        },
        {
            section: 'Facial Treatments',
            categories: [
                {
                    name: 'Classic Facial Cleansing',
                    services: [
                        { name: 'Basic Care (Refreshment)', price: '€60' },
                    ],
                },
                {
                    name: 'Intensive & Relaxing Facial',
                    services: [
                        { name: 'Rejuvenation & Freshness', price: '€85' },
                    ],
                },
                {
                    name: 'Aquafacial',
                    services: [
                        { name: 'Hydration & Elasticity', price: '€110' },
                    ],
                },
                {
                    name: 'NanoNeedling',
                    services: [
                        { name: 'Skin Rejuvenation', price: '€95' },
                    ],
                },
            ],
            note: t(
                'Care Special – 20% off all facial treatments until May 31st'
            ),
        },
    ];

    return (
        <div className={`price-table-wrapper ${expanded ? 'expanded' : ''}`}>
            <div className={`price-table ${expanded ? 'expanded' : ''}`}>
                {servicesData.map((section, i) => (
                    <section key={i} className="section-block">
                        <h2 className="section-header">
                            {t(section.section, section.section)}
                        </h2>

                        {(section.categories ?? [{ services: section.services }]).map(
                            (cat, ci) => (
                                <div key={ci} className="category-block">
                                    {cat.name && (
                                        <h3 className="category-header">
                                            {t(cat.name, cat.name)}
                                        </h3>
                                    )}
                                    {cat.services.map((svc, si) => (
                                        <div className="service-row" key={si}>
                                            <span className="service-name">
                                                {t(svc.name, svc.name)}
                                            </span>
                                            <span className="price">{svc.price}</span>
                                        </div>
                                    ))}
                                </div>
                            )
                        )}

                        {section.note && (
                            <p className="note">{t(section.note, section.note)}</p>
                        )}
                    </section>
                ))}
            </div>

            {!expanded && <div className="fade-overlay" />}

            <button
                className="toggle-btn"
                onClick={() => setExpanded(!expanded)}
            >
                {expanded
                    ? t('Show Less', 'Show Less')
                    : t('Show More', 'Show More')}
            </button>
        </div>
    );
};

export default PricesTable;
