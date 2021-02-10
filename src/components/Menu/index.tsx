// import cn from 'classnames'
// import { Link } from 'react-router-dom'
import Link from 'next/link'
import { MenuProps } from './interfaces'
import { MenuStyled } from './styles'
// import s from './style.module.css'

const MENU = [
  {
    title: 'HOME',
    to: '/',
  },
  {
    title: 'GAME',
    to: 'game',
  },
  {
    title: 'ABOUT',
    to: 'about',
  },
  {
    title: 'CONTACT',
    to: 'contact',
  },
]

const Menu: React.FC<MenuProps> = ({ isOpen, onChangeActive }) => {
  // const onMenuClick = () => {
  //   onChangeActive && onChangeActive()
  // }
  return (
    <MenuStyled
      // className={cn(s.menuContainer, {
      //   [s.active]: isOpen === true,
      //   [s.deactive]: isOpen === false,
      // })}
      className={[isOpen ? 'active' : 'deactive'].join(' ')}
    >
      <div className={'overlay'} />
      <div>
        <ul>
          {MENU.map(({ title, to }, index) => (
            <li key={index}>
              <Link href={to}>
                <a onClick={onChangeActive}>{title}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </MenuStyled>
  )
}

export default Menu
