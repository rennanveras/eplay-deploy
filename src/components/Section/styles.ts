import styled from 'styled-components'

import { Props } from '.'
import { cores } from '../../styles'
import { CardProduct } from '../Product/styles'

export const Container = styled.section<Omit<Props, 'title' | 'games'>>`
  padding: 32px 0;
  background-color: ${(props) =>
    props.background === 'black' ? cores.preto : cores.cinza};

  ${CardProduct} {
    background-color: ${(props) =>
      props.background === 'gray' ? cores.preto : cores.cinza};
  }

  p {
    font-size: 14px;
    line-height: 22px;
    max-width: 640px;
  }
`

export const Title = styled.h2`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 40px;
`

export const galeria = styled.div`
  border-radius: 8px;
  border: 2px solid ${cores.branca};
`
