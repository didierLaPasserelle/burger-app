import { css, keyframes } from "styled-components";

export const fadeInFromRight = keyframes`
0% {
  position: absolute;
  z-index: -1;
  opacity: 0;
  transform: translateX(100%);
}

100% {
  opacity: 1;
  transform: translateX(0);
}

`;

export const fadeInFromBottom = keyframes`
  0%{
    transform: translateY(100%);
    opacity: 0;
  }

  100%{
    transform: translateY(0%);
    opacity: 1;
  }

`;

export const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateX(100%);
  }
  to {
    opacity: 1;
    transform: translateX(0%);
  }
`

export const adminAnimation = css`
  .admin-appear {
    opacity: 0.1;
    transform: translateY(100%);
  }
  .admin-appear-active {
    opacity: 1;
    transform: translateY(0);
    transition: all 500ms;
  }
`;

export const basketAnimation = css`
  .animation-basket-appear {
    .card {
      transform: translateX(100px);
      opacity: 0%;
    }
  }
  .animation-basket-appear-active {
    .card {
      transition: 300ms;
      transform: translateX(0px);
      opacity: 100%;
    }
  }

  .animation-basket-enter {
    .card {
      transform: translateX(100px);
      opacity: 0%;
    }
  }
  .animation-basket-enter-active {
    .card {
      transition: 300ms;
      transform: translateX(0px);
      opacity: 100%;
    }
  }

  .animation-basket-exit {
    .card {
      transform: translateX(0px);
      opacity: 100%;
    }
  }
  .animation-basket-exit-active {
    .card {
      transition: 300ms;
      opacity: 0%;
      transform: translateX(-100px);
    }
  }
`;

export const menuAnimation = css`
  /* MOUNTING */
  .menu-animation-enter {
    opacity: 0.01;
    transform: translateX(-120px);
  }
  .menu-animation-enter-active {
    opacity: 1;
    transform: translateY(0);
    transition: all 300ms ease-out;
  }

  /* UNMOUNTING */
  .menu-animation-exit {
    opacity: 1;
    transform: translateY(0);
  }
  .menu-animation-exit-active {
    opacity: 0.01;
    transition: 300ms ease-out;
  }
`;
