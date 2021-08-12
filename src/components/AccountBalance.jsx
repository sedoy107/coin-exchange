import PropTypes from "prop-types"
import React, { Component } from 'react'
import styled from 'styled-components'

const Section = styled.section`
    color: white;
    font-size: 2rem;
`

export default class AccountBalance extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        // Disable default form submission action
        e.preventDefault();
        // Call global handler
        this.props.handleBalanceVisibility()
    }

    render() {
        const balanceButtonValue = this.props.balanceHidden ? "Show Balance" : "Hide Balance";
        const balance = this.props.balanceHidden ? "***" : this.props.amount;
        return (
            <Section>
                $ {balance}
                <form action="#" method="POST">
                    <button onClick={this.handleClick}>{balanceButtonValue}</button>
                </form>
            </Section>
        )
    }
}


AccountBalance.propTypes = {
    amount: PropTypes.oneOfType([
        PropTypes.string.isRequired,
        PropTypes.number.isRequired,
    ]),
}
