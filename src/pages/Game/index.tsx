import { useCallback, useContext, useEffect, useMemo, useState } from 'react'
import { FireBaseContext } from 'src/components/context/firebaseContext'
import { PokemonContext } from 'src/components/context/pokemonContext'
import { Pokemon, PokemonsState } from 'src/components/PokemonCard/interfaces'
import { Page, PageProps } from '../_App/interfaces'
import BoardPage from './routes/Board'
import StartPage from './routes/Start'

// import StartPage from './routes/Start/index';
// import BoardPage from './routes/Board/index';
// import FinishPage from './routes/Finish/index';

type Path = 'board' | 'finish' | undefined | Error

type GamePageProps = PageProps & {
  path: Path
}

const GamePage: Page<GamePageProps> = ({ path }) => {
  const firebaseContext = useContext(FireBaseContext)
  // const pokemonContext = useContext(PokemonContext)

  // console.log('props', props);

  const [selectedPokemonsIds, setSelectedPokemons] = useState<
    Array<Pokemon['id']>
  >([])
  // console.log('####: selectedPokemons', selectedPokemons)
  // const match = useRouteMatch();

  const [pokemonsState, setPokemons] = useState<PokemonsState>({})

  const pokemons = useMemo(() => Object.values(pokemonsState), [pokemonsState])

  useEffect(() => {
    firebaseContext.getPokemonSocet((pokemonsState) => {
      setPokemons(pokemonsState)
    })

    return () => {
      firebaseContext.offPokemonSocet()
    }
  }, [firebaseContext])

  const selectedPokemons = useMemo<Pokemon[]>(() => {
    // if (!pokemonContext) {
    //   return [];
    // }

    return pokemons.filter((n) => selectedPokemonsIds.includes(n.id))
  }, [pokemons, selectedPokemonsIds])

  const handleSelectedPokemons = useCallback((pokemon: Pokemon) => {
    setSelectedPokemons((prevState) => {
      const pokemonsIds = [...prevState]

      /**
       * Если в массиве есть указанный покемон
       */
      const index = pokemonsIds.indexOf(pokemon.id)

      if (index !== -1) {
        // То исключаем его
        pokemonsIds.splice(index, 1)
      } else {
        // Иначе добавляем покемона в массив выделенных
        pokemonsIds.push(pokemon.id)
      }

      return pokemonsIds
    })
  }, [])

  const content = useMemo(() => {
    if (path === undefined) {
      return (
        <StartPage
          handleSelectedPokemons={handleSelectedPokemons}
          pokemons={pokemons}
          selectedPokemons={selectedPokemons}
        />
      )
    }

    if (path === 'board') {
      return <BoardPage selectedPokemons={selectedPokemons} />
    }
  }, [handleSelectedPokemons, path, pokemons, selectedPokemons])

  return useMemo(() => {
    return (
      <PokemonContext.Provider
        value={{
          selectedPokemonsIds,
          onSelectedPokemons: handleSelectedPokemons,
        }}
      >
        {/* <Switch>
          <Route path={`${match.path}/`} exact component={StartPage} />
          <Route path={`${match.path}/board`} component={BoardPage} />
          <Route path={`${match.path}/finish`} component={FinishPage} />
        </Switch> */}

        {content}
      </PokemonContext.Provider>
    )
  }, [content, handleSelectedPokemons, selectedPokemonsIds])
}

GamePage.getInitialProps = (props) => {
  const pathQuery = props.query.path

  // console.log('GamePage getInitialProps props', props);

  const path: Path =
    pathQuery === undefined
      ? pathQuery
      : (typeof pathQuery === 'string' && pathQuery === 'board') ||
        pathQuery === 'finish'
      ? pathQuery
      : new Error('Wrong path')

  return {
    statusCode: path instanceof Error ? 404 : 200,
    path,
  }
}

export default GamePage
