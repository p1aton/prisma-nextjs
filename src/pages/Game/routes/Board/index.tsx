import { useContext } from 'react';
import { PokemonContext } from 'src/components/context/pokemonContext.js';
import PokemonCard from '../../../../components/PokemonCard';
import { BoardProps } from './interfaces';

// import s from './style.module.css';
import { BoardStyled } from './styles.js';

const BoardPage: React.FC<BoardProps> = () => {
    const {pokemons} = useContext(PokemonContext);
    // console.log('####: pokemonContext', pokemons);



    return (
        <BoardStyled>
            <div className={s.playerOne}>
            {
                Object.values(pokemons).map(({id, name, img, type, values}) => (
                    <PokemonCard 

            className={'card'}
            isActive
            key={id}
            id={id}
            name={name}
            img={img}
            type={type}
            values={values}
            minimize

                    />
                ))
            }
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
    );
};

export default BoardPage;