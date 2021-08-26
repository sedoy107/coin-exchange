import React, {useState, useEffect} from 'react'
import AppHeader from './components/AppHeader'
import CoinList from './components/CoinList'
import AccountBalance from './components/AccountBalance'

import {HashRouter as Router} from 'react-router-dom'

import styled from 'styled-components'
import axios from 'axios'

//import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootswatch/dist/darkly/bootstrap.min.css'
import '@fortawesome/fontawesome-free/js/all'

const COIN_TABLE_LENGTH = 8

const Page = styled.div`
  background-color: rgb(27, 53, 94);
`

const Block = styled.div`
  margin: 12px 0;
`

const Controls = styled(Block)`
  text-align: left;
  margin-left: 8px;
`

const Button = styled.button`
  margin: 0 0px;
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
        balance: 0
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

 const handleTransaction = (id, isBuy) => {
  const changeBalanceAmount = isBuy ? 1 : -1

  let newCoinData = coinData.map((coin) => {
    if (coin.id === id) {
      coin.balance += changeBalanceAmount
      setBalance(bal => bal - changeBalanceAmount * coin.price)
    }
    return {...coin}
  }) 
  setCoinData(newCoinData)
}

 const handleBalanceVisibility = () => {
   setBalanceHidden(!balanceHidden)
 }

 const handleBrrr = () => {
   setBalance(bal => bal += 1200)
 }

  return (
    <Router>
    <Page>
      <AppHeader title="Coin Exchange Project" />
      <Controls>
        <Button 
        onClick={async () => {await getCoinData(COIN_TABLE_LENGTH)}} 
        className='btn btn-primary'>
          Refresh
        </Button>
        <AccountBalance 
          amount={balance} 
          balanceHidden={balanceHidden}
          handleBalanceVisibility = {handleBalanceVisibility}
          handleBrrr = {handleBrrr}
        />
      </Controls>
      <CoinList 
        coinData={coinData} 
        handleRefresh={async (id) => {handleRefresh(id)}}
        handleTransaction={handleTransaction}
        balanceHidden={balanceHidden} 
      />
    </Page>
    </Router>
  )
}
