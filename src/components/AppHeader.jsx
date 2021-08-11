import logo from '../assets/logo.svg'
import styled from 'styled-components';

import React, { Component } from 'react'

const Img = styled.img`
  height: 4rem;
  pointer-events: none;
  
  @media (prefers-reduced-motion: no-preference) {
    animation: App-logo-spin infinite 20s linear;
  }
  
  @keyframes App-logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`

const Header = styled.header`
  background-color: #3b4c6d;
  min-height: 10vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  color: white;
`

const H1 = styled.h1`
  font-size: 2rem;
`

export default class AppHeader extends Component {
  render() {
    return (
      <Header>
        <Img src={logo} alt="App Logo"/>
        <H1>
            Coin Exchange Project
        </H1>
      </Header>
    )
  }
}
