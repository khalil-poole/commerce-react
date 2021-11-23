import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import Highlight from './ui/Highlight';

const Highlights = () => {
    return (
        <section id="highlights">
            <div className="container">
                <div className="row">
                    <h2 className="section__title">
                        Why choose <span className="orange">Library</span>
                    </h2>
                    <div className="highlight__wrapper">
                        <Highlight
                            icon={<FontAwesomeIcon icon="bolt" />}
                            title="Easy and Quick"
                            para="Get access to the game you purchased online instantly."
                        />
                        <Highlight
                            icon={<FontAwesomeIcon icon="gamepad" />}
                            title="10,000+ Games"
                            para="Library has games in all your favorite genres."
                        />
                        <Highlight
                            icon={<FontAwesomeIcon icon="tags" />}
                            title="Affordable"
                            para="Get your hands on popular games for as low as $10."
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Highlights;