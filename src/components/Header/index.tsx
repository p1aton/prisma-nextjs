// import { useHistory } from 'react-router-dom'
// import s from './style.module.css'

import { useRouter } from 'next/dist/client/router'
import { useCallback } from 'react'
import { HeaderProps } from './interfaces'
import { HeaderStyled } from './styles'

const Header: React.FC<HeaderProps> = ({
  title,
  descr,
  // onClickButton,
}) => {
  // const history = useHistory()

  const router = useRouter()

  const handleClick = useCallback(() => {
    router.push('/game')
  }, [router])

  return (
    <HeaderStyled>
      <div className={'forest'}></div>
      <div className={'silhouette'}> </div>
      <div className={'moon'}> </div>
      <div className={'container'}>
        {!!title && <h1>{title}</h1>}
        {!!descr && <p>{descr}</p>}
        <button className={'button'} onClick={handleClick}>
          Start Game
        </button>
      </div>
    </HeaderStyled>
  )
}

export default Header
