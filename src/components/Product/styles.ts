import { Link } from 'react-router-dom'

import styled from 'styled-components'
import { colors } from '../../styles'
import { TagStyle } from '../Tag/styles'

export const CardProduct = styled(Link)`
  background-color: ${colors.gray};
  padding: 8px;
  border-radius: 8px;
  position: relative;
  text-decoration: none;
  display: block;
  color: ${colors.white};
  height: 100%;

  img {
    display: block;
    width: 100%;
    object-fit: cover;
    height: 250px;
  }

  ${TagStyle} {
    margin-right: 8px;
  }
`

export const Title = styled.h3`
  font-size: 16px;
  font-weight: bold;
  margin-top: 16px;
  margin-bottom: 8px;
  display: block;
`

export const Description = styled.p`
  line-height: 22px;
  font-size: 14px;
  margin-bottom: 16px;
  margin-top: 16px;
  display: block;
`

export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 8px;
`
