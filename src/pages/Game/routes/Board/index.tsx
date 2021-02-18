import { useMemo } from 'react'
import PokemonCard from '../../../../components/PokemonCard'
import { BoardProps } from './interfaces'

// import s from './style.module.css';
import { BoardStyled } from './styles'

const BoardPage: React.FC<BoardProps> = ({ selectedPokemons }) => {
  // console.log('####: pokemonContext', pokemonContext);

  return useMemo(() => {
    return (
      <BoardStyled>
        <div className={'playerOne'}>
          {selectedPokemons.map((pokemon) => (
            <PokemonCard
              key={pokemon.id}
              pokemon={pokemon}
              // className={'card'}
              isActive
              // id={id}
              // name={name}
              // img={img}
              // type={type}
              // values={values}
              minimize
            />
          ))}
        </div>
        <div className={'board'}>
          <div className={'boardPlate'}>1</div>
          <div className={'boardPlate'}>2</div>
          <div className={'boardPlate'}>3</div>
          <div className={'boardPlate'}>4</div>
          <div className={'boardPlate'}>5</div>
          <div className={'boardPlate'}>6</div>
          <div className={'boardPlate'}>7</div>
          <div className={'boardPlate'}>8</div>
          <div className={'boardPlate'}>9</div>
        </div>
      </BoardStyled>
    )
  }, [selectedPokemons])
}

export default BoardPage
