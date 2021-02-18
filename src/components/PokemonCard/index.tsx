// import {useState} from 'react'
// import s from './style.module.css'
// import CardBackSide from './assets/card-back-side.jpg'
// import cn from 'classnames'
import { useCallback } from 'react'
import { PokemonCardProps } from './interfaces'
import { PokemonCardStyled } from './styles'

const PokemonCard: React.FC<PokemonCardProps> = ({
  pokemon,
  // id,
  onClickCard,
  // className,
  isSelected,
  minimize,
  isActive,
}) => {
  const { id, img, name, type, values } = pokemon

  const handleClick = useCallback(() => {
    onClickCard && onClickCard(pokemon)
  }, [onClickCard, pokemon])

  // console.log('PokemonCard pokemon', pokemon);

  return (
    <PokemonCardStyled onClick={handleClick}>
      <div
        className={[
          'pokemonCard',
          isActive ? 'active' : '',
          isSelected ? 'selected' : '',
        ].join(' ')}
      >
        <div className={'cardFront'}>
          <div className={'wrap front'}>
            <div className={`${'pokemon'} ${[type]}`}>
              <div className={'values'}>
                <div className={['count', 'top'].join(' ')}>{values.top}</div>
                <div className={['count', 'right'].join(' ')}>
                  {values.right}
                </div>
                <div className={['count', 'bottom'].join(' ')}>
                  {values.bottom}
                </div>
                <div className={['count', 'left'].join(' ')}>{values.left}</div>
              </div>
              <div className={'imgContainer'}>
                <img src={img} alt={name} />
              </div>
              {!minimize && (
                <div className={'info'}>
                  <span className={'number'}>#{id}</span>
                  <h3 className={'name'}>{name}</h3>
                  <small className={'type'}>
                    Type: <span>{type}</span>
                  </small>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className={'cardBack'}>
          <div className={`${'wrap'} ${'back'}`} />
        </div>
      </div>
    </PokemonCardStyled>
  )
}

export default PokemonCard
