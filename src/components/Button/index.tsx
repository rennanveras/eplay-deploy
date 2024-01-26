import * as S from './styles'

type Props = {
  type: 'button' | 'link' | 'submit'
  title: string
  to?: string
  onClick?: () => void
  children: React.ReactNode
  variant?: 'primary' | 'secondary'
  disabled?: boolean
}

const Button = ({
  type = 'button',
  title,
  to,
  onClick,
  children,
  variant = 'primary',
  disabled
}: Props) => {
  if (type === 'button' || type === 'submit') {
    return (
      <S.ButtonStyle
        variant={variant}
        type={type}
        title={title}
        onClick={onClick}
        disabled={disabled}
      >
        {children}
      </S.ButtonStyle>
    )
  } else {
    return (
      <S.ButtonLink type="button" title={title} to={to as string}>
        {children}
      </S.ButtonLink>
    )
  }
}

export default Button
