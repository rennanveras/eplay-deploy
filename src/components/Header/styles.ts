import styled from 'styled-components'

import { breakpoint, cores } from '../../styles'

export const HeaderBar = styled.header`
  background-color: ${cores.cinza};
  border-radius: 16px;
  padding: 24px;
  margin-bottom: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  & > div {
    display: flex;
    align-items: center;
  }

  a {
    color: ${cores.branca};
    font-weight: bold;
  }

  @media (max-width: ${breakpoint.tablet}) {
    display: none;
  }
`

export const ListLinks = styled.ul`
  display: flex;
  gap: 16px;
  margin-left: 40px;
`

export const CartButton = styled.a`
  display: flex;
  align-items: center;
  gap: 16px;
  cursor: pointer;
`
