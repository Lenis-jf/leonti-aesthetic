import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { closeMenu } from "../utils/menuUtilis";

export default function LanguageSelector() {
    const { i18n, t } = useTranslation();
    const [open, setOpen] = useState(false);
    const ref = useRef(null);

    const languages = [
        { code: 'en', label: 'EN' },
        { code: 'de', label: 'DE' }
    ];

    const current = languages.find(l => l.code === i18n.language) || languages[0];
    const other = languages.find(l => l.code !== i18n.language);

    useEffect(() => {
        const onClick = e => {
            if (ref.current && !ref.current.contains(e.target)) {
                setOpen(false);
            }
        };
        document.addEventListener('mousedown', onClick);
        return () => document.removeEventListener('mousedown', onClick);
    }, []);

    const toggle = () => setOpen(o => !o);
    const select = code => {
        i18n.changeLanguage(code);
        setOpen(false);
    };

    return (
        <div className="lang-selector" ref={ref}>
            <button className="lang-label" onClick={toggle} alt={t("languageSelector.alt")}>
                <div className="language-globe lang-icon"></div>
                <span className="lang-text" alt={current.label}>{current.label}</span>
                <div className={`dropdown lang-icon ${open ? "rotated" : ""}`}></div>
            </button>

            {open && (
                <div className="dropdown-list">
                    <ul className="lang-dropdown">
                        <li className="lang-item" onClick={() => {
                            select(other.code);
                            closeMenu();
                        }}>
                            <button className="lang-text" alt={other.label}>{other.label}</button>
                        </li>
                        <li className="lang-item" onClick={() => select(current.code)}>
                            <button className="lang-text disabled" alt={current.label}>{current.label}</button>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
}
