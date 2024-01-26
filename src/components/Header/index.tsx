import { useState } from 'react'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'

import * as S from './styles'

import logo from '../../assets/images/logo.svg'
import carinho from '../../assets/images/carrinho.svg'

import { open } from '../../store/reducers/cart'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'

const Header = () => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const openCart = () => {
    dispatch(open())
  }

  const navLinks = [
    {
      to: '/#on-sale',
      label: 'Novidades',
      title: 'Clique aqui para acessar a seção de novidades',
      id: 1
    },
    {
      to: '/#coming-soon',
      label: 'Promoções',
      title: 'Clique aqui para acessar a seção de promoções',
      id: 2
    }
  ]

  return (
    <S.HeaderBar>
      <S.HeaderRow>
        <div>
          <S.Hamburguer onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <span />
            <span />
            <span />
          </S.Hamburguer>
          <Link to="/">
            <h1>
              <img src={logo} alt="EPLAY" />
            </h1>
          </Link>
          <nav>
            <S.ListLinks>
              <S.LinkItem>
                <Link
                  title="Clique aqui para acessar a página de categorias"
                  to="/categorias"
                >
                  Categorias
                </Link>
              </S.LinkItem>
              {navLinks.map((itemsNav) => (
                <S.LinkItem key={itemsNav.id}>
                  <HashLink title={itemsNav.title} to={itemsNav.to}>
                    {itemsNav.label}
                  </HashLink>
                </S.LinkItem>
              ))}
            </S.ListLinks>
          </nav>
        </div>
        <S.CartButton role="button" onClick={openCart}>
          <div>
            {items.length}
            <span> - {items.length > 1 ? 'Produtos' : 'Produto'}</span>
          </div>
          <img src={carinho} alt="Carrinho de compras" />
        </S.CartButton>
      </S.HeaderRow>
      <S.NavMobile className={isMenuOpen ? 'is-open' : ''}>
        <S.ListLinks>
          <S.LinkItem>
            <Link
              title="Clique aqui para acessar a página de categorias"
              to="/categorias"
              onClick={() => setIsMenuOpen(false)}
            >
              Categorias
            </Link>
          </S.LinkItem>
          {navLinks.map((itemsNav) => (
            <S.LinkItem key={itemsNav.id}>
              <HashLink
                to={itemsNav.to}
                title={itemsNav.title}
                onClick={() => setIsMenuOpen(false)}
              >
                {itemsNav.label}
              </HashLink>
            </S.LinkItem>
          ))}
        </S.ListLinks>
      </S.NavMobile>
    </S.HeaderBar>
  )
}

export default Header
