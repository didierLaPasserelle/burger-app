import React from "react";
import styled from "styled-components";
import { theme } from "../../../../theme";

export default function Welcome() {
  return (
    <WelcomeStyled>
      <h1>Vive le commerce vivant !</h1>
      <hr />
    </WelcomeStyled>
  );
}

const WelcomeStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-style: italic;
  text-align: center;

  h1 {
    font-family: "Gilroy", sans-serif;
    font-weight: ${theme.fonts.weights.extraHeavy};
    line-height: 5rem;
    text-transform: uppercase;
    color: ${theme.colors.white};
    font-size: ${theme.fonts.size.P6};
  }

  hr {
    border: 1.5px solid ${theme.colors.primary};
    margin-bottom: ${theme.gridUnit * 5}px;
    margin-top: ${theme.gridUnit * 5}px;
  }
`;
