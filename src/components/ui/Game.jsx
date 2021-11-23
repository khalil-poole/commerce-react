import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom'
import Rating from './Rating';
import Price from './Price';

const Game = ({ game }) => {
    const [img, setImg] = useState();

    const mountedRef = useRef(true);

    useEffect(() => {
        const image = new Image();
        image.src = game.url;
        image.onload = () => {
            setTimeout(() => {
                if (mountedRef.current) {
                    setImg(image);
                }
            }, 300);
        };
        return () => {
            //When the component unmounts
            mountedRef.current = false;
        }
    })

    return (
        <div className="game">
            {
                img ? (
                    <>
                        <Link to={`/games/${game.id}`}>
                            <figure className="game__img--wrapper">
                                <img
                                    src={img.src}
                                    alt=""
                                    className="game__img"
                                />
                            </figure>
                        </Link>
                        <div className="game__title">
                            <Link to={`/games/${game.id}`} className="game__title--link">
                                {game.title}
                            </Link>
                        </div>
                        <Rating rating={game.rating} />
                        <Price salePrice={game.salePrice} originalPrice={game.originalPrice}
                        />
                    </>
                ) : (
                    <>
                        <div className="game__img--skeleton"></div>
                        <div className="skeleton game__title--skeleton"></div>
                        <div className="skeleton game__rating--skeleton"></div>
                        <div className="skeleton game__price--skeleton"></div>
                    </>
                )}
        </div>
    );
};

export default Game;
