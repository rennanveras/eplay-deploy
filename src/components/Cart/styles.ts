import styled from 'styled-components'

import { breakpoint, colors } from '../../styles'
import { ButtonStyle } from '../Button/styles'

import close from '../../assets/images/gadgets/close.png'

export const CartContainer = styled.div`
  position: fixed;
  inset: 0;
  max-width: 100%;
  width: 0;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 1;

  &.is-open {
    display: flex;
    width: 100%;
  }
`

export const Overlay = styled.div`
  position: absolute;
  inset: 0;
  width: inherit;
  height: inherit;
  background-color: #000;
  opacity: 0.7;
`
export const Sidebar = styled.aside`
  background-color: ${colors.gray};
  z-index: 1;
  padding: 40px 16px 0;
  color: ${colors.white};
  max-width: 360px;
  width: 100%;

  ${ButtonStyle} {
    width: 100%;
  }

  @media (max-width: ${breakpoint.tablet}) {
    width: 260px;
  }

  .empty-text {
    font-size: 14px;
    line-height: 22px;
    color: ${colors.white};
    text-align: center;
  }
`

export const Quantity = styled.p`
  font-weight: bold;
  font-size: 16px;
  margin-top: 32px;
  margin-bottom: 16px;
`

export const Prices = styled.p`
  font-weight: bold;
  font-size: 14px;
  margin-bottom: 24px;

  span {
    display: block;
    font-size: 12px;
    color: ${colors.lightGray};
  }
`

export const CartItem = styled.li`
  position: relative;
  display: flex;
  gap: 23px;
  border-bottom: 1px solid ${colors.lightGray};
  padding: 8px 0;

  div {
    max-width: 200px;
  }

  img {
    height: 80px;
    width: 80px;
    object-fit: cover;
  }

  h3 {
    font-size: 16px;
    font-weight: bold;
  }

  span {
    font-size: 14px;
    font-weight: bold;
    display: block;
  }

  .area-tags {
    display: flex;
    gap: 8px;
    margin-top: 8px;
    margin-bottom: 16px;
    flex-wrap: wrap;
  }

  button {
    background-image: url(${close});
    width: 16px;
    height: 16px;
    border: none;
    background-color: transparent;
    position: absolute;
    right: 0;
    top: 8px;
    cursor: pointer;
  }

  @media (max-width: ${breakpoint.tablet}) {
    div {
      max-width: 100px;
    }

    img {
      height: 70px;
      width: 70px;
    }

    h3 {
      font-size: 14px;
    }
  }
`
