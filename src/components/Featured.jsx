import React from 'react';
import Game from './ui/Game';
import { games } from '../data'


const Featured = () => {
    console.log(games);
    console.log();
    return (
        <section className="features">
            <div className="container">
                <div className="row">
                    <h2 className="section__title">
                        Featured <span className="orange">Games</span>
                    </h2>
                    <div className="games">
                        {games
                            .filter((game) => game.rating === 5)
                            .slice(0, 4)
                            .map((game) => (
                                <Game game={game} key={game.id} />
                            ))}
                    </div>
                </div>
            </div>
        </section>
    );
}


export default Featured;