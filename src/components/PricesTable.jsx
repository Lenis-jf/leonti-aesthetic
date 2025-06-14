import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const PricesTable = () => {
    const { t } = useTranslation();
    const [expanded, setExpanded] = useState(false);

    const servicesData = [
        {
            section: t(
                'pricesTable.section.eyelashExtensions',
                'Eyelash Extensions'
            ),
            categories: [
                {
                    name: t('pricesTable.category.classicLook', 'Classic Look 1:1'),
                    services: [
                        {
                            name: t('pricesTable.service.newSet', 'New Set'),
                            price: '€75',
                        },
                        {
                            name: t('pricesTable.service.refill2Weeks', 'Refill (2 weeks)'),
                            price: '€40',
                        },
                        {
                            name: t('pricesTable.service.refill3Weeks', 'Refill (3 weeks)'),
                            price: '€45',
                        },
                        {
                            name: t(
                                'pricesTable.service.refill4Weeks',
                                'Refill (4 weeks)'
                            ),
                            price: '€55',
                        },
                    ],
                },
                {
                    name: t('pricesTable.category.softVolume', 'Soft Volume 2-3D'),
                    services: [
                        {
                            name: t('pricesTable.service.newSet', 'New Set'),
                            price: '€85',
                        },
                        {
                            name: t('pricesTable.service.refill2Weeks', 'Refill (2 weeks)'),
                            price: '€45',
                        },
                        {
                            name: t('pricesTable.service.refill3Weeks', 'Refill (3 weeks)'),
                            price: '€50',
                        },
                        {
                            name: t(
                                'pricesTable.service.refill4Weeks',
                                'Refill (4 weeks)'
                            ),
                            price: '€60',
                        },
                    ],
                },
                {
                    name: t('pricesTable.category.megaVolume', 'Mega Volume 4-6D'),
                    services: [
                        {
                            name: t('pricesTable.service.newSet', 'New Set'),
                            price: '€95',
                        },
                        {
                            name: t('pricesTable.service.refill2Weeks', 'Refill (2 weeks)'),
                            price: '€50',
                        },
                        {
                            name: t('pricesTable.service.refill3Weeks', 'Refill (3 weeks)'),
                            price: '€55',
                        },
                        {
                            name: t(
                                'pricesTable.service.refill4Weeks',
                                'Refill (4 weeks)'
                            ),
                            price: '€65',
                        },
                        {
                            name: t('pricesTable.service.eyelashRemoval', 'Eyelash Removal'),
                            price: '€15',
                        },
                    ],
                },
            ],
            note: t(
                'pricesTable.note.wispyLook',
                'Wispy Look, M-curls and L-curls available at no extra cost with same volume. After 4 weeks the price for a new set applies'
            ),
        },
        {
            section: t('pricesTable.section.lashBrowTreatments', 'Lash & Brow Treatments'),
            services: [
                {
                    name: t(
                        'pricesTable.service.eyelashLiftingInclTint',
                        'Eyelash Lifting (incl. tint & keratin care)'
                    ),
                    price: '€50',
                },
                {
                    name: t(
                        'pricesTable.service.eyebrowTreatmentInclTint',
                        'Eyebrow Treatment (incl. tint & keratin care)'
                    ),
                    price: '€50',
                },
                {
                    name: t(
                        'pricesTable.service.comboPackage',
                        'Combo Package (Lash & Brow Lifting)'
                    ),
                    price: '€85',
                },
            ],
            note: t(
                'pricesTable.note.exclusiveWelcomeBenefit',
                'Exclusive Welcome Benefit – 10% off first eyelash extension'
            ),
        },
        {
            section: t(
                'pricesTable.section.facialTreatments',
                'Facial Treatments'
            ),
            categories: [
                {
                    name: t(
                        'pricesTable.category.classicFacialCleansing',
                        'Classic Facial Cleansing'
                    ),
                    services: [
                        {
                            name: t(
                                'pricesTable.service.basicCareRefreshment',
                                'Basic Care (Refreshment)'
                            ),
                            price: '€60',
                        },
                    ],
                },
                {
                    name: t(
                        'pricesTable.category.intensiveRelaxingFacial',
                        'Intensive & Relaxing Facial'
                    ),
                    services: [
                        {
                            name: t(
                                'pricesTable.service.rejuvenationFreshness',
                                'Rejuvenation & Freshness'
                            ),
                            price: '€85',
                        },
                    ],
                },
                {
                    name: t('pricesTable.category.aquafacial', 'Aquafacial'),
                    services: [
                        {
                            name: t(
                                'pricesTable.service.hydrationElasticity',
                                'Hydration & Elasticity'
                            ),
                            price: '€110',
                        },
                    ],
                },
                {
                    name: t('pricesTable.category.nanoNeedling', 'NanoNeedling'),
                    services: [
                        {
                            name: t(
                                'pricesTable.service.skinRejuvenation',
                                'Skin Rejuvenation'
                            ),
                            price: '€95',
                        },
                    ],
                },
            ],
            note: t(
                'pricesTable.note.careSpecial',
                'Care Special – 20% off all facial treatments until May 31st'
            ),
        },
    ];

    return (
        <div className={`price-table-wrapper ${expanded ? 'expanded' : ''}`}>
            <div className={`price-table ${expanded ? 'expanded' : ''}`}>
                {servicesData.map((sectionData, i) => (
                    <section key={i} className="section-block">
                        <h2 className="section-header">{sectionData.section}</h2>

                        {(sectionData.categories ??
                            [{ services: sectionData.services }]
                        ).map((cat, ci) => (
                            <div key={ci} className="category-block">
                                {cat.name && (
                                    <h3 className="category-header">{cat.name}</h3>
                                )}
                                {cat.services.map((svc, si) => (
                                    <div className="service-row" key={si}>
                                        <span className="service-name">{svc.name}</span>
                                        <span className="price">{svc.price}</span>
                                    </div>
                                ))}
                            </div>
                        ))}

                        {sectionData.note && (
                            <p className="note">{sectionData.note}</p>
                        )}
                    </section>
                ))}
            </div>
            <button
                className="toggle-btn"
                onClick={() => setExpanded(!expanded)}
            >
                {expanded
                    ? t('pricesTable.button.showLess', 'Show Less')
                    : t('pricesTable.button.showMore', 'Show More')}
            </button>
        </div>
    );
};

export default PricesTable;
