import React, { useEffect, useState } from 'react';
import './App.css';
import Cart from './Components/Cart/Cart';
import Header from './Components/Header/Header';
import Player from './Components/Player/Player';
import PlayerData from './data/data.json';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import Count from './Components/Count/Count';


function App() {
  const [players, setPlayers] = useState([]);
  const [cart, setCart] = useState([]);
  const [count, setCount] = useState([]);
  useEffect(() => setPlayers(PlayerData), [])

  const handleAddPlayer = (player) => {
    const newCount = [...count, player];
    setCount(newCount);
    const newCart = [...cart, player];
    setCart(newCart);
  }

  return (
    <div className="App">
      <div>
        <Header></Header>
      </div>
      
      <div>
        <Count count={count}></Count>
      </div>

      <div className="cart-container">
        <div className="selected-player">
          {
            cart.map(cart => <Cart cart={cart}></Cart>)
          }
        </div>
      </div>

      <div className="player-container">
        <h3>Total Player:{players.length}</h3>
        <div className="total-player">
          {
            players.map(player => <Player player={player} handleAddPlayer={handleAddPlayer}></Player>)
          }
        </div>
      </div>

    </div>
  );
}

export default App;
