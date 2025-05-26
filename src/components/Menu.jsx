import { Link } from "react-router-dom";
import { useEffect } from 'react';

const Menu = () => {
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

    return (
        <div>
            <input type="checkbox" id="menuToggle" className="menuToggle" />

            <label htmlFor="menuToggle" className="menuBubbleContainer">
                <div className="iconSquare top-left"></div>
                <div className="iconSquare top-right"></div>
                <div className="iconSquare bottom-left"></div>
                <div className="iconSquare bottom-right"></div>
            </label>

            <nav className="menu">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <div className="divider"></div>
                    <li><Link to="services">Services</Link></li>
                    <div className="divider"></div>
                    <li><Link to="/about">Prices</Link></li>
                    <div className="divider"></div>
                    <li><Link to="/services">Gallery</Link></li>
                    <div className="divider"></div>
                    <li><Link to="/cnc-shop">CNC Shop</Link></li>
                    <div className="divider"></div>
                    <li><Link to="/contact">Contact Us</Link></li>
                </ul>
            </nav>
        </div>
    );
}

export default Menu;
