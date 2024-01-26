import Section from '../Section'
import Product from '../Product'

import * as S from './styles'
import { parseToBrl } from '../../utils'
import Loader from '../Loader'

export type Props = {
  title: string
  background: 'gray' | 'black'
  games?: Game[]
  id?: string
  isLoading?: boolean
}

const ProductsList = ({ title, background, games, id, isLoading }: Props) => {
  const getGameTags = (game: Game) => {
    const tags = []

    if (game.release_date) {
      tags.push(game.release_date)
    }

    if (game.prices.discount) {
      tags.push(`${game.prices.discount}%`)
    }

    if (game.prices.current) {
      tags.push(parseToBrl(game.prices.current))
    }

    return tags
  }

  if (isLoading) {
    return <Loader />
  }
  return (
    <Section id={id} title={title} background={background}>
      <S.List>
        {games &&
          games.map((game) => (
            <li key={game.id}>
              <Product
                id={game.id}
                category={game.details.category}
                description={game.description}
                image={game.media.thumbnail}
                infos={getGameTags(game)}
                system={game.details.system}
                title={game.name}
              />
            </li>
          ))}
      </S.List>
    </Section>
  )
}

export default ProductsList
