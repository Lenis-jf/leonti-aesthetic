import { t } from "i18next";
import React, { useRef } from "react";

const WhatsappButton = () => {
    const whatsappRef = useRef(null);

    const toggleWhatsappMenu = () => {
        whatsappRef.current.classList.toggle("open");
    };

    return (
        <div className="whatsapp-floating" ref={whatsappRef} onClick={toggleWhatsappMenu}>
            <img
                src={`${import.meta.env.BASE_URL}assets/icons/whatsapp-white.svg`}
                className="whatsapp-icon icon"
                alt="whatsapp icon"
            />
            <img
                src={`${import.meta.env.BASE_URL}assets/icons/close-circle-white.svg`}
                className="close-icon icon"
                alt="close icon"
            />

            <div className="whatsapp-popup">
                <p>{t("whatsapp.message", "Book your appointment!")}</p>
                <a
                    href="https://wa.me/17620836261"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="popup-button"
                >
                    {t("whatsapp.button", "Chat on WhatsApp")}
                </a>
            </div>
        </div>
    );
};

export default WhatsappButton;
