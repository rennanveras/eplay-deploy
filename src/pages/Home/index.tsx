import Banner from '../../components/Banner'
import ProductsList from '../../components/ProductList'

import { useGetOnSaleQuery, useGetSoonQuery } from '../../services/api'
import { Loading } from '../../styles'

const Home = () => {
  const { data: onSaleGames } = useGetOnSaleQuery()
  const { data: soonGames } = useGetSoonQuery()

  if (onSaleGames && soonGames) {
    return (
      <>
        <Banner />
        <ProductsList
          games={onSaleGames}
          background="gray"
          title="Promoções"
          id="on-sale"
        />
        <ProductsList
          games={soonGames}
          background="black"
          title="Em breve"
          id="coming-soon"
        />
      </>
    )
  }
  return <Loading></Loading>
}

export default Home
