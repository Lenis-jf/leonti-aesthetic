// src/components/PricesTable.jsx
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const PricesTable = () => {
    const { t } = useTranslation();
    const [expanded, setExpanded] = useState(false);

    const servicesData = [
         {
            section: t('pricesTable.sections.facial'),
            categories: [
                {
                    name: t('pricesTable.categories.classicFacial'),
                    services: [
                        { name: t('pricesTable.services.basicCareRefreshment'), price: '€60' },
                    ],
                },
                {
                    name: t('pricesTable.categories.aquafacial'),
                    services: [
                        { name: t('pricesTable.services.hydrationElasticity'), price: '€110' },
                    ],
                },
                {
                    name: t('pricesTable.categories.nanoNeedling'),
                    services: [
                        { name: t('pricesTable.services.skinRejuvenation'), price: '€95' },
                    ],
                },
            ],
            // note: t('pricesTable.notes.careSpecial'),
        },
        {
            section: t('pricesTable.sections.eyelashExtensions'),
            categories: [
                {
                    name: t('pricesTable.categories.classicLook'),
                    services: [
                        { name: t('pricesTable.services.newSet'), price: '€75' },
                        { name: t('pricesTable.services.refill2Weeks'), price: '€40' },
                        { name: t('pricesTable.services.refill3Weeks'), price: '€45' },
                        { name: t('pricesTable.services.refill4Weeks'), price: '€55' },
                    ],
                },
                {
                    name: t('pricesTable.categories.softVolume'),
                    services: [
                        { name: t('pricesTable.services.newSet'), price: '€85' },
                        { name: t('pricesTable.services.refill2Weeks'), price: '€45' },
                        { name: t('pricesTable.services.refill3Weeks'), price: '€50' },
                        { name: t('pricesTable.services.refill4Weeks'), price: '€60' },
                    ],
                },
                {
                    name: t('pricesTable.categories.megaVolume'),
                    services: [
                        { name: t('pricesTable.services.newSet'), price: '€95' },
                        { name: t('pricesTable.services.refill2Weeks'), price: '€50' },
                        { name: t('pricesTable.services.refill3Weeks'), price: '€55' },
                        { name: t('pricesTable.services.refill4Weeks'), price: '€65' },
                        { name: t('pricesTable.services.eyelashRemoval'), price: '€15' },
                    ],
                },
            ],
            note: t('pricesTable.notes.wispyLook'),
        },
        {
            section: t('pricesTable.sections.lashBrow'),
            services: [
                { name: t('pricesTable.services.eyelashLiftingTint'), price: '€50' },
                { name: t('pricesTable.services.eyebrowTint'), price: '€50' },
                { name: t('pricesTable.services.comboPackage'), price: '€85' },
            ],
            // note: t('pricesTable.notes.exclusiveWelcomeBenefit'),
        },
    ];

    return (
        <div className={`price-table-wrapper ${expanded ? 'expanded' : ''}`}>
            <div className={`price-table ${expanded ? 'expanded' : ''}`}>
                {servicesData.map((section, i) => (
                    <section key={i} className="section-block">
                        <h2 className="section-header">{section.section}</h2>
                        {(section.categories ?? [{ services: section.services }]).map((cat, ci) => (
                            <div key={ci} className="category-block">
                                {cat.name && <h3 className="category-header">{cat.name}</h3>}
                                {cat.services.map((svc, si) => (
                                    <div key={si} className="service-row">
                                        <span className="service-name">{svc.name}</span>
                                        <span className="price">{svc.price}</span>
                                    </div>
                                ))}
                            </div>
                        ))}
                        {section.note && <p className="note">{section.note}</p>}
                    </section>
                ))}
            </div>
            <button className="toggle-btn" onClick={() => setExpanded(!expanded)}>
                {expanded
                    ? t('pricesTable.buttons.showLess')
                    : t('pricesTable.buttons.showMore')}
            </button>
        </div>
    );
};

export default PricesTable;
