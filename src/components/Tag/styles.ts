import styled from 'styled-components'
import { colors } from '../../styles'

import { Props } from '.'

export const TagStyle = styled.div<Props>`
  padding: ${(props) => (props.size === 'big' ? '8px 16px' : '4px 6px;')};
  background-color: ${colors.green};
  color: ${colors.white};
  font-size: ${(props) => (props.size === 'big' ? '16px' : '10px')};
  font-weight: bold;
  border-radius: 8px;
  display: inline-block;
`
