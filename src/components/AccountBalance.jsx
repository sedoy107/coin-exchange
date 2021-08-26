import PropTypes from "prop-types"
import React from 'react'
import styled from 'styled-components'

const Section = styled.section`
    color: white;
    font-size: 2rem;
`
const Button = styled.button`
    margin-right: 0px;
`;

const BalanceToggleButton = styled(Button)`
    margin-left: 8px;
`;

var formatter = Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
})

export default function AccountBalance(props) {
    
    const handleBalanceVisibility = (e) => {
        // Disable default form submission action
        e.preventDefault();
        // Call global handler
        props.handleBalanceVisibility()
    }

    const handleBrrr = (e) => {
        e.preventDefault()
        props.handleBrrr()
    }

    const balanceButtonValue = props.balanceHidden ? "Show Balance" : "Hide Balance";
    const balance = props.balanceHidden ? "***" : formatter.format(props.amount);
    const buttonClass = 'btn ' + (props.balanceHidden ? 'btn-warning' : 'btn-info');
    return (
        <Section>
            Balance: {balance}
            <form action="#" method="POST">
                <Button onClick={handleBalanceVisibility} className={buttonClass}>
                    {balanceButtonValue}
                </Button>
                <BalanceToggleButton onClick={handleBrrr} className='btn btn-success'>
                    <i className="fas fa-helicopter"></i>
                </BalanceToggleButton>
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
