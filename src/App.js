import React from 'react'
import './App.css'
import logo from './logo.svg'
import Coin from './components/Coin/Coin'
import AccountBalance from './components/AccountBalance/AccountBalance'
import styled from 'styled-components';

const Table = styled.table`
    margin: 50px auto 50px auto;
    display: inline-block;
    font-size: 1.4rem;
    color: white;
`

const Thead = styled.thead`
    font-weight: bold;
`

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="App Logo" className="App-logo" />
        <h1 className="App-title">
          Coin Exchange Project
        </h1>
      </header>
      <AccountBalance amount={10000}/>
      <Table>
        <Thead>
          <tr>
            <td>Name</td>
            <td>Ticker</td>
            <td>Price</td>
          </tr>
        </Thead>
        <tbody>
          <Coin name="Bitcoin" ticker="BTC" price={38000} />
          <Coin name="Ethereum" ticker="ETH" price={2580} />
          <Coin name="Tether" ticker="USDT" price={1} />
          <Coin name="Chainlink" ticker="LINK" price={23} />
        </tbody>
      </Table>
    </div>
  );
}

export default App;
