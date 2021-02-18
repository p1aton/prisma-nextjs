import styled from 'styled-components'
import { PokemonCardStyled } from 'src/components/PokemonCard/styles'

export const BoardStyled = styled.div`
  /* root  */
  background-image: url(./assets/board.png);
  background-size: cover;
  background-repeat: no-repeat;
  height: calc(100vw / 1.71);
  position: relative;

  .board {
    display: grid;
    grid-template-columns: auto auto auto;
    position: absolute;
    width: 50.3vw;
    height: 50.3vw;
    top: 4.3vw;
    left: 25.1vw;

    .boardPlate {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 6px;
      cursor: pointer;

      &:hover {
        background: rgba(255, 255, 255, 0.1);
      }

      &.disabled:hover {
        background: none;
      }
    }
  }

  ${PokemonCardStyled} {
    height: 100%;
    max-height: 14.8vw;
    margin-top: -6vw;

    &:first-child {
      margin-top: 0;
    }
  }

  .playerOne {
    position: absolute;
    top: 4.3vw;
    left: 5vw;
    width: 250px;
    height: 50.3vw;
  }
`
