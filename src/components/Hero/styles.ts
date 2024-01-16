import styled from 'styled-components'
import { TagStyle } from '../Tag/styles'
import { breakpoint } from '../../styles'

export const Banner = styled.div`
  display: block;
  height: 480px;
  width: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  position: relative;
  padding-top: 16px;

  @media (max-width: ${breakpoint.tablet}) {
    background-position: center;
  }

  &::after {
    content: '';
    position: absolute;
    background-color: #000;
    opacity: 0.56;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
  }

  ${TagStyle} {
    margin-right: 8px;
  }

  .container {
    z-index: 1;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
  }
`

export const Infos = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px;
  background-color: rgba(17, 17, 17, 0.8);
  max-width: 290px;
  width: 100%;
  font-weight: bold;

  h2 {
    font-size: 32px;
    line-height: 38px;
  }

  p {
    font-size: 18px;
    line-height: 21px;

    span {
      display: block;
      text-decoration: line-through;
    }
  }
`
