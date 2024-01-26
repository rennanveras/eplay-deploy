import Tag from '../Tag'
import * as S from './styles'

type Props = {
  title: string
  category: string
  system: string
  description: string
  infos: string[]
  image: string
  id: number
}

const Product = ({
  title,
  category,
  system,
  description,
  infos,
  image,
  id
}: Props) => {
  const getDescription = (text: string) => {
    return text.length > 95 ? `${text.slice(0, 86)}...` : text
  }

  return (
    <S.CardProduct
      title={`Clique aqui par ver mais detalhes do jogo: ${title}`}
      to={`/produto/${id}`}
    >
      <img src={image} alt="" />
      <S.Infos>
        {infos.map((info) => (
          <Tag key={info}>{info}</Tag>
        ))}
      </S.Infos>
      <S.Title>{title}</S.Title>
      <Tag>{category}</Tag>
      <Tag>{system}</Tag>
      <S.Description>{getDescription(description)}</S.Description>
    </S.CardProduct>
  )
}

export default Product
