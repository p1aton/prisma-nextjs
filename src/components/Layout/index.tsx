import { LayoutProps } from './interfaces'
// import s from './style.module.css'
import { LayoutStyled } from './styles'

/**
 * Компонент шаблонизации
 */

const Layout: React.FC<LayoutProps> = ({
  id,
  title,
  urlBg,
  colorBg,
  children,
}) => {
  const style = {
    backgroundColor: colorBg ? `${colorBg}` : 'none',
    backgroundImage: urlBg ? `url('${urlBg}')` : 'none',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  }
  return (
    <LayoutStyled  id={id} style={style}>
      <div className={"wrapper"}>
        <article>
          <div className={"title"}>
            <h3>{title}</h3>
            <span className={"separator"}></span>
          </div>
          <div className={`desc full`}>{children}</div>
        </article>
      </div>
    </LayoutStyled>
  )
}

export default Layout
