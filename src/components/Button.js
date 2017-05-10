import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Button = ({...props, onClick}) => (
  <Component onClick={onClick}>
    {props.children}
  </Component>
)

Button.propTypes = {
  onClick: PropTypes.func.isRequired
}

const Component = styled.button`
  padding: 8px;
  box-sizing: border-box;
`

export default Button