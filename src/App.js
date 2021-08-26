import React, {useState, useEffect} from 'react'
import AppHeader from './components/AppHeader'
import CoinList from './components/CoinList'
import AccountBalance from './components/AccountBalance'

import {HashRouter as Router} from 'react-router-dom'

import styled from 'styled-components'
import axios from 'axios'

const COIN_TABLE_LENGTH = 8

const Page = styled.div`
  text-align: center;
  background-color: rgb(27, 53, 94);
`

export default function App(props) {

  const [balance, setBalance] = useState(10000)
  const [balanceHidden, setBalanceHidden] = useState(false)
  const [coinData, setCoinData] = useState([])

  const getCoinData = async (count) => {
    const coinsUrl = 'https://api.coinpaprika.com/v1/coins';
    const coins = (await axios(coinsUrl)).data.slice(0, COIN_TABLE_LENGTH)
    for (let coin of coins) {
      coin.price = await getCoinPrice(coin.id)
    }
    const newCoinData = coins.slice(0,count).map((coin) => {
      return {
        ...coin,
      }
    })
    setCoinData(newCoinData)
  }

  const getCoinPrice = async (id) => {
    const url = `https://api.coinpaprika.com/v1/tickers/${id}`
    const tickerData = (await axios(url)).data;
    return Number(parseFloat(tickerData.quotes.USD.price).toFixed(4))
  }

  const componentDidMount = async () => {
    await getCoinData(COIN_TABLE_LENGTH)
    const updatePeriod = 300 * 1000;
    setInterval(async() => {
      await getCoinData(COIN_TABLE_LENGTH)
    }, updatePeriod);
  }

  useEffect(() => {
    if (coinData.length === 0) {
      componentDidMount()
    }
  })

  const handleRefresh = async (id) => {
    const newPrice = await getCoinPrice(id)
    let newCoinData = coinData.map((coin) => {
      if (coin.id === id) {
        coin.price = newPrice
      }
      return {...coin}
    }) 
    setCoinData(newCoinData)
 }

 const handleBalanceVisibility = () => {
   setBalanceHidden(!balanceHidden)
 }

  return (
    <Router>
    <Page>
      <AppHeader title="Coin Exchange Project" />
      <button onClick={async () => {await getCoinData(COIN_TABLE_LENGTH)}}>Get Coin Data</button>
      <AccountBalance 
        amount={balance} 
        balanceHidden={balanceHidden}
        handleBalanceVisibility = {handleBalanceVisibility}
      />
      <CoinList 
        coinData={coinData} 
        handleRefresh={async (id) => {handleRefresh(id)}}
        balanceHidden={balanceHidden} 
      />
    </Page>
    </Router>
  )
}
