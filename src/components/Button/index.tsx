import * as S from './styles'

type Props = {
  type: 'button' | 'link'
  title: string
  to?: string
  onClick?: () => void
  children: React.ReactNode
  variant?: 'primary' | 'secondary'
}

const Button = ({
  type = 'button',
  title,
  to,
  onClick,
  children,
  variant = 'primary'
}: Props) => {
  if (type === 'button') {
    return (
      <S.ButtonStyle
        variant={variant}
        type="button"
        title={title}
        onClick={onClick}
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
