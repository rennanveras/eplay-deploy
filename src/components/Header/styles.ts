import styled from 'styled-components'

import { breakpoint, colors } from '../../styles'

export const ListLinks = styled.ul`
  display: flex;
  gap: 16px;
  margin-left: 40px;

  @media (max-width: ${breakpoint.tablet}) {
    margin-left: 0;
    display: block;
  }
`

export const HeaderBar = styled.header`
  background-color: ${colors.gray};
  border-radius: 16px;
  padding: 24px;
  margin-bottom: 80px;

  a,
  span {
    color: ${colors.white};
    font-weight: bold;
  }

  h1 {
    line-height: 0;
  }
`

export const HeaderRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  > div {
    display: flex;
    align-items: center;

    @media (max-width: ${breakpoint.tablet}) {
      flex: 1;
      justify-content: space-between;

      ${ListLinks} {
        display: none;
      }
    }
  }
`

export const CartButton = styled.span`
  display: flex;
  align-items: center;
  gap: 16px;
  cursor: pointer;

  @media (max-width: ${breakpoint.tablet}) {
    gap: 0;
    span {
      display: none;
    }
  }
`

export const NavMobile = styled.nav`
  display: none;

  @media (max-width: ${breakpoint.desktop}) {
    &.is-open {
      display: none;
    }
  }
  @media (max-width: ${breakpoint.tablet}) {
    &.is-open {
      display: block;
    }
  }
`

export const Hamburguer = styled.div`
  width: 32px;
  cursor: pointer;
  span {
    height: 2px;
    display: block;
    width: 100%;
    background-color: ${colors.white};
    margin-bottom: 6px;
  }

  @media (min-width: ${breakpoint.tablet}) {
    display: none;
  }
`

export const LinkItem = styled.li`
  @media (max-width: ${breakpoint.tablet}) {
    display: block;

    a {
      display: block;
      padding: 16px 0;
      text-align: center;
    }
  }
`
