import styled from 'styled-components'
import { colors } from '../../styles'

import { HashLink } from 'react-router-hash-link'

export const Container = styled.footer`
  text-align: center;
  background-color: ${colors.gray};
  padding: 32px 0;
  font-size: 14px;
  color: ${colors.white};
  margin-top: 40px;
`

export const SectionTitle = styled.h4`
  font-size: 16px;
  font-weight: bold;
`

export const Links = styled.ul`
  display: flex;
  gap: 8px;
  justify-content: center;
  margin-top: 16px;
`
export const Link = styled(HashLink)`
  color: #a3a3a3;
`

export const FooterSection = styled.div`
  margin-bottom: 64px;
`
export const Copyright = styled.p`
  line-height: 24px;

  a {
    color: #a3a3a3;

    &:hover {
      text-decoration: underline;
    }
  }
`
