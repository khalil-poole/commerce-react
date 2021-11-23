import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, useParams } from 'react-router-dom'
import Rating from '../components/ui/Rating';
import Price from '../components/ui/Price';
import Game from '../components/ui/Game';

const GameInfo = ({ games, addToCart, cart }) => {
    const { id } = useParams();
    const game = games.find((game) => +game.id === +id);

    function addGameToCart(game) {
        addToCart(game);
    }

    {/*function gameExistsOnCart() {
        return games.find(game => game.id === +id);
    }*/}

    return (
        <div id="games__body">
            <main id="games__main">
                <div className="games__container">
                    <div className="row">
                        <div className="game__selected--top">
                            <Link to="/games" className="game__link">
                                <FontAwesomeIcon icon="arrow-left" />
                            </Link>
                            <Link to="/games">
                                <h2 className="game__selected--title--top"><span className="orange">Games</span></h2>
                            </Link>
                        </div>
                        <div className="game__selected">
                            <figure className="game__selected--figure">
                                <img src={game.url} alt="" className="game__selected-img" />
                            </figure>
                            <div className="game__selected-description">
                                <h2 className="game__selected--title">{game.title}</h2>
                                <Rating rating={game.rating} />
                                <div className="game__selected--price">
                                    <Price originalPrice={game.originalPrice} salePrice={game.salePrice} />
                                </div>
                                <div className="game__summary">
                                    <h3 className="game__summary--title">
                                        Summary
                                    </h3>
                                    <p className="game__summary--para">
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                        Cum magni laudantium fugit soluta voluptatem dolorum deleniti laboriosam molestiae,
                                        nemo beatae minus, quisquam laborum ex asperiores ullam illum numquam accusamus ipsa!
                                    </p>
                                    <p className="game__summary--para">
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                        Cum magni laudantium fugit soluta voluptatem dolorum deleniti laboriosam molestiae,
                                        nemo beatae minus, quisquam laborum ex asperiores ullam illum numquam accusamus ipsa!
                                    </p>
                                </div>
                                {/*
                                    The commented lines of code is part of my to-do list to fix!

                                {gameExistsOnCart() ? (
                                    <Link to={`/cart`} className="game__link">
                                        <button className="btn">Checkout</button>
                                    </Link>
                                ) : (
                                    <button className="btn" onClick={() => addGameToCart(game)}>
                                        Add to Cart
                                    </button>
                                )} */}
                                <Link to={`/cart`} className="game__link">
                                    <button className="btn" onClick={() => addGameToCart(game)}>
                                        Add to Cart
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="games__container">
                    <div className="row">
                        <div className="game__selected--top">
                            <h2 className="game__selected--title--top">
                                Recommended Games
                            </h2>
                        </div>
                        <div className="games">
                            {games
                                .filter((game) => game.rating === 4 && +game.id !== +id)
                                .slice(0, 4)
                                .map((game) => (
                                    <Game game={game} key={game.id} />
                                ))}
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default GameInfo;