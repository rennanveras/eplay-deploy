import * as S from './styles'

export type Props = {
  size?: 'small' | 'big'
  children: React.ReactNode
}

const Tag = ({ size = 'small', children }: Props) => (
  <S.TagStyle size={size}>{children}</S.TagStyle>
)

export default Tag
