import styled, { css } from 'styled-components'

type AppStyledProps = {
  isHomePage: boolean
}

export const AppStyled = styled.div<AppStyledProps>`
  min-height: calc(100vh - 100px);

  ${({ isHomePage }) => {
    if (isHomePage) {
      return css`
        padding: 0;
      `
    } else {
      return css`
        padding: 96px 32px 24px;
      `
    }
  }}
`
