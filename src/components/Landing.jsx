import React from 'react'
import UndrawArcade from '../assets/undraw_old_day_6x25.svg' //Imports svg file from assets folder
import { Link } from 'react-router-dom' //Renders <a></a> tags within a webpage, HAS to be in hooks

/* Function will load in the landing page */
const Landing = () => {
    return (
        <section id="landing">
            <header>
                <div className="header__container">
                    <div className="header__description">

                        <h2>Find your dream game with <span className="orange">Library</span></h2>
    
                    </div>
                    <figure className="header__img--wrapper">
                        <img src={UndrawArcade} alt="" />
                    </figure>
                </div>
            </header>
        </section>
    );
}

export default Landing;