import { useState, useEffect, useContext, useCallback, useMemo } from 'react';
// import { useHistory } from 'react-router-dom';
import Layout from '../../../../components/Layout/index';
import PokemonCard from '../../../../components/PokemonCard/index';
import { FireBaseContext } from 'src/components/context/firebaseContext';
import { PokemonContext } from 'src/components/context/pokemonContext';
import { StartPageStyled } from './styles'
import { StartProps } from './interfaces';
import { useRouter } from 'next/dist/client/router';
import { Pokemon, PokemonState } from 'src/components/PokemonCard/interfaces';
// import s from './style.module.css';




const StartPage: React.FC<StartProps> = () => {
  const firebaseContext = useContext(FireBaseContext);
  const pokemonsContext = useContext(PokemonContext)
  // const history = useHistory();

  const router = useRouter();
  const [pokemons, setPokemons] = useState<PokemonState>({});
  // console.log('####: Firebase', firebase)


  useEffect(() => {
    firebaseContext.getPokemonSocet((pokemons) => {
      setPokemons(pokemons);
    });

    return () => {
      firebaseContext.offPokemonSocet();
    }
  }, [firebaseContext]);



  const handleChangeSelected = (pokemon: Pokemon) => {
    // const pokemon = { ...pokemons[key] };
    pokemonsContext?.onSelectedPokemons(pokemon);


    // setPokemons(prevState => ({
    //   ...prevState,
    //   [key]: {
    //     ...prevState[key],
    //     selected: !prevState[key].selected,
    //   }
    // }))

  };

  const handleStartGameClick = useCallback(() => {
    router.push('/game/board');
  }, [router])


  const onClickCard = useCallback(() => {
    if (disabled || selected) 
    { handleChangeSelected(key) }
  }, [handleChangeSelected])

  


  return useMemo(() => {

    if (!pokemonsContext?.selectedPokemons) {
      return null;
    }

    const disabled = pokemonsContext.selectedPokemons.length < 5
    
    return  <StartPageStyled>
      <Layout 
      id={"2"}
      title='Layout 2 title'
      // descr='description'
      colorBg='#777' >
      <button className={"button"}
        onClick={handleStartGameClick}
        disabled= {disabled}
      >
        Start Game
      </button>
      <div className={"flex"}>
        {
          Object.entries(pokemons).map(([key, pokemon]) => {
            
            const {name, img, id, type, values} = pokemon;
            
            const selected = pokemonsContext.selectedPokemons.includes(pokemon);

            return (
            
          <PokemonCard
            // className={"card"}
            isActive={true}
            key={key}
            id={id}
            name={name}
            img={img}
            type={type}
            values={values}
            isSelected={selected}
            onClickCard={onClickCard}
          />
          )}
          )}
      </div>
    </Layout>
  </StartPageStyled>
  }, []);
};


export default StartPage;