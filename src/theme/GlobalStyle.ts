import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

  body, html {
    padding: 0;
    margin: 0;
  }

  .wrap {
    min-height: calc(100wh - 100px);
    padding: 96px 32px 24px;
}

.wrap.isHomePage {
    padding: 0;
}

`
