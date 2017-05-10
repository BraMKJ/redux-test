import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import Wrapper from './Wrapper'
import Button from './Button'
import Icon from './Icon'

const Header = ({menuIsActive, onMenuToggleClick}) => (
  <Component>
    <Wrapper>
      <Logo>Bandmanager</Logo>
      <Button onClick={() => onMenuToggleClick()}>
        <Icon name="menu"/>
      </Button>
      {menuIsActive &&
        <nav className="main">
          <StyledLink to='/'>Home</StyledLink>
          <StyledLink to='/songs'>Songs</StyledLink>
        </nav>
      }
    </Wrapper>
  </Component>
)

Header.propTypes = {
  onMenuToggleClick: PropTypes.func.isRequired
}

const Component = styled.div`
  display: flex;
  
  > div {
    position: relative;
  }
  
  nav {
    position: absolute;
    display: flex;
    width: 100%;
    align-items: center;
    flex-direction: column;
    padding: 16px 0;
    background-color: black;
  }
`
const StyledLink = styled(Link)`
  margin-bottom: 16px;
  color: #fff;
  
  &:last-child {
    margin: 0;
  }
`

const Logo = styled.h1`
font-size: 20px`

export default Header