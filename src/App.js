import React from 'react'
import './App.css'
import AppHeader from './components/AppHeader'
import CoinList from './components/CoinList'
import AccountBalance from './components/AccountBalance'
class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      balance: 10000,
      coinData: [
        {
          name: "Bitcoin",
          ticker: "BTC",
          price: 38000
        },
        {
          name: "Ethereum",
          ticker: "ETH",
          price: 2580
        },
        {
          name: "Tether",
          ticker: "USDT",
          price: 1
        },
        {
          name: "Chainlink",
          ticker: "LINK",
          price: 23
        },
      ],
    }
  }

  render() {
    return (
      <div className="App">
        <AppHeader />
        <AccountBalance amount={this.state.balance}/>
        <CoinList coinData={this.state.coinData} />
      </div>
    )
  }
}

export default App
