import React from "react";
import styled from "styled-components";
import { theme } from "../../../../../theme";

export default function Welcome() {
  return (
    <WelcomeStyled>
      <h1>Vive le commerce <br /> vivant !</h1>
    </WelcomeStyled>
  );
}

const WelcomeStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-style: italic;
  text-align: center;
  font-family: "Gilroy", sans-serif;

  h1 {
    line-height: 5rem;
    text-transform: uppercase;
    color: ${theme.colors.white};
    font-size: ${theme.fonts.size.P6};
  }

`;
