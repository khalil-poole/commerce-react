import React from 'react'
import Logo from "../assets/Library.svg" //Imports svg image from the assets folder
import { Link } from "react-router-dom" //Renders <a></a> tags within a webpage, HAS to be in hooks

/* Function will display the end of page HTML/CSS with links to other parts of the app */
const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="row row__column">
                    <Link to="/">
                        <figure className="footer__logo">
                            <img src={Logo} alt="" className="footer__logo--img" />
                        </figure>
                    </Link>
                    <div className="footer__list">
                        <Link to="/" className="footer__link">Home</Link>
                        <span className="footer__link no-cursor">About</span>
                        <Link to="/games" className="footer__link">Games</Link>
                        <Link to="/cart" className="footer__link">Cart</Link>
                    </div>
                    <div className="footer__copyright">Copyright &copy; 2021 Library</div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;