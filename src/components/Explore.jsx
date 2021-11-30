import React from 'react'
import { Link } from 'react-router-dom' //Renders <a></a> tags within a webpage, HAS to be in hooks

/* Function will return HTML/CSS to explore more games in the /games page */
const Explore = () => {
    return (
        <section id="explore">
            <div className="container">
                <div className="row row__column">
                    <h2>
                        Explore more <span className="orange">Games</span>
                    </h2>
                    <Link to="/games">
                        <button className="btn">Explore Games</button>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default Explore;