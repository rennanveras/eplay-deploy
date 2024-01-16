import * as S from './styles'

export type Props = {
  title: string
  background: 'black' | 'gray'
  children: JSX.Element
  id?: string
}

const Section = ({ title, background, children, id }: Props) => {
  return (
    <S.Container id={id} background={background}>
      <div className="container">
        <S.Title>{title}</S.Title>
        {children}
      </div>
    </S.Container>
  )
}

export default Section
