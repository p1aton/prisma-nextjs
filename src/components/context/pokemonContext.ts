import { Pokemon } from 'src/components/PokemonCard/interfaces';
import React from 'react';

type PokemonContextValue = {
  pokemons: Pokemon[]
  onSelectedPokemons: (pokemons: Pokemon) => void 
}

export const PokemonContext = React.createContext<PokemonContextValue | null>(null);