import React, { useState, useEffect } from "react"
import Nav from './components/Nav';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Games from './pages/Games';
import { games } from "./data";
import GameInfo from './pages/GameInfo';
import Cart from './pages/Cart';


function App() {
  const [cart, setCart] = useState([]);

  function addToCart(game) {
    setCart([...cart, { ...game, quantity: 1 }])
  }

  function changeQuantity(game, quantity) {
    setCart(
      cart.map((item) =>
        item.id === game.id
          ? {
            ...item,
            quantity: +quantity,
          }
          : item
      )
    );
  }

  /*Removes an item in the cart */
  function removeItem(item) {
    setCart(cart.filter(game => game.id !== item.id))
    console.log('removeItem', item)
  }

  /*Increases the count of an item being added to the cart */
  function numberOfItems() {
    let counter = 0;
    cart.forEach(item => {
      counter += item.quantity
    })
    return counter;
  }

  useEffect(() => {
    console.log(cart)
  }, [cart])

  return (
    <Router>
      <div className="App">
        <Nav numberOfItems={numberOfItems()} />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/games" exact element={<Games games={games} />} />
          <Route path="/games/:id" element={<GameInfo games={games} addToCart={addToCart} />} />
          <Route path="/cart" element={<Cart games={games} cart={cart} changeQuantity={changeQuantity} removeItem={removeItem} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;