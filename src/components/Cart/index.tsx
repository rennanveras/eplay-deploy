import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'

import * as S from './styles'

import Button from '../Button'
import Tag from '../Tag'

import { close, remove } from '../../store/reducers/cart'
import { RootReducer } from '../../store'
import { formataPreco } from '../ProductList'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const getTotalPrice = () => {
    return items.reduce((acumulador, valorAtual) => {
      return (acumulador += valorAtual.prices.current!)
    }, 0)
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  return (
    <S.CartContainer className={isOpen ? 'is-open' : ''}>
      <S.Overlay onClick={closeCart} />
      <S.Sidebar>
        <ul>
          {items.map((game) => (
            <S.CartItem key={game.id}>
              <img src={game.media.thumbnail} alt={game.name} />
              <div>
                <h3>{game.name}</h3>
                <div className="area-tags">
                  <Tag>{game.details.category}</Tag>
                  <Tag>{game.details.system}</Tag>
                </div>
                <span>{formataPreco(game.prices.current)}</span>
              </div>
              <button type="button" onClick={() => removeItem(game.id)} />
            </S.CartItem>
          ))}
        </ul>
        <S.Quantity>
          {items.length} {items.length > 1 ? 'jogos' : 'jogo'} no carrinho
        </S.Quantity>
        <S.Prices>
          Total de {formataPreco(getTotalPrice())}
          <span>Em até 6x sem juros</span>
        </S.Prices>
        <Button
          variant="secondary"
          title="Clique aqui para continuar com a compra"
          type="button"
        >
          Continuar com a compra
        </Button>
      </S.Sidebar>
    </S.CartContainer>
  )
}

export default Cart
