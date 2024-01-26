import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import Button from '../Button'
import Tag from '../Tag'

import { close, remove } from '../../store/reducers/cart'
import { RootReducer } from '../../store'
import { getTotalPrice, parseToBrl } from '../../utils'

import * as S from './styles'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  const goToCheckout = () => {
    navigate('/checkout')
    closeCart()
  }

  return (
    <S.CartContainer className={isOpen ? 'is-open' : ''}>
      <S.Overlay onClick={closeCart} />
      <S.Sidebar>
        {items.length > 0 ? (
          <>
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
                    <span>{parseToBrl(game.prices.current)}</span>
                  </div>
                  <button type="button" onClick={() => removeItem(game.id)} />
                </S.CartItem>
              ))}
            </ul>
            <S.Quantity>
              {items.length} {items.length > 1 ? 'jogos' : 'jogo'} no carrinho
            </S.Quantity>
            <S.Prices>
              Total de {parseToBrl(getTotalPrice(items))}
              <span>Em até 6x sem juros</span>
            </S.Prices>
            <Button
              onClick={goToCheckout}
              variant="secondary"
              title="Clique aqui para continuar com a compra"
              type="button"
            >
              Continuar com a compra
            </Button>
          </>
        ) : (
          <p className="empty-text">
            Seu carrinho está vazio, adicione pelo menos um produto para
            continuar com a compra.
          </p>
        )}
      </S.Sidebar>
    </S.CartContainer>
  )
}

export default Cart
