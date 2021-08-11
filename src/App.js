import React from 'react'
import AppHeader from './components/AppHeader'
import CoinList from './components/CoinList'
import AccountBalance from './components/AccountBalance'

import styled from 'styled-components'

const Page = styled.div`
  text-align: center;
  background-color: rgb(27, 53, 94);
`
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

    this.handleRefresh = this.handleRefresh.bind(this)
  }

  handleRefresh(ticker) {

    const price_flux = 0.995 + Math.random() * 0.01

    let newCoinData = this.state.coinData.map((coin) => {
      if (coin.ticker === ticker) {
        return {
          name: coin.name,
          ticker: coin.ticker,
          price: Math.round(coin.price * price_flux * 1000) / 1000 
        }
      }
      return {...coin}
    })
        
    this.setState({coinData: newCoinData})
}

  render() {
    return (
      <Page>
        <AppHeader title="Coin Exchange Project" />
        <AccountBalance amount={this.state.balance} />
        <CoinList 
          coinData={this.state.coinData} 
          handleRefresh={this.handleRefresh} />
      </Page>
    )
  }
}

export default App
