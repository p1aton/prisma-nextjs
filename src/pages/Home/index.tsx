import Header from '../../components/Header'
import Layout from '../../components/Layout'
// import Footer from '../../components/Footer'
import bgImg1 from './../../assets/bg1.jpg'
import bgImg2 from './../../assets/bg2.jpg'
import PokemonCard from '../../components/PokemonCard'
// import MenuHeader from '../../components/MenuHeader'
import { HomePageStyled } from './styles'
// import { useCallback } from 'react'
import { NextSeo } from 'next-seo'
import { Page } from '../_App/interfaces'
import { POKEMONS } from './constants'

const HomePage: Page = () => {
  // const handleClickButton =useCallback( (page) => {
  //   onChangePage && onChangePage(page)
  // }, [onChangePage])

  return (
    <>
      <NextSeo title="Layout 1 title" description="description" />

      <HomePageStyled>
        {/* <MenuHeader 
      onClickButton={handleClickButton} /> */}
        <Header
          title={'This is title'}
          descr={'This is Description!'}
          // onClickButton={handleClickButton}
        />
        <Layout
          id={'1'}
          title="Layout 1 title"
          // descr="description"
          urlBg={bgImg1}
        >
          <p>
            In the game two players face off against one another, one side
            playing as &quot;blue&quot;, the other as &quot;red&quot; on a 3x3
            grid. Each player has five cards in a hand and the aim is to capture
            the opponent&apos;s cards by turning them into the player&apos;s own
            color of red or blue.
          </p>
          <p>
            To win, a majority of the total ten cards played (including the one
            card that is not placed on the board) must be of the player&apos;s
            card color. To do this, the player must capture cards by placing a
            card adjacent to an opponent&apos;s card whereupon the
            &apos;ranks&apos; of the sides where the two cards touch will be
            compared. If the rank of the opponent&apos;s card is higher than the
            player&apos;s card, the player&apos;s card will be captured and
            turned into the opponent&apos;s color. If the player&apos;s rank is
            higher, the opponent&apos;s card will be captured and changed into
            the player&apos;s color instead.{' '}
          </p>
        </Layout>
        <Layout
          id={'2'}
          title="Layout 2 
      title"
          // descr="description"
          colorBg="#777"
        >
          <div className={'flex'}>
            {POKEMONS.map((item) => (
              <PokemonCard
                key={item.id}
                id={item.id}
                name={item.name}
                img={item.img}
                type={item.type}
                values={item.values}
              />
            ))}
          </div>
        </Layout>
        <Layout
          id={'3'}
          title="Layout 3 title"
          // descr="description"
          urlBg={bgImg2}
        >
          <p>
            In the game two players face off against one another, one side
            playing as &quot;blue&quot;, the other as &quot;red&quot; on a 3x3
            grid. Each player has five cards in a hand and the aim is to capture
            the opponent&apos;s cards by turning them into the player&apos;s own
            color of red or blue.
          </p>
          <p>
            To win, a majority of the total ten cards played (including the one
            card that is not placed on the board) must be of the player&apos;s
            card color. To do this, the player must capture cards by placing a
            card adjacent to an opponent&apos;s card whereupon the
            &apos;ranks&apos; of the sides where the two cards touch will be
            compared. If the rank of the opponent&apos;s card is higher than the
            player&apos;s card, the player&apos;s card will be captured and
            turned into the opponent&apos;s color. If the player&apos;s rank is
            higher, the opponent&apos;s card will be captured and changed into
            the player&apos;s color instead.{' '}
          </p>
        </Layout>
      </HomePageStyled>
    </>
  )
}

export default HomePage
