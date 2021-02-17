import { useCallback, useState } from 'react'

import Menu from '../../components/Menu'
import NavBar from '../../components/Navbar'
import { MenuHeaderProps } from './interfaces.js'

const MenuHeader: React.FC<MenuHeaderProps> = ({ bgActive }) => {
  const [isOpen, setOpen] = useState(false)

  const handleClickHamburg = useCallback(() => {
    setOpen((prevState) => !prevState)
  }, [])

  return (
    <>
      <Menu isOpen={isOpen} onChangeActive={handleClickHamburg} />
      <NavBar
        isOpen={isOpen}
        bgActive={bgActive}
        onClickHamburg={handleClickHamburg}
      />
    </>
  )
}

export default MenuHeader
