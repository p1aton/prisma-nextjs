import { Pokemon } from 'src/components/PokemonCard/interfaces'
import { PokemonContextValue } from 'src/components/context/pokemonContext'

export type StartProps = {
  pokemons: Pokemon[]
  selectedPokemons: Pokemon[]

  handleSelectedPokemons: PokemonContextValue['onSelectedPokemons']
}
