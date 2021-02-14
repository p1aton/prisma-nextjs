// import cn from 'classnames'

import { NavBarProps } from './interfaces'
import { NavBarStyled } from './styles'

// import s from './style.module.css'

const NavBar: React.FC<NavBarProps> = ({
  isOpen,
  bgActive = false,
  onClickHamburg,
}) => {
  return (
    <NavBarStyled
      // id={s.navbar}
      // className={cn({
      //   [s.bgActive]: bgActive,
      // })}
      // className={bgActive ? "bgActive" : undefined}
      bgActive={bgActive}
    >
      <div className={"navWrapper"}>
        <p className={"brand"}>LOGO</p>
        <div
          // className={cn(s.menuButton, {
          //   [s.active]: isOpen,
          // })}
          className={["menuButton", isOpen ? "active" : ""].join(" ")}
          onClick={onClickHamburg}
        >
          <span />
        </div>
      </div>
    </NavBarStyled>
  )
}

export default NavBar
