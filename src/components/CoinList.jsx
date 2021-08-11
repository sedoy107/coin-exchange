import Coin from './Coin'

import React, { Component } from 'react'
import styled from 'styled-components'

const Table = styled.table`
    margin: 50px auto 50px auto;
    display: inline-block;
    font-size: 1.4rem;
    color: white;
`

const Thead = styled.thead`
    font-weight: bold;
`

export default class CoinList extends Component {

    render() {
        return (
            <Table>
                <Thead>
                    <tr>
                        <td>Name</td>
                        <td>Ticker</td>
                        <td>Price</td>
                    </tr>
                </Thead>
                <tbody>
                    {
                        this.props.coinData.map( 
                            coin => <Coin key={coin.ticker} {...coin} handleRefresh={this.props.handleRefresh}/>
                        )
                    }
                </tbody>
            </Table>
        )
    }
}
