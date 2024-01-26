import ProductsList from '../../components/ProductList'

import {
  useGetActionGamesQuery,
  useGetFightGamesQuery,
  useGetRpgGamesQuery,
  useGetSimulationGamesQuery,
  useGetSportGamesQuery
} from '../../services/api'

const Categories = () => {
  const { data: actionGame, isLoading: isLoadingAction } =
    useGetActionGamesQuery()
  const { data: fightGame, isLoading: isLoadingFight } = useGetFightGamesQuery()
  const { data: rpgGame, isLoading: isLoadingRpg } = useGetRpgGamesQuery()
  const { data: simulationGame, isLoading: isLoadingSimulation } =
    useGetSimulationGamesQuery()
  const { data: sportGame, isLoading: isLoadingSport } = useGetSportGamesQuery()

  return (
    <>
      <ProductsList
        games={actionGame}
        title="Ação"
        background="black"
        id="action"
        isLoading={isLoadingAction}
      />
      <ProductsList
        games={sportGame}
        title="Esportes"
        background="gray"
        id="sports"
        isLoading={isLoadingFight}
      />
      <ProductsList
        games={simulationGame}
        title="Simulação"
        background="black"
        id="simulation"
        isLoading={isLoadingRpg}
      />
      <ProductsList
        games={fightGame}
        title="Combate"
        background="gray"
        id="fight"
        isLoading={isLoadingSimulation}
      />
      <ProductsList
        games={rpgGame}
        title="RPG"
        background="black"
        id="rpg"
        isLoading={isLoadingSport}
      />
    </>
  )
}

export default Categories
