import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { cores } from '../../styles'

type Props = {
  variant?: 'primary' | 'secondary'
}
export const ButtonStyle = styled.button<Props>`
  padding: 8px 16px;
  border: 2px solid ${cores.branca};
  background-color: ${(props) =>
    props.variant === 'primary' ? 'transparent' : cores.verde};
  color: ${cores.branca};
  font-weight: bold;
  border-radius: 8px;
  border: ${(props) =>
    props.variant === 'primary' ? `2px solid ${cores.branca}` : 'none'};
`
export const ButtonLink = styled(Link)`
  padding: 8px 16px;
  border: 2px solid ${cores.branca};
  background-color: transparent;
  color: ${cores.branca};
  font-weight: bold;
  border-radius: 8px;
`
