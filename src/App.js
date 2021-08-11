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
  }

  render() {
    return (
      <Page>
        <AppHeader title="Coin Exchange Project"/>
        <AccountBalance amount={this.state.balance}/>
        <CoinList coinData={this.state.coinData} />
      </Page>
    )
  }
}

export default App
