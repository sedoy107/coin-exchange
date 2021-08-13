import React from 'react'
import AppHeader from './components/AppHeader'
import CoinList from './components/CoinList'
import AccountBalance from './components/AccountBalance'

import styled from 'styled-components'
import axios from 'axios'

const COIN_TABLE_LENGTH = 10

const Page = styled.div`
  text-align: center;
  background-color: rgb(27, 53, 94);
`

class App extends React.Component {

  state = {
    balance: 10000,
    balanceHidden: false,
    coinData: [],
  }

  componentDidMount = async () => {
        await this.getCoinData(COIN_TABLE_LENGTH)
        const updatePeriod = 300 * 1000;
        setInterval(async() => {
          await this.getCoinData(COIN_TABLE_LENGTH)
        }, updatePeriod);
    }

  getCoinData = async (count) => {
    const coinsUrl = 'https://api.coinpaprika.com/v1/coins';
    
    const coins = (await axios(coinsUrl)).data

    for (let i = 0; i < count; i++) {
      coins[i].price = await this.getCoinPrice(coins[i].id)
    }

    const newCoinData = coins.slice(0,count).map((coin) => {
      return {
        ...coin,
      }
    })

    this.setState({coinData: newCoinData})
  }

  getCoinPrice = async (id) => {
    const url = `https://api.coinpaprika.com/v1/tickers/${id}`
    const tickerData = (await axios(url)).data;
    return Math.round(tickerData.quotes.USD.price * 1000) / 1000
  }

  handleRefresh = async (id) => {

    const newPrice = await this.getCoinPrice(id)
    
    let newCoinData = this.state.coinData.map((coin) => {
      if (coin.id === id) {
        coin.price = newPrice
      }
      return {...coin}
    })
        
    this.setState({coinData: newCoinData})
 }

 handleBalanceVisibility = () => {
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
        <button onClick={async () => {await this.getCoinData(COIN_TABLE_LENGTH)}}>Get Coin Data</button>
        <AccountBalance 
          amount={this.state.balance} 
          balanceHidden={this.state.balanceHidden}
          handleBalanceVisibility = {this.handleBalanceVisibility}
        />
        <CoinList 
          coinData={this.state.coinData} 
          handleRefresh={async (id) => {this.handleRefresh(id)}}
          balanceHidden={this.state.balanceHidden} 
        />
      </Page>
    )
  }
}

export default App
