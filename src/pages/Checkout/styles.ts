import styled from 'styled-components'
import { breakpoint, colors } from '../../styles'

type InputGroupProps = {
  maxWidth?: string
}
type RowProps = {
  marginTop?: string
}

type TabButtonProps = {
  isActive: boolean
}

export const Row = styled.div<RowProps>`
  display: flex;
  gap: 24px;
  margin-top: ${(props) => props.marginTop || '0'};
  align-items: flex-end;

  @media (max-width: ${breakpoint.tablet}) {
    display: block;
  }
`

export const InputGroup = styled.div<InputGroupProps>`
  flex: auto;
  max-width: ${(props) => props.maxWidth || 'auto'};
  label {
    font-size: 14px;
    margin-bottom: 8px;
    display: block;
  }

  input,
  select {
    background-color: ${colors.white};
    border: 1px solid ${colors.white};
    height: 32px;
    padding: 0 8px;
    width: 100%;

    &.error {
      border: 2px solid red;
      border-radius: 4px;
    }
  }

  p {
    font-size: 14px;
    line-height: 22px;
  }

  @media (max-width: ${breakpoint.tablet}) {
    margin-top: 16px;
  }
`
export const TabButton = styled.button.attrs<TabButtonProps>(() => ({
  as: 'button'
}))<TabButtonProps>`
  cursor: pointer;
  padding: 8px;
  font-size: 14px;
  border-radius: 8px;
  color: ${colors.white};
  font-weight: bold;
  background-color: ${(props) =>
    props.isActive ? colors.green : colors.black};
  border: none;
  margin-right: 16px;

  img {
    margin-right: 8px;
  }

  @media (max-width: ${breakpoint.tablet}) {
    margin-top: 8px;
    width: 100%;
  }
`
