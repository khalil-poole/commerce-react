import EmptyCart from '../assets/empty_cart.svg'
import { Link } from 'react-router-dom'; //Renders <a></a> tags within a webpage, HAS to be in hooks

const Cart = ({ cart, changeQuantity, removeItem }) => {
    const total = () => {
        let price = 0;
        cart.forEach((item) => {
            price += +(
                (item.salePrice || item.originalPrice) * item.quantity
            );
        });
        return price;
    };

    return (
        <div id="games__body">
            <main id="games__main">
                <div className="games__container">
                    <div className="row">
                        <div className="game__selected--top">
                            <h2 className="cart__title">Cart</h2>
                        </div>
                        <div className="cart">
                            <div className="cart__header">
                                <span className="cart__game">Game</span>
                                <span className="cart__quantity">Quantity</span>
                                <span className="cart__total">Price</span>
                            </div>
                            <div className="cart__body">
                                {cart.map(game => {
                                    return (
                                        <div className="cart__item" key={game.id}>
                                            <div className="cart__game">
                                                <img src={game.url} className="cart__game--img" alt="" />

                                                <div className="cart__game--info">
                                                    <span className="cart__game--title">
                                                        {game.title}
                                                    </span>
                                                    <span className="cart__game--price">
                                                        ${((game.salePrice || game.originalPrice).toFixed(2))}
                                                    </span>
                                                    <button className="cart__game--remove" onClick={() => removeItem(game)}>
                                                        Remove
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="cart__quantity">
                                                <input
                                                    type="number"
                                                    min={0}
                                                    max={99}
                                                    className="cart__input"
                                                    value={game.quantity}
                                                    onChange={(event) => changeQuantity(game, event.target.value)}
                                                />
                                            </div>
                                            <div className="cart__total">
                                                ${((game.salePrice || game.originalPrice) * game.quantity).toFixed(2)}
                                            </div>
                                        </div>
                                    );
                                })};

                            </div>
                            {cart.length === 0 && (
                                <div className="cart__empty">
                                    <img src={EmptyCart} alt="" className="cart__empty--img" />
                                    <h2>You don't have any items in you cart!</h2>
                                    <Link to="/games">
                                        <button className="btn">Browse Games</button>
                                    </Link>
                                </div>
                            )}
                        </div>
                        {cart.length > 0 && (<div className="total">
                            <div className="total__item total__sub-total">
                                <span>Subtotal</span>
                                <span>${(total() * 0.98).toFixed(2)}</span>
                            </div>
                            <div className="total__item total__tax">
                                <span>Tax</span>
                                <span>${(total() * 0.02).toFixed(2)}</span>
                            </div>
                            <div className="total__item total__price">
                                <span>Total</span>
                                <span>${total().toFixed(2)}</span>
                            </div>
                            <button className="btn btn__checkout no-cursor"
                                onClick={() => alert(`Haven't got around to doing this :(`)}>
                                Proceed to checkout
                            </button>
                        </div>
                        )}
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Cart;