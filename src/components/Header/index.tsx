import { Link } from 'react-router-dom'

import * as S from './styles'

import logo from '../../assets/images/logo.svg'
import carinho from '../../assets/images/carrinho.svg'

import { open } from '../../store/reducers/cart'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'

const Header = () => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)

  const openCart = () => {
    dispatch(open())
  }

  return (
    <S.HeaderBar>
      <div>
        <Link to="/">
          <img src={logo} alt="EPLAY" />
        </Link>
        <nav>
          <S.ListLinks>
            <li>
              <Link to="/categorias">Categorias</Link>
            </li>
            <li>
              <a href="#">Novidades</a>
            </li>
            <li>
              <a href="#">Promoções</a>
            </li>
          </S.ListLinks>
        </nav>
      </div>
      <S.CartButton onClick={openCart}>
        {items.length} - {items.length > 1 ? 'Produtos' : 'Produto'}
        <img src={carinho} alt="Carrinho de compras" />
      </S.CartButton>
    </S.HeaderBar>
  )
}

export default Header
