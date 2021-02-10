import { useState, useEffect, useCallback } from 'react'
import { Pokemon } from 'src/components/PokemonCard/interfaces'
import Layout from '../../components/Layout'
import PokemonCard from '../../components/PokemonCard'
import database from '../../service/firebase'
import { GamePageStyled } from './styles'
// import s from './style.module.css'

type PokemonsState = Record<string, Pokemon>

const GamePage = () => {
  const [pokemons, setPokemons] = useState<PokemonsState>({})
  // console.log('####: useStatePokemons', pokemons)

  useEffect(() => {
    database.ref('pokemons').once('value', (snapshot) => {

      const state: PokemonsState = snapshot.val();
      setPokemons(state)
      // console.log('####: useEffectPokemon', snapshot.val())
    })
  }, [])

  const writeChangeActive = (values: {objId: string; pokemon: Pokemon}) => {
    // console.log('####: ChangeActive', values)
    database.ref('pokemons/' + values.objId).set({
      ...values.pokemon,
    })
  }

  const handleClickCard = useCallback((id) => {
    setPokemons((prevState) => {
      return Object.entries(prevState).reduce<PokemonsState>((acc, item) => {
        const pokemon = { ...item[1] }
        if (pokemon.id === id) {
          pokemon.isActive = !pokemon.isActive
          writeChangeActive({ objId: item[0], pokemon })
          // console.log('####: prevState', pokemon)
        }
        acc[item[0]] = pokemon

        return acc
      }, {})
    })
  }, [])

  const handleAddPokemon = useCallback(() => {
    const newKey = database.ref().child('pokemons').push().key
    // console.log('####: newKey', pokemons)
    const newPokemon = {
      abilities: ['keen-eye', 'tangled-feet', 'big-pecks'],
      // eslint-disable-next-line @typescript-eslint/camelcase
      base_experience: 122,
      height: 11,
      id: 17,
      img:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/17.png',
      name: 'pidgeotto',
      stats: {
        attack: 60,
        defense: 55,
        hp: 63,
        'special-attack': 50,
        'special-defense': 50,
        speed: 71,
      },
      type: 'flying',
      values: {
        bottom: 7,
        left: 5,
        right: 2,
        top: 'A',
      },
    }
    database.ref('pokemons/' + newKey).set(newPokemon)
    // console.log('####: newPokemon', newPokemon)
  }, [])

  return (
    <GamePageStyled>
      <Layout
        id={'2'}
        title="Layout 2 title"
        // descr="description"
        colorBg="#777"
      >
        <button className={"button"} onClick={handleAddPokemon}>
          Создать нового покемона
        </button>
        <div className={"flex"}>
          {Object.entries(pokemons).map(
            ([key, { name, img, id, type, values, isActive }]) => (
              <PokemonCard
                handleClickCard={handleClickCard}
                isActive={isActive}
                key={key}
                id={id}
                name={name}
                img={img}
                type={type}
                values={values}
              />
            )
          )}
        </div>
      </Layout>
    </GamePageStyled>
  )
}

export default GamePage
