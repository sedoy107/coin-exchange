import PropTypes from "prop-types"
import React from 'react'
import styled from 'styled-components'

const Section = styled.section`
    color: white;
    font-size: 2rem;
`

export default function AccountBalance(props) {
    
    const handleClick = (e) => {
        // Disable default form submission action
        e.preventDefault();
        // Call global handler
        props.handleBalanceVisibility()
    }

    const balanceButtonValue = props.balanceHidden ? "Show Balance" : "Hide Balance";
    const balance = props.balanceHidden ? "***" : props.amount;
    return (
        <Section>
            Balance: ${balance}
            <form action="#" method="POST">
                <button onClick={handleClick}>{balanceButtonValue}</button>
            </form>
        </Section>
    )

}


AccountBalance.propTypes = {
    amount: PropTypes.oneOfType([
        PropTypes.string.isRequired,
        PropTypes.number.isRequired,
    ]),
}
