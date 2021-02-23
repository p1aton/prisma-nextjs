// import {useRouteMatch, Route, Switch} from "react-router-dom";
import { useState } from 'react';
import { PokemonContext } from 'src/components/context/pokemonContext';
import { Pokemon } from 'src/components/PokemonCard/interfaces';
// import StartPage from './routes/Start/index';
// import BoardPage from './routes/Board/index';
// import FinishPage from './routes/Finish/index';





const GamePage = () => {
  const [selectedPokemons, setSelectedPokemons] = useState<Pokemon[]>([]);
  // console.log('####: selectedPokemons', selectedPokemons)
  // const match = useRouteMatch();

  const handleSelectedPokemons = (pokemon: Pokemon) => {
    setSelectedPokemons((prevState) => {
      // if(prevState[key]) {
      //   const copyState = {...prevState};
      //   delete copyState[key];

      //   return copyState;
      // }

      // return {
      //   ...prevState,
      //   [key]: pokemon,
      // }

      const pokemons = [...prevState]
      /**
       * Если в массиве есть указанный покемон
       */
      const index = pokemons.indexOf(pokemon)
      // То исключаем его
      if (index != -1){
        pokemons.splice(index, 1)
      }
      else {
        // Иначе добовляем покемона в массив выделенных
        pokemons.push(pokemon);
      }

      return pokemons
    })
  }

  return (
    <PokemonContext.Provider value={{
      pokemons: selectedPokemons,
      onSelectedPokemons: handleSelectedPokemons
    }}>
      {/* <Switch>
        <Route path={`${match.path}/`} exact component={StartPage} />
        <Route path={`${match.path}/board`} component={BoardPage} />
        <Route path={`${match.path}/finish`} component={FinishPage} />
      </Switch> */}
    </PokemonContext.Provider>
  );
};

export default GamePage;