// import s from './style.module.css'
import CardBackSide from './assets/card-back-side.jpg'
// import cn from 'classnames'
import { useCallback } from 'react'
import { PokemonCardProps } from './interfaces'
import { PokemonCardStyled } from './styles'

const PokemonCard: React.FC<PokemonCardProps> = ({
  type,
  values,
  id,
  img,
  name,
  isActive,
  handleClickCard,
}) => {
  const handleClick = useCallback(() => {
    handleClickCard(id)
  }, [handleClickCard, id])

  return (
    <PokemonCardStyled className={'root'} onClick={handleClick}>
      <div className={['pokemonCard', isActive ? 'active' : ''].join(' ')}>
        <div className={'cardFront'}>
          <div className={`${'wrap'} ${'front'}`}>
            <div className={`${'pokemon'} ${type}`}>
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
              <div className={'info'}>
                <span className={'number'}>#{id}</span>
                <h3 className={'name'}>{name}</h3>
                <small className={'type'}>
                  Type: <span>{type}</span>
                </small>
              </div>
            </div>
          </div>
        </div>

        <div className={'cardBack'}>
          <div className={`${'wrap'} ${'back'}`}>
            <img src={CardBackSide} alt="Сard Backed" />
          </div>
        </div>
      </div>
    </PokemonCardStyled>
  )
}

export default PokemonCard
