import React, { Component } from 'react'
import PropTypes from "prop-types"
import styled from 'styled-components'

const Td = styled.td`
    width: 20vh;
    text-align: left;
`

const TdPrice = styled(Td)`
    text-align: right;
`

const TdBalance = styled(Td)`
    text-align: center;
`

const TdActions = styled(Td)`
    min-width: 25vh;
    text-align: center;
`

const Button = styled.button`
    margin: 0 2px;
    width: 51px;
`

var formatter = Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
})

export default class Coin extends Component {

    handleRefresh = (e) => {
        e.preventDefault();
        this.props.handleRefresh(this.props.id);
    }

    handleBuy = (e) => {
        e.preventDefault();
        this.props.handleTransaction(this.props.id, true);
    }

    handleSell = (e) => {
        e.preventDefault();
        this.props.handleTransaction(this.props.id, false);
    }

    render() {
        const balance = this.props.balanceHidden ? "***" : this.props.balance;
        return (
            <tr>
                <Td>{this.props.name}</Td>
                <Td>{this.props.symbol}</Td>
                <TdPrice>{formatter.format(this.props.price)}</TdPrice>
                <TdBalance>{balance}</TdBalance>
                <TdActions>
                    <form action="#" method="POST">
                        <Button 
                        onClick={this.handleRefresh}
                        className={'btn btn-light'}>
                            <i className="fas fa-sync-alt"></i>
                        </Button>
                        <Button 
                        onClick={this.handleBuy}
                        className={'btn btn-info'}>
                            Buy
                        </Button>
                        <Button 
                        onClick={this.handleSell}
                        className={'btn btn-danger'}>
                            Sell
                        </Button>
                    </form>
                </TdActions>
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
