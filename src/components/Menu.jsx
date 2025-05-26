import { Link, NavLink } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import { useEffect, useRef } from 'react';

const Menu = () => {
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
                <ul>
                    <li><NavLink className={({ isActive }) => isActive ? 'active' : ''} to="/">Home</NavLink></li>
                    <div className="divider"></div>
                    <li><NavLink className={({ isActive }) => isActive ? 'active' : ''} to="/services">Services</NavLink></li>
                    <div className="divider"></div>
                    <li><HashLink smooth to="/#prices" onClick={closeMenu}>Prices</HashLink></li>
                    <div className="divider"></div>
                    <li><HashLink smooth to="/#gallery" onClick={closeMenu}>Gallery</HashLink></li>
                    <div className="divider"></div>
                    <li><HashLink smooth to="/#cnc-shop" onClick={closeMenu}>CNC Shop</HashLink></li>
                    <div className="divider"></div>
                    <li><NavLink className={({ isActive }) => isActive ? 'active' : ''} to="/contact">Contact Us</NavLink></li>
                </ul>
            </nav>
        </div>
    );
}

export default Menu;
