import { Link, NavLink } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import { useEffect, useRef } from 'react';
import { scrollFunction } from '../utils/scrollFunction';
import { useTranslation } from 'react-i18next';
import LanguageSelector from "./LanguageSelector";

const Menu = () => {
    const { t } = useTranslation();

    const menuToggleRef = useRef(null);

    useEffect(() => {
        const iconSquares = Array.from(document.querySelectorAll('.iconSquare'));
        const darkSections = Array.from(document.querySelectorAll('.dark-section'));

        if (!iconSquares.length || !darkSections.length) return;

        const onScroll = () => {
            iconSquares.forEach(icon => {
                const iconRect = icon.getBoundingClientRect();

                const isFullyOverDark = darkSections.some(sec => {
                    const secRect = sec.getBoundingClientRect();
                    return (
                        iconRect.top >= secRect.top &&
                        iconRect.bottom <= secRect.bottom &&
                        iconRect.left >= secRect.left &&
                        iconRect.right <= secRect.right
                    );
                });
                icon.classList.toggle('dark', isFullyOverDark);
            });
        };

        onScroll();
        
        window.addEventListener('scroll', onScroll, { passive: true });

        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const closeMenu = () => {
        if(menuToggleRef.current) {
            menuToggleRef.current.checked = false;
        }
    }

    return (
        <div>
            <input type="checkbox" id="menuToggle" className="menuToggle" ref={menuToggleRef} />
            <label htmlFor="menuToggle" className="menuBubbleContainer">
                <div className="iconSquare top-left"></div>
                <div className="iconSquare top-right"></div>
                <div className="iconSquare bottom-left"></div>
                <div className="iconSquare bottom-right"></div>
            </label>
            <nav className="menu">
                <LanguageSelector />
                <ul className="menu-main-list">
                    <li className="main-list-item"><NavLink className={({ isActive }) => isActive ? 'active' : ''} to="/">{t("menu.home", "Home")}</NavLink></li>
                    <div className="divider"></div>
                    <li className="main-list-item"><NavLink className={({ isActive }) => isActive ? 'active' : ''} to="/services">{t("menu.services", "Services")}</NavLink></li>
                    <div className="divider"></div>
                    <li className="main-list-item"><HashLink scroll={scrollFunction} smooth to="/#prices" onClick={closeMenu}>{t("menu.prices", "Prices")}</HashLink></li>
                    <div className="divider"></div>
                    <li className="main-list-item"><HashLink scroll={scrollFunction} smooth to="/#gallery" onClick={closeMenu}>{t("menu.gallery", "Gallery")}</HashLink></li>
                    <div className="divider"></div>
                    <li className="main-list-item"><HashLink scroll={scrollFunction} smooth to="/#cnc-shop" onClick={closeMenu}>{t("menu.cncShop", "CNC Shop")}</HashLink></li>
                    <div className="divider"></div>
                    <li className="main-list-item"><NavLink className={({ isActive }) => isActive ? 'active' : ''} to="/contact">{t("menu.contact", "Contact Us")}</NavLink></li>
                </ul>
            </nav>
        </div>
    );
}

export default Menu;
