import PropTypes from "prop-types"
import React, { Component } from 'react'
import styled from 'styled-components'

const Section = styled.section`
    color: white;
    font-size: 2rem;
`

export default class AccountBalance extends Component {
    render() {
        return (
            <Section>
                $ {this.props.amount}
            </Section>
        )
    }
}


AccountBalance.propTypes = {
    amount: PropTypes.string.isRequired,
}
