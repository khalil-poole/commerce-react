import React from 'react';
import Game from './ui/Game'; /* Getting the ui components and reusable code from Game.jsx */
import { games } from '../data' /* Getting games from the data folder to be displayed */

/* Lines 9 - 27, displays CSS and data objects on the page*/
const Featured = () => {
    console.log(games); /*Outputs: Pulls all the arrays and its objects (games) from the data set  */
    console.log();
    return (
        <section className="features"> {/*Displays the HTML/CSS of the class from the index.css*/}
            <div className="container"> {/*Displays the HTML/CSS of the class from the index.css*/}
                <div className="row"> {/*Displays the HTML/CSS of the class from the index.css*/}
                    <h2 className="section__title">
                        Featured <span className="orange">Games</span>
                    </h2>
                    <div className="games">
                        {/* Lines 23 - 28, it will only display games that has: 
                    1. an EXACT rating of 5
                    2. displays the matching id values 0, 4 (zero indexing)
                    3. Creates a new array that shows all the games from the data. Imports the game data from Game.jsx 
                    and passes in the matching ids that has the correct filters.
                    */}
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