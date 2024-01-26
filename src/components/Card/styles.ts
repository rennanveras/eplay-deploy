import styled from 'styled-components'
import { colors } from '../../styles'

export const Container = styled.div`
  border-radius: 8px;
  background-color: ${colors.gray};
  padding: 24px;
  margin-bottom: 4px;
  margin-bottom: 40px;

  h2,
  h3 {
    font-weight: bold;
    font-size: 18px;
    color: ${colors.white};
    margin-bottom: 24px;
  }

  .margin-top {
    margin-top: 24px;
  }
`