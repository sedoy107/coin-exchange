import React, { Component } from 'react'
import PropTypes from "prop-types"
import styled from 'styled-components'

const Td = styled.td`
    border: 1px solid #cccccc;
    width: 25vh;
`



export default class Coin extends Component {

    handleClick = (e) => {
        // Prevent default action
        e.preventDefault();
        // Call the actual handler propagated from the parent
        this.props.handleRefresh(this.props.id);
    }

    render() {
        const balance = this.props.balanceHidden ? "***" : this.props.balance;
        return (
            <tr>
                <Td>{this.props.name}</Td>
                <Td>{this.props.symbol}</Td>
                <Td>${this.props.price}</Td>
                <Td>{balance}</Td>
                <Td>
                    <form action="#" method="POST">
                        <button onClick={this.handleClick}>Refresh</button>
                    </form>
                </Td>
            </tr>
        )
    }
}

Coin.propTypes = {
    name: PropTypes.string.isRequired,
    symbol: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    balance: PropTypes.oneOfType([
        PropTypes.string.isRequired,
        PropTypes.number.isRequired,
    ]),
}
