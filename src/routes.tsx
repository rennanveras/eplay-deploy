import { Route, Routes } from 'react-router-dom'

import Home from './pages/Home'
import Categories from './pages/Categories'
import Product from './pages/Product'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/categorias" element={<Categories />} />
    <Route path="/produto/:id" element={<Product />} />
  </Routes>
)

export default Rotas
