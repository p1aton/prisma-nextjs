// import { useHistory } from 'react-router-dom'
import Layout from '../../components/Layout'
import Background from '../../assets/bg2.jpg'

import s from './style.module.css'
import { useRouter } from 'next/dist/client/router'
import { useCallback } from 'react'

const AboutPage = () => {
  // const history = useHistory()
  const router = useRouter()
  const handleClick = useCallback(() => {
    router.push('/')
  }, [router])

  return (
    <>
      <Layout title="About this game" urlBg={Background}>
        <p>
          In the game two players face off against one another, one side playing
          as &quot;blue&quot;, the other as &quot;red&quot; on a 3x3 grid. Each
          player has five cards in a hand and the aim is to capture the
          opponent&apos;s cards by turning them into the player&apos;s own color
          of red or blue.
        </p>
        <p>
          To win, a majority of the total ten cards played (including the one
          card that is not placed on the board) must be of the player&apos;s
          card color. To do this, the player must capture cards by placing a
          card adjacent to an opponent&apos;s card whereupon the
          &apos;ranks&apos; of the sides where the two cards touch will be
          compared. If the rank of the opponent&apos;s card is higher than the
          player&apos;s card, the player&apos;s card will be captured and turned
          into the opponent&apos;s color. If the player&apos;s rank is higher,
          the opponent&apos;s card will be captured and changed into the
          player&apos;s color instead.{' '}
        </p>
        <button className={s.routeButton} onClick={handleClick}>
          Back to Home
        </button>
      </Layout>
    </>
  )
}

export default AboutPage
