import React, { useState } from 'react'
import Game from '../components/ui/Game';


const Games = ({ games: initialGames }) => {
    const [games, setGames] = useState(initialGames);

    function filterGames(filter) {
        console.log(filter)
        /* How to sort items from lowest price to highest price */
        if (filter === 'LOW_TO_HIGH') {
            setGames(games.slice().sort((a, b) => (a.salePrice || a.originalPrice) - (b.salePrice || b.originalPrice)));
        }
        /* How to sort items from highest price to lowest price */
        if (filter === 'HIGH_TO_LOW') {
            setGames(games.slice().sort((a, b) => (b.salePrice || b.originalPrice) - (a.salePrice || a.originalPrice)));
        }
        /* How to sort items from lowest rated to highest rated */
        if (filter === 'RATING_LOW') {
            setGames(games.slice().sort((a, b) => a.rating - b.rating));
        }
        if (filter === 'RATING_HIGH') {
            setGames(games.slice().sort((a, b) => b.rating - a.rating));
        }
        /* How to sort items from highest rated to lowest rated */

    }
    return (
        <div className="games__body">
            <main id="games__main">
                <section>
                    <div className="games__container">
                        <div className="row">
                            <div className="games__header">
                                <h2 className="section__title games__header--title">
                                    More <span className="orange">Games</span>
                                </h2>
                                <select id="filter" onChange={(event) => filterGames(event.target.value)}>
                                    <option value="DEFAULT" disabled selected>Sort</option>
                                    <option value="LOW_TO_HIGH">Price, Low to High</option>
                                    <option value="HIGH_TO_LOW">Price, High to Low</option>
                                    <option value="RATING_LOW">Rating, Low to High</option>
                                    <option value="RATING_HIGH">Rating, High to Low</option>
                                </select>
                            </div>
                            <div className="games">
                                {games.map(game => (
                                    <Game game={game}
                                        key={game.id} />
                                ))}

                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default Games;

