import React, { useState } from 'react';

const PricesTable = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    const servicesData = [
        {
            section: "Eyelash Extensions",
            categories: [
                {
                    name: "Classic Look 1:1",
                    services: [
                        { name: "New Set", price: "€75" },
                        { name: "Refill (2 weeks)", price: "€40" },
                        { name: "Refill (3 weeks)", price: "€45" },
                        { name: "After 4 weeks: New Set", price: "€75" },
                    ]
                },
                {
                    name: "Soft Volume 2-3D",
                    services: [
                        { name: "New Set", price: "€85" },
                        { name: "Refill (2 weeks)", price: "€45" },
                        { name: "Refill (3 weeks)", price: "€50" },
                        { name: "After 4 weeks: New Set", price: "€85" },
                    ]
                },
                {
                    name: "Mega Volume 4-6D",
                    services: [
                        { name: "New Set", price: "€95" },
                        { name: "Refill (2 weeks)", price: "€50" },
                        { name: "Refill (3 weeks)", price: "€55" },
                        { name: "After 4 weeks: New Set", price: "€95" },
                        { name: "Eyelash Removal", price: "€15" },
                    ]
                }
            ],
            note: "Wispy Look, M-curls and L-curls available at no extra cost with same volume"
        },
        {
            section: "Lash & Brow Treatments",
            services: [
                { name: "Eyelash Lifting (incl. tint & keratin care)", price: "€50" },
                { name: "Eyebrow Treatment (incl. tint & keratin care)", price: "€50" },
                { name: "Combo Package (Lash & Brow Lifting)", price: "€85" }
            ],
            note: "Exclusive Welcome Benefit - 10% off first eyelash extension"
        },
        {
            section: "Facial Treatments",
            categories: [
                {
                    name: "Classic Facial Cleansing",
                    services: [
                        { name: "Basic Care (Refreshment)", price: "€60" }
                    ]
                },
                {
                    name: "Intensive & Relaxing Facial",
                    services: [
                        { name: "Rejuvenation & Freshness", price: "€85" }
                    ]
                },
                {
                    name: "Aquafacial",
                    services: [
                        { name: "Hydration & Elasticity", price: "€110" }
                    ]
                },
                {
                    name: "NanoNeedling",
                    services: [
                        { name: "Skin Rejuvenation", price: "€95" }
                    ]
                }
            ],
            note: "Care Special - 20% off all facial treatments until May 31st"
        }
    ];

    return (
        <div className="price-table-wrapper" style={{ position: 'relative' }}>
            <div
                className="price-table"
                style={{
                    maxHeight: isExpanded ? 'none' : '600px',
                    overflow: 'hidden',
                    transition: 'max-height 0.5s ease'
                }}
            >
                {servicesData.map((section, index) => (
                    <div key={index}>
                        <div className="section-header">{section.section}</div>

                        {section.categories ? (
                            section.categories.map((category, catIndex) => (
                                <div key={catIndex}>
                                    <div className="category-header">{category.name}</div>
                                    {category.services.map((service, serviceIndex) => (
                                        <div className="service-row" key={serviceIndex}>
                                            <span className="service-name">{service.name}</span>
                                            <span className="price">{service.price}</span>
                                        </div>
                                    ))}
                                </div>
                            ))
                        ) : (
                            section.services.map((service, serviceIndex) => (
                                <div className="service-row" key={serviceIndex}>
                                    <span className="service-name">{service.name}</span>
                                    <span className="price">{service.price}</span>
                                </div>
                            ))
                        )}

                        {section.note && <div className="note">{section.note}</div>}
                    </div>
                ))}
            </div>

            {!isExpanded && (
                <div style={{
                    width: '80%',
                    maxWidth: '600px',
                    position: 'absolute',
                    bottom: '150px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    right: 0,
                    height: '100px',
                    backdropFilter: 'blur(3px)',
                    WebkitBackdropFilter: 'blur(5px)',
                    backgroundColor: `linear-gradient(to bottom, transparent 0%, #0D0D0D 100%)`,
                    pointerEvents: 'none'
                }} />
            )}

            <button
                onClick={() => setIsExpanded(!isExpanded)}
                style={{
                    display: 'block',
                    margin: '20px auto',
                    padding: '10px 25px',
                    borderRadius: '20px',
                    border: 'none',
                    backgroundColor: "#0D0D0D",
                    color: 'white',
                    cursor: 'pointer'
                }}
            >
                {isExpanded ? 'Show Less' : 'Show More'}
            </button>
        </div>
    );
};

export default PricesTable;