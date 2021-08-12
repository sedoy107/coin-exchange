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
      balanceHidden: false,
      coinData: [
        {
          name: "Bitcoin",
          ticker: "BTC",
          price: 38000,
          balance: 0.5,
        },
        {
          name: "Ethereum",
          ticker: "ETH",
          price: 2580,
          balance: 3.2,
        },
        {
          name: "Tether",
          ticker: "USDT",
          price: 1,
          balance: 1000,
        },
        {
          name: "Chainlink",
          ticker: "LINK",
          price: 23,
          balance: 0,
        },
      ],
    }

    this.handleRefresh = this.handleRefresh.bind(this)
    this.handleBalanceVisibility = this.handleBalanceVisibility.bind(this)
  }

  handleRefresh(ticker) {

    const price_flux = 0.995 + Math.random() * 0.01

    let newCoinData = this.state.coinData.map((coin) => {
      if (coin.ticker === ticker) {
        return {
          name: coin.name,
          ticker: coin.ticker,
          price: Math.round(coin.price * price_flux * 1000) / 1000,
          balance: coin.balance,
        }
      }
      return {...coin}
    })
        
    this.setState({coinData: newCoinData})
 }

 handleBalanceVisibility() {
   this.setState((prevState) => {
     return {
       ...prevState,
       balanceHidden: !this.state.balanceHidden
     }
   })
 }

  render() {
    return (
      <Page>
        <AppHeader title="Coin Exchange Project" />
        <AccountBalance 
          amount={this.state.balance} 
          balanceHidden={this.state.balanceHidden}
          handleBalanceVisibility = {this.handleBalanceVisibility}
        />
        <CoinList 
          coinData={this.state.coinData} 
          handleRefresh={this.handleRefresh}
          balanceHidden={this.state.balanceHidden} 
        />
      </Page>
    )
  }
}

export default App
