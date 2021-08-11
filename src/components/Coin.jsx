import React, { Component } from 'react'
import PropTypes from "prop-types"
import styled from 'styled-components';

const Td = styled.td`
    border: 1px solid #cccccc;
    width: 25vh;
`

export default class Coin extends Component {

    constructor(props) {
        super(props)
        this.state = {
            price: this.props.price
        }

        // Bind "this" context to the function execution
        this.handleClickRefresh = this.handleClickRefresh.bind(this)
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

    handleClickRefresh(event) {
        // Prevent default action
        event.preventDefault();

        const price_flux = 0.995 + Math.random() * 0.01
            
        this.setState((prevState) => {
            return {
                price: prevState.price * price_flux
            }
        })
    }

    render() {
        return (
            <tr>
                <Td>{this.props.name}</Td>
                <Td>{this.props.ticker}</Td>
                <Td>${this.state.price}</Td>
                <Td>
                    <form action="#" method="POST">
                        <button onClick={this.handleClickRefresh}>Refresh</button>
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
