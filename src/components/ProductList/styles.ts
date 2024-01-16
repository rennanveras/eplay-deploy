import styled from 'styled-components'
import { breakpoint } from '../../styles'

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  margin-top: 40px;

  @media (max-width: ${breakpoint.desktop}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 554px) {
    grid-template-columns: 1fr;
  }
`
