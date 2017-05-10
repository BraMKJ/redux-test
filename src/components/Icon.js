import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { size } from 'polished'

const Icon = ({name, ...props}) => {
  require(`../assets/icons/${name}.svg`);
  return (
    <Svg {...props}>
      <title id={`icon-${name}-title`}>{name}</title>
      <use pointerEvents="none" xlinkHref={`#${name}`} />
    </Svg>
  )
}

Icon.propTypes = {
  name: PropTypes.string.isRequired
}

const Svg = styled.svg`
  ${size('32px', '32px')}
`

export default Icon