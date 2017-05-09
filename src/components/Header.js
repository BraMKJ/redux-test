import React from 'react'
import styled from 'styled-components'
import Wrapper from './Wrapper'

const Header = (props) => (
  <Component>
    <Wrapper>
      <Logo>Bandmanager</Logo>
      <nav className="main">
        {props.children}
      </nav>
    </Wrapper>
  </Component>
)

const Component = styled.div`
  display: flex;
  
  nav {
    display: flex;
    justify-content: space-around;
  }
`

const Logo = styled.h1`
font-size: 20px`

export default Header