// import s from './style.module.css'

import { FooterStyled } from './styles'

const Footer = () => {
  return (
    <FooterStyled>
      <div className={'wrapper'}>
        <h3>THANKS FOR VISITING</h3>
        <p>© 2021 #ReactMarathon.</p>
      </div>
    </FooterStyled>
  )
}

export default Footer
