import React, { Component } from 'react'
import './Coin.css'
import PropTypes from "prop-types"

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
            <tr className="coin-table-row">
                <td>{this.props.name}</td>
                <td>{this.props.ticker}</td>
                <td>${this.state.price}</td>
                <td>
                    <form action="#" method="POST">
                        <button onClick={this.handleClickRefresh}>Refresh</button>
                    </form>
                </td>
            </tr>
        )
    }
}

Coin.propTypes = {
    name: PropTypes.string.isRequired,
    ticker: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
}
