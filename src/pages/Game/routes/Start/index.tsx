import { useCallback, useMemo } from 'react'
import Layout from '../../../../components/Layout/index'
import PokemonCard from '../../../../components/PokemonCard/index'
import { StartPageStyled } from './styles'
import { StartProps } from './interfaces'
import { useRouter } from 'next/dist/client/router'
import { Pokemon } from 'src/components/PokemonCard/interfaces'

const StartPage: React.FC<StartProps> = ({
  pokemons,
  selectedPokemons,
  handleSelectedPokemons,
}) => {
  const router = useRouter()

  // const handleChangeSelected = useCallback((pokemon: Pokemon) => {
  //   handleSelectedPokemons(pokemon)
  // }, [handleSelectedPokemons])

  const handleStartGameClick = useCallback(() => {
    router.push('/game/board')
  }, [router])

  const disabled = useMemo(() => selectedPokemons.length < 5, [
    selectedPokemons,
  ])

  const onClickCard = useCallback(
    (pokemon: Pokemon) => {
      const selected = selectedPokemons.includes(pokemon)

      if (disabled || selected) {
        handleSelectedPokemons(pokemon)
      }
    },
    [disabled, handleSelectedPokemons, selectedPokemons]
  )

  return useMemo(() => {
    // if (!pokemonsContext?.selectedPokemons) {
    //   return null;
    // }

    return (
      <StartPageStyled>
        <Layout
          id={'2'}
          title="Layout 2 title"
          // descr='description'
          colorBg="#777"
        >
          <button
            className={'button'}
            onClick={handleStartGameClick}
            disabled={disabled}
          >
            Start Game
          </button>
          <div className={'flex'}>
            {pokemons.map((pokemon) => {
              // const { name, img, id, type, values } = pokemon;

              const selected =
                selectedPokemons.findIndex((n) => pokemon.id === n.id) !== -1

              return (
                <PokemonCard
                  // className={'card'}
                  key={pokemon.id}
                  // id={id}
                  // name={name}
                  // img={img}
                  // type={type}
                  // values={values}
                  pokemon={pokemon}
                  isActive={true}
                  isSelected={selected}
                  onClickCard={onClickCard}
                />
              )
            })}
          </div>
        </Layout>
      </StartPageStyled>
    )
  }, [disabled, handleStartGameClick, onClickCard, pokemons, selectedPokemons])
}

export default StartPage
