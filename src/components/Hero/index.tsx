import { useDispatch } from 'react-redux'

import Game from '../../types/Game'
import * as S from './styles'

import Button from '../Button'
import { formataPreco } from '../ProductList'
import Tag from '../Tag'

import { add, open } from '../../store/reducers/cart'

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
              <span>De {formataPreco(game.prices.old)}</span>
            )}
            {game.prices.current && (
              <>Por {formataPreco(game.prices.current)}</>
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
