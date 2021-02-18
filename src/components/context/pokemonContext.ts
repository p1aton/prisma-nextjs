import React from 'react'
import { Pokemon } from '../PokemonCard/interfaces'

export type PokemonContextValue = {
  /**
   * Выделенные покемоны (активные)
   */
  selectedPokemonsIds: Array<Pokemon['id']>

  onSelectedPokemons: (pokemon: Pokemon) => void
}

export const PokemonContext = React.createContext<PokemonContextValue | null>(
  null
)
