import { useState, useEffect, useContext } from 'react';
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
    const pokemon = { ...pokemons[key] };
    pokemonsContext.onSelectedPokemons(key, pokemon);


    setPokemons(prevState => ({
      ...prevState,
      [key]: {
        ...prevState[key],
        selected: !prevState[key].selected,
      }
    }))

  };

  const handleStartGameClick = () => {
    router.push('/game/board');
  }




  return (
    <StartPageStyled>
      <Layout id={2}
        title='Layout 2 title'
        descr='description'
        colorBg='#777' >
        <button className={"button"}
          onClick={handleStartGameClick}
          disabled={Object.keys(pokemonsContext.pokemons).length < 5}>Start Game</button>
        <div className={"flex"}>
          {
            Object.entries(pokemons).map(([key, { name, img, id, type, values, selected }]) => <PokemonCard
              className={"card"}
              isActive={true}
              key={key}
              id={id}
              name={name}
              img={img}
              type={type}
              values={values}
              isSelected={selected}
              onClickCard={() => {
                if (Object.keys(pokemonsContext.pokemons).length < 5 || selected) { handleChangeSelected(key) }
              }}
            />)}
        </div>
      </Layout>
    </StartPageStyled>
  );
};


export default StartPage;