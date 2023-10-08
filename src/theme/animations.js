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
      transform: translate(100px);
      opacity: 0%;
    }
  }
  .animation-basket-appear-active {
    .card {
      transition: 300ms;
      transform: translate(0px);
      opacity: 100%;
    }
  }

  .animation-basket-enter {
    .card {
      transform: translate(100px);
      opacity: 0%;
    }
  }
  .animation-basket-enter-active {
    .card {
      transition: 300ms;
      transform: translate(0px);
      opacity: 100%;
    }
  }

  .animation-basket-exit {
    .card {
      transform: translate(0px);
      opacity: 100%;
    }
  }
  .animation-basket-exit-active {
    .card {
      transition: 300ms;
      opacity: 0%;
      transform: translate(-100px);
    }
  }
`;
