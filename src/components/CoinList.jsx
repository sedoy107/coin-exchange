import Coin from './Coin'

import React from 'react'
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

export default function CoinList(props) {

        return (
            <Table>
                <Thead>
                    <tr>
                        <td>Name</td>
                        <td>Symbol</td>
                        <td>Price</td>
                        <td>Balance</td>
                    </tr>
                </Thead>
                <tbody>
                    {
                        props.coinData.map( 
                            coin => 
                                <Coin 
                                    key={coin.id} {...coin} 
                                    handleRefresh={props.handleRefresh}
                                    balanceHidden={props.balanceHidden}
                                />
                        )
                    }
                </tbody>
            </Table>
        )
}
