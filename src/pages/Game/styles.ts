import styled from 'styled-components'
import { LayoutStyled } from './../../components/Layout/styles'

export const GamePageStyled = styled.div`
  ${LayoutStyled} {
    .flex {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
    }

    .button {
      background-color: #4caf50; /* Green */
      border: none;
      color: white;
      padding: 15px 32px;
      text-align: center;
      text-decoration: none;
      display: inline-block;
      font-size: 16px;
      position: relative;
      left: 50%;
      transform: translate(-50%, 0);
      margin-bottom: 20px;
    }
  }
`
