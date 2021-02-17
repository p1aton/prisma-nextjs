import styled from 'styled-components'

export const MenuStyled = styled.div`
  position: fixed;
  height: 100vh;
  width: 100vw;
  background: #202934;
  border: 60px solid #181d23;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  opacity: 0;
  z-index: -1;

  > .overlay,
  &.active > .overlay {
    position: absolute;
    right: 0;
    height: calc(100vh - 120px);
    width: calc(100vw - 120px);
    background: #202736;
  }

  &.active > .overlay {
    animation: overlay-slide-in 300ms forwards 300ms;
  }

  @keyframes overlay-slide-in {
    from {
      width: calc(100vw - 120px);
    }
    to {
      width: 0;
    }
  }

  > .overlay {
    animation: overlay-slide-out 300ms forwards;
  }

  @keyframes overlay-slide-out {
    from {
      left: 0;
      width: 0;
    }
    to {
      left: 0;
      width: calc(100vw - 120px);
    }
  }

  ::before,
  ::after {
    content: '';
    position: absolute;
    width: 100%;
    min-height: 100vh;
    z-index: -1;
  }

  ::before {
    background: url('https://raw.githubusercontent.com/yagoestevez/fcc-portfolio/master/src/Images/Stars.svg?sanitize=true');
  }

  ::after {
    background: url('https://raw.githubusercontent.com/yagoestevez/fcc-portfolio/master/src/Images/Trees.svg?sanitize=true')
      bottom repeat-x;
  }

  &.deactive {
    animation: fade-out 600ms forwards;
  }

  @keyframes fade-out {
    0% {
      opacity: 1;
      z-index: 999;
    }
    50% {
      opacity: 1;
      z-index: 999;
    }
    100% {
      opacity: 0;
      z-index: -1;
    }
  }

  &.active {
    animation: fade-in 300ms forwards;
  }

  @keyframes fade-in {
    from {
      opacity: 0;
      z-index: -1;
    }
    to {
      opacity: 1;
      z-index: 999;
    }
  }

  /***** Menu Items: Animation *****/
  ul {
    margin-left: -80px;
    opacity: 0;
    animation: slide-out 200ms forwards;
  }

  ul {
    list-style-type: none !important;
    font-size: 3rem;
  }

  @keyframes slide-out {
    from {
      opacity: 1;
      margin-left: 0px;
    }
    to {
      opacity: 0;
      margin-left: -80px;
    }
  }

  &.active ul {
    animation: slide-in 300ms forwards 600ms;
  }

  @keyframes slide-in {
    from {
      opacity: 0;
      margin-left: -80px;
    }
    to {
      opacity: 1;
      margin-left: 0;
    }
  }

  /***** Menu Items: Hover Animation *****/
  ul li {
    border-left: 0.2rem solid transparent;
    transition: border-left 200ms;
  }

  ul li a {
    font-size: 3rem;
    padding-left: 0.5rem;
  }

  ul li a::after {
    content: ' »';
    font-size: 2.5rem;
    color: transparent;
    transition: color 200ms;
  }

  ul li a:hover::after {
    content: ' »';
    color: #f300b4;
  }

  a,
  a:visited {
    color: #fafafa;
  }

  a:hover,
  a:active {
    color: #f300b4;
  }

  @media only screen and (max-width: 649px) {
     {
      border: none;
    }

    > .overlay,
    &.active > .overlay {
      height: 100vh;
      width: 100vw;
    }

    &.active > .overlay {
      animation: overlay-slide-in 300ms forwards 300ms;
    }

    @keyframes overlay-slide-in {
      from {
        width: 100vw;
      }
      to {
        width: 0;
      }
    }

    .menu-container > .overlay {
      animation: overlay-slide-out 300ms forwards;
    }

    @keyframes overlay-slide-out {
      from {
        left: 0;
        width: 0;
      }
      to {
        left: 0;
        width: 100vw;
      }
    }
  }
`
