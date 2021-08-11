import React, { Component } from 'react'
import PropTypes from "prop-types"
import styled from 'styled-components'

const Td = styled.td`
    border: 1px solid #cccccc;
    width: 25vh;
`

export default class Coin extends Component {

    constructor(props) {
        super(props)
        // Bind "this" context to the function execution
        this.handleClick = this.handleClick.bind(this)
    }

    /* componentDidMount() {
        const period = 500;
        const callback = () => {
            const price_flux = 0.995 + Math.random() * 0.01
            
            this.setState((prevState) => {
                return {
                    price: prevState.price * price_flux
                }
            })
        }

        setInterval(callback, period)
    } */

    handleClick(e) {
        // Prevent default action
        e.preventDefault();
        // Call the actual handler propagated from the parent
        this.props.handleRefresh(this.props.ticker);
    }

    render() {
        return (
            <tr>
                <Td>{this.props.name}</Td>
                <Td>{this.props.ticker}</Td>
                <Td>${this.props.price}</Td>
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
    ticker: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
}
