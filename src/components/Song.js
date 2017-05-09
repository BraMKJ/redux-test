import React from 'react'
import styled from 'styled-components'
import zIndex from '../style-utils/zindex'

const Song = (props) => (
  <Component>
    <Title>{props.name}</Title>
    <Info>
      <span>{props.artist}</span>
      <span>{props.status}</span>
    </Info>
  </Component>
)

const Component = styled.div`
  padding: 16px;
  border: 1px solid #ddd;
  border-bottom: 0;
  
  &:last-child {
    border-bottom: 1px solid #ddd;
  }
`

const Title = styled.span`
  display: block;
  margin-bottom: 8px;
  font-weight: bold;
  z-index: ${zIndex('blockingLoader')}
`

const Info = styled.div`
  display: flex;
  justify-content: space-between;
`

export default Song