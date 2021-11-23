import React from 'react'
import { games } from '../data'
import Game from "./ui/Game"


const Discounted = () => {
    return (
        <section id="recent">
            <div className="container">
                <div className="row">
                    <h2 className="section__title">
                        Discount <span className="orange">Games</span>
                    </h2>
                    <div className="games">
                        {games
                            .filter(game => game.salePrice > 0)
                            .slice(0, 8)
                            .map((game) => (
                                <Game game={game} key={game.id} />
                            ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Discounted;