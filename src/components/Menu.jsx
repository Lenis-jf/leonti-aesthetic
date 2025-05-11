import { Link } from "react-router-dom";

const Menu = () => {
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
                    <li><Link to="/">Services</Link></li>
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
