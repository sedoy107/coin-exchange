import React from 'react'
import './App.css'
import logo from './logo.svg'
import Coin from './components/Coin/Coin'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="App Logo" className="App-logo" />
        <h1 className="App-title">
          Coin Exchange Project
        </h1>
      </header>
      <table className="coin-table">
        <thead className="coin-table-header">
          <tr>
            <td>Name</td>
            <td>Ticker</td>
            <td>Price</td>
          </tr>
        </thead>
        <tbody>
          <Coin name="Bitcoin" ticker="BTC" price={38000} />
          <Coin name="Ethereum" ticker="ETH" price={2580} />
          <Coin name="Tether" ticker="USDT" price={1} />
          <Coin name="Chainlink" ticker="LINK" price={23} />
        </tbody>
      </table>
    </div>
  );
}

export default App;
