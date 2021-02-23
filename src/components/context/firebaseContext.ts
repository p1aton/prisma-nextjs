import { database } from './../../service/firebase';
import React from 'react';
import { PokemonState } from '../PokemonCard/interfaces';

/**
 * Навешиваем слушатель на изменение хранилища
 */
const getPokemonSocet = <C = PokemonState>(cb: (cb: C) => void) => {
  database.ref('pokemons').on('value', (snapshot) => {
    cb(snapshot.val())
  })
}

/**
 * Отключаем слушатель
 */
const offPokemonSocet = () => {
  database.ref('pokemons').off()
}


type FireBaseContextValue = {
  database: typeof database
  getPokemonSocet: typeof getPokemonSocet
  offPokemonSocet: typeof offPokemonSocet
}

export const FireBaseContext = React.createContext<FireBaseContextValue>({
  database,
  getPokemonSocet,
  offPokemonSocet
});