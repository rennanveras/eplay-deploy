import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { colors } from '../../styles'

type Props = {
  variant?: 'primary' | 'secondary'
}
export const ButtonStyle = styled.button<Props>`
  padding: 8px 16px;
  border: 2px solid ${colors.white};
  background-color: ${(props) =>
    props.variant === 'primary' ? 'transparent' : colors.green};
  color: ${colors.white};
  font-weight: bold;
  border-radius: 8px;
  border: ${(props) =>
    props.variant === 'primary' ? `2px solid ${colors.white}` : 'none'};
  cursor: pointer;
`
export const ButtonLink = styled(Link)`
  padding: 8px 16px;
  border: 2px solid ${colors.white};
  background-color: transparent;
  color: ${colors.white};
  font-weight: bold;
  border-radius: 8px;
  cursor: pointer;
`
