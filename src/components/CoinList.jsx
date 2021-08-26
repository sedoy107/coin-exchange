import Coin from './Coin'

import React from 'react'
import styled from 'styled-components'

const Table = styled.table`
    font-size: 1.2rem;
`

const Thead = styled.thead`
    font-weight: bold;
`

const Td = styled.td`
    text-align: center;
`

export default function CoinList(props) {
        return (
            <Table className='table table-primary table-bordered'> 
                <Thead>
                    <tr>
                        <Td>Name</Td>
                        <Td>Symbol</Td>
                        <Td>Price</Td>
                        <Td>Balance</Td>
                        <Td>Actions</Td>
                    </tr>
                </Thead>
                <tbody>
                    {
                        props.coinData.map( 
                            coin => 
                                <Coin 
                                    key={coin.id} {...coin} 
                                    handleRefresh={props.handleRefresh}
                                    handleTransaction={props.handleTransaction}
                                    balanceHidden={props.balanceHidden}
                                />
                        )
                    }
                </tbody>
            </Table>
        )
}
