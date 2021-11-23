import React from 'react'
import { Link } from 'react-router-dom'

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