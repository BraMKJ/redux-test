import React from 'react'
import styled from 'styled-components'

const Wrapper = (props) => (
  <Component>
    {props.children}
  </Component>
)

const Component = styled.div`
  display: block;
  margin: 0 auto;
  width: 320px;
`

export default Wrapper