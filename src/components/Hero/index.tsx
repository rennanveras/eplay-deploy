import { useDispatch } from 'react-redux'

import * as S from './styles'

import Button from '../Button'
import Tag from '../Tag'

import { add, open } from '../../store/reducers/cart'
import { parseToBrl } from '../../utils'

type Props = {
  game: Game
}
const Hero = ({ game }: Props) => {
  const dispatch = useDispatch()

  const addToCart = () => {
    dispatch(add(game))
    dispatch(open())
  }

  return (
    <S.Banner style={{ backgroundImage: `url(${game.media.cover})` }}>
      <div className="container">
        <div>
          <Tag>{game.details.category}</Tag>
          <Tag>{game.details.system}</Tag>
        </div>
        <S.Infos>
          <h2>{game.name}</h2>
          <p>
            {game.prices.discount && (
              <span>De {parseToBrl(game.prices.old)}</span>
            )}
            {game.prices.current && (
              <p>Por {parseToBrl(game.prices.current)}</p>
            )}
          </p>

          {game.prices.current && (
            <Button
              onClick={addToCart}
              title="Clique aqui para adicionar este jogo ao carrinho"
              type="button"
              variant="secondary"
            >
              Adicionar ao carrinho
            </Button>
          )}
        </S.Infos>
      </div>
    </S.Banner>
  )
}

export default Hero
